<?php
// 设置yt-dlp的路径 yt-dlp
$ytDlpPath = 'yt-dlp';

// 检查yt-dlp是否正在运行
$running = false;
$processInfo = '';
exec("ps -ef | grep $ytDlpPath | grep -v grep | awk '{print$2}'", $output);
if (!empty($output)) {
    $running = true;
    // 获取yt-dlp进程信息
    exec("ps -p {$output[0]}", $processOutput);
    $processInfo = implode("\n", $processOutput);
}

// 处理提交
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['url'])) {
    $url = $_POST['url'];

    // 执行命令并捕获输出  --proxy=http://127.0.0.1:7890
    $pid = popen("$ytDlpPath $url | tee downloading.log &", "r");
    pclose($pid);
    // 等待片刻以确保新日志已经写入
    sleep(1);
    // 自动刷新页面
    echo '<meta http-equiv="refresh" content="0">';
    exit;
}

// 获取downloading.log的最后一行
$logContent = '';
if (file_exists('downloading.log')) {
    $content = shell_exec("tail -c 500 downloading.log");
    // 将回车符（\r）替换为换行符（\n）
    $content = str_replace("\r", "\n", $content);
    // 将文件内容拆分为行
    $lines = explode("\n", $content);
    // 取得最后3行
    $lastThreeLines = array_slice($lines, -3);
    $logContent = implode("\n", $lastThreeLines);
}

// 终止yt-dlp进程
if (isset($_POST['terminate']) && $running) {
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
    <title>yt-dlp 控制页面</title>
    <!-- 新 Bootstrap5 核心 CSS 文件 -->
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/5.1.1/css/bootstrap.min.css">
    <!--  popper.min.js 用于弹窗、提示、下拉菜单 -->
    <script src="https://cdn.staticfile.org/popper.js/2.9.3/umd/popper.min.js"></script>
    <!-- 最新的 Bootstrap5 核心 JavaScript 文件 -->
    <script src="https://cdn.staticfile.org/twitter-bootstrap/5.1.1/js/bootstrap.min.js"></script>
</head>
<body class="bg-light text-dark">

<div class="container mt-1">
    <div class="p-4 bg-secondary rounded">
        <h2 class="text-white">yt-dlp 状态信息</h2>
        <div class="bg-light p-3 mt-3">
            <?php if ($running): ?>
                <p>yt-dlp 正在运行，进程信息如下：</p>
                <textarea class="form-control" rows="2" readonly><?= $processInfo ?></textarea>
                <form method="post">
                    <input class="btn btn-danger mt-2" type="submit" name="terminate" value="点击停止下载">
                </form>
                <p class="mt-4">实时下载日志：</p>
                <textarea class="form-control" rows="4" readonly><?= $logContent ?></textarea>
                <script>
                    // 每隔2秒刷新页面
                    setTimeout(function () {
                        location.reload();
                    }, 2000);
                </script>
            <?php else: ?>
                <p>yt-dlp 未在运行。上次下载日志：</p>
                <textarea class="form-control" rows="4" readonly><?= $logContent ?></textarea>
            <?php endif; ?>
        </div>
    </div>

    <div class="bg-secondary p-4 mt-2 rounded">
        <h2 class="text-white">下载视频</h2>
        <div class="bg-light p-3 mt-3 rounded">
            <form method="post">
                <textarea class="form-control" placeholder="请输入url" name="url" rows="3" required></textarea>
                <input class="btn btn-primary mt-2" type="submit" <?php if ($running): echo "btn-disable disabled"; endif; ?> value="提交">
            </form>
        </div>
    </div>

    <div class="bg-secondary text-white p-4 mt-2 rounded">
        <h2>已下载的视频</h2>
        <div class="bg-light p-3 mt-3 rounded">
            <table class="table">
                <thead>
                <tr>
                    <th style="min-width: 100px;">类型</th>
                    <th>文件名</th>
                    <th style="min-width: 100px; text-align: right;">文件大小</th>
                    <th style="min-width: 165px; text-align: right;">修改日期</th>
                </tr>
                </thead>
                <tbody>
                <?php
                // 获取当前目录路径
                $dir = './';
                // 递归遍历文件夹
                function listFiles($dir, $page)
                {
                    if (is_dir($dir)) {
                        if ($dh = opendir($dir)) {
                            while (($file = readdir($dh)) !== false) {
                                if ($file == '.' || $file == '..') {
                                    continue;
                                }
                                $textIndent = $page * 10;
                                if (is_dir($dir . $file)) {
                                    echo "<tr style='text-indent: " . $textIndent . "px;'>";
                                    echo "<td>文件夹</td>";
                                    echo "<td>" . $file . "</td>";
                                    echo "<td></td>";
                                    echo "<td></td>";
                                    echo "</tr>";
                                    listFiles($dir . $file . "/", $page + 1);
                                } else {
                                    $filePath = $dir . $file;
                                    $fileSize = filesize($filePath);
                                    $fileSizeFormatted = formatFileSize($fileSize);
                                    $fileModified = date("Y-m-d H:i:s", filemtime($filePath));
                                    $fileType = getFileType($file);
                                    echo "<tr style='text-indent: " . $textIndent . "px;'>";
                                    echo "<td>" . $fileType . "</td>";
                                    echo "<td><a href='" . $filePath . "' download>" . $file . "</a></td>";
                                    echo "<td style='text-indent:0px; text-align: right;'>" . $fileSizeFormatted . "</td>";
                                    echo "<td style='text-indent:0px; text-align: right;'>" . $fileModified . "</td>";
                                    echo "</tr>";
                                }
                            }
                            closedir($dh);
                        }
                    }
                }

                // 格式化文件大小
                function formatFileSize($size)
                {
                    $units = array('B', 'KB', 'MB', 'GB', 'TB');
                    $i = 0;
                    while ($size >= 1024 && $i < 4) {
                        $size /= 1024;
                        $i++;
                    }
                    return round($size, 2) . ' ' . $units[$i];
                }

                // 获取文件类型
                function getFileType($file)
                {
                    $extension = pathinfo($file, PATHINFO_EXTENSION);
                    if (!empty($extension)) {
                        return strtoupper($extension) . "文件";
                    } else {
                        return "文件";
                    }
                }

                // 调用递归函数
                listFiles($dir, 0);
                ?>
                </tbody>
            </table>
        </div>
    </div>
</div>
<!--<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
<script>
    console.log(window.innerWidth)
    var width = window.innerWidth;
    if(width < 768){
        $("tr th:eq(2)").hide()
        $("tr th:eq(3)").hide()
        $("tr td:eq(2)").hide()
        $("tr td:eq(3)").hide()
    }
</script>-->
</body>
</html>
