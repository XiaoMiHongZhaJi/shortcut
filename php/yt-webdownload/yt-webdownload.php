<?php
// 设置yt-dlp的路径 yt-dlp
$ytDlpPath = 'yt-dlp';
$ffmpegPath = 'ffmpeg';

// 检查yt-dlp是否正在运行
$running = false;
$processInfo = '';
exec("ps -ef | grep $ytDlpPath | grep -v grep | awk '{print$2}'", $ytdlpOutput);
exec("ps -ef | grep $ffmpegPath | grep -v grep | awk '{print$2}'", $ffmpegOutput);
if (!empty($ytdlpOutput)){
    $running = true;
    // 获取yt-dlp进程信息
    exec("ps -ef | grep $ytDlpPath | grep -v grep", $processOutput);
    $processInfo = trim(implode("\n", $processOutput));
} else if (!empty($ffmpegOutput)){
    $running = true;
    // 获取ffmpeg进程信息
    exec("ps -ef | grep $ffmpegPath | grep -v grep", $processOutput);
    $processInfo = trim(implode("\n", $processOutput));
}

// 处理提交
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])){
    if ($_POST['action'] == 'ytdlp'){
        if (isset($_POST['url'])){
            $url = $_POST['url'];
            // 查找 & 的位置
            $ampersandPos = strpos($url, '&');
            // 截取字符串
            if ($ampersandPos !== false){
                $url = substr($url, 0, $ampersandPos);
            }
            // 执行命令并捕获输出  --proxy=http://127.0.0.1:7890
            $pid = popen("$ytDlpPath $url | tee action.log &", "r");
            pclose($pid);
            // 等待片刻以确保新日志已经写入
            sleep(1);
            // 自动刷新页面
            echo '<meta http-equiv="refresh" content="0">';
            exit;
        }
    } else if ($_POST['action'] == 'conver2Audio'){
        if (isset($_POST['file'])){
            $file = $_POST['file'];
            $ampersandPos = strpos($file, '&');
            // 截取字符串
            if ($ampersandPos !== false){
                $url = substr($file, 0, $ampersandPos);
            }
            $file = realpath('./' . $file);
            $filename = pathinfo($file, PATHINFO_FILENAME);
            // 执行命令并捕获输出
            $pid = popen("$ffmpegPath -i $file -c:a copy $filename.aac 2>&1 | tee action.log &", "r");
            pclose($pid);
            // 等待片刻以确保新日志已经写入
            sleep(1);
            // 自动刷新页面
            echo '<meta http-equiv="refresh" content="0">';
            exit;
        }
    }
}

// 获取action.log的最后一行
$logContent = '';
if (file_exists('action.log')){
    $content = shell_exec("tail -c 500 action.log");
    // 将回车符（\r）替换为换行符（\n）
    $content = str_replace("\r", "\n", $content);
    // 将文件内容拆分为行
    $lines = explode("\n", $content);
    // 取得最后3行
    $lastThreeLines = array_slice($lines, -4);
    $logContent = rtrim(implode("\n", $lastThreeLines));
}

// 终止yt-dlp进程
if (isset($_POST['terminate']) && $running){
    exec("pkill -f $ytDlpPath");
    // 等待片刻以确保进程已经终止
    sleep(1);
    // 自动刷新页面
    echo '<meta http-equiv="refresh" content="0">';
    exit;
}
?>

<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>视频下载器</title>
    <!-- 新 Bootstrap5 核心 CSS 文件 -->
    <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.3.1/css/bootstrap.min.css" rel="stylesheet">
    <!--  popper.min.js 用于弹窗、提示、下拉菜单 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.3.1/js/bootstrap.bundle.min.js"></script>
</head>
<body class="bg-light text-dark">

<div class="container mt-2 mb-2">

    <div class="bg-secondary p-3 rounded">
        <h3 class="text-white">下载新的视频</h3>
        <div class="bg-light p-3 mt-3 rounded">
            <form method="post">
                <input type="hidden" name="action" value="ytdlp">
                <textarea class="form-control" placeholder="请输入url" name="url" rows="3" required></textarea>
                <input class="btn btn-primary mt-2" type="submit" <?php if ($running): echo "btn-disable disabled title='当前有视频正在下载，请等待下载完成'"; endif; ?> value="开始下载">
            </form>
        </div>
    </div>

    <div class="bg-secondary p-3 mt-2 rounded">
        <h3 class="text-white">状态信息</h3>
        <div class="bg-light p-3 mt-3 rounded">
            <?php if ($running): ?>
                <div class="alert alert-success">
                    <strong>提交成功，视频正在下载!</strong> 进程信息如下：
                </div>
                <textarea class="form-control" rows="2" readonly><?= $processInfo ?></textarea>
                <!--<form method="post">
                    <input class="btn btn-danger mt-2" type="submit" name="terminate" value="点击停止下载">
                </form>-->
                <script>
                    // 每隔2秒刷新页面
                    setTimeout(function (){
                        location.reload();
                    }, 2000);
                </script>
                <p class="mt-4">实时下载日志：</p>
            <?php else: ?>
                <div class="alert alert-info">
                    <strong>视频已下载完成。</strong>
                    <?php
                    $freeSpace = disk_free_space("./");
                    $freeSpace = formatFileSize($freeSpace);
                    echo '<strong>磁盘剩余空间：' . $freeSpace . '。</strong>'
                    ?>
                    以下是上次下载的日志信息：
                </div>
            <?php endif; ?>
            <textarea class="form-control" rows="3" readonly><?= $logContent ?></textarea>
        </div>
    </div>

    <div class="bg-secondary text-white p-3 mt-2 rounded">
        <h3>已下载的视频 <button class="btn btn-light" onclick="javascript:location.href = location.href;">刷新</button></h3>
        <div class="bg-light p-3 mt-3 rounded">
            <div class="alert alert-primary">
                <?php
                // 处理删除操作
                if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && isset($_POST['file'])){
                    if ($_POST['action'] == 'delete'){
                        $fileToDelete = $_POST['file'];
                        // 防止删除其他目录下的文件
                        $filePathToDelete = realpath('./' . $fileToDelete);
                        unlink($filePathToDelete);
                        echo '<strong style="color: red;">文件删除成功</strong>';
                    }
                }
                ?>
                <strong>点击链接可直接下载到本地。</strong> 右键复制链接可以在 idm 中下载。
            </div>
            <div class="bg-light rounded">
                <table class="table">
                    <thead>
                    <tr>
                        <!--                        <th style="min-width: 100px;">类型</th>-->
                        <th>文件名</th>
                        <th style="min-width: 100px; text-align: right;" class="d-none d-sm-table-cell">文件大小</th>
                        <th style="min-width: 175px; text-align: right;" class="d-none d-md-table-cell">修改时间</th>
                        <th style="min-width: 80px; text-align: center;">操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php
                    // 获取当前目录路径
                    $dir = './';
                    // 递归遍历文件夹
                    function listFiles($dir, $page)
                    {
                        if (is_dir($dir)){
                            if ($dh = opendir($dir)){
                                $fileDetails = [];
                                while (($fileName = readdir($dh)) !== false){
                                    if ($fileName == '.' || $fileName == '..'){
                                        continue;
                                    }
                                    if (endsWithAny($fileName, [".php", ".log", ".sh", ".html"])){
                                        continue;
                                    }
                                    $filePath = $dir . $fileName;
                                    $fileDetails[$fileName] = [
                                        'name' => $fileName,
                                        'path' => $filePath,
                                        'type' => is_dir($filePath) ? '文件夹' : pathinfo($filePath, PATHINFO_EXTENSION),
                                        'size' => formatFileSize(filesize($filePath)),
                                        'time' => date("Y-m-d H:i:s", filemtime($filePath)),
                                        'filemtime' => filemtime($filePath),
                                    ];
                                }
                                // 按照修改时间降序排序
                                usort($fileDetails, function ($a, $b){
                                    return $b['filemtime'] - $a['filemtime'];
                                });

                                $textIndent = $page * 10;
                                foreach ($fileDetails as $fileDetail) :
                                    $fileName = $fileDetail['name'];
                                    $fileType = $fileDetail['type'];
                                    $filePath = $fileDetail['path'];
                                    if ($fileType == "文件夹"){
                                        echo "<tr style='text-indent: " . $textIndent . "px;'>";
//                                        echo "<td>" . $fileType . "</td>";
                                        echo "<td>【文件夹】" . $fileName . "</td>";
                                        echo "<td class='d-none d-md-table-cell'></td>";
                                        echo "<td class='d-none d-md-table-cell'></td>";
                                        echo "<td class='d-none d-md-table-cell'></td>";
                                        echo "</tr>";
                                        listFiles($filePath . "/", $page + 1);
                                    } else {
                                        echo "<tr style='text-indent: " . $textIndent . "px;'>";
//                                        echo "<td>" . $fileType . "</td>";
                                        echo "<td><a href='" . $filePath . "'>" . $fileName . "</a></td>";
                                        echo "<td style='text-indent:0px; text-align: right;' class='d-none d-sm-table-cell'>" . $fileDetail['size'] . "</td>";
                                        echo "<td style='text-indent:0px; text-align: right;' class='d-none d-md-table-cell'>" . $fileDetail['time'] . "</td>";
                                        echo '<td style="text-indent:0px; text-align: center; padding: 4px;">
                                                <a class="btn btn-outline-primary" href="' . $filePath . '" download>下载</a>
                                                <form method="post" style="display: inline;">
                                                    <input type="hidden" name="action" value="delete">
                                                    <input type="hidden" name="file" value="' . htmlspecialchars($fileName) . '">
                                                    <input class="btn btn-outline-danger" type="submit" value="删除" style="text-align: right;">
                                                </form>';
                                        if ($fileType == "mp4"){
                                            echo '<form method="post" style="display: inline;">
                                                      <input type="hidden" name="action" value="conver2Audio">
                                                      <input type="hidden" name="file" value="' . htmlspecialchars($fileName) . '">
                                                      <input class="btn btn-outline-dark" type="submit" value="转音频" style="text-align: right;">
                                                  </form>';
                                        }
                                        echo '</td>';
                                        echo "</tr>";
                                    }
                                endforeach;

                                closedir($dh);
                            }
                        }
                    }
                    // 格式化文件大小
                    function formatFileSize($size){
                        $units = array('B', 'KB', 'MB', 'GB', 'TB');
                        $i = 0;
                        while ($size >= 1024 && $i < 4){
                            $size /= 1024;
                            $i++;
                        }
                        return round($size, 2) . ' ' . $units[$i];
                    }
                    // 以某字符串结尾
                    function endsWithAny($str, $suffixes){
                        foreach ($suffixes as $suffix){
                            $length = strlen($suffix);
                            // 使用substr获取字符串末尾的长度为$length的部分
                            $end = substr($str, -$length);
                            // 检查末尾是否与当前后缀相同
                            if ($end === $suffix){
                                return true;
                            }
                        }
                        return false;
                    }
                    // 调用递归函数
                    listFiles($dir, 0);
                    ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</body>
</html>
