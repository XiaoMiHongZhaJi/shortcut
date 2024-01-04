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
        <h1 class="text-white">yt-dlp 状态信息</h1>
        <?php if ($running): ?>
            <div class="bg-light p-3 mt-3">
                <p>yt-dlp 正在运行，进程信息如下：</p>
                <textarea class="form-control" rows="2" readonly><?= $processInfo ?></textarea>
                <form method="post">
                    <input class="btn btn-danger mt-2" type="submit" name="terminate" value="点击停止下载">
                </form>
                <p class="mt-4">实时下载日志：</p>
                <textarea class="form-control" rows="4" readonly><?= $logContent ?></textarea>
            </div>
            <script>
                // 每隔2秒刷新页面
                setTimeout(function () {
                    location.reload();
                }, 2000);
            </script>
        <?php else: ?>
            <div class="bg-light p-3 mt-3">
                <p>yt-dlp 未在运行。上次下载日志：</p>
                <textarea class="form-control" rows="4" readonly><?= $logContent ?></textarea>
            </div>
        <?php endif; ?>
    </div>

    <div class="bg-secondary p-4 mt-2 rounded">
        <form method="post">
            <h2 class="text-white">下载视频</h2>
            <div class="bg-light p-3 mt-3 rounded">
                <textarea class="form-control" placeholder="请输入url" name="url" rows="3" required></textarea>
                <input class="btn btn-primary mt-2" type="submit" <?php if ($running): echo "btn-disable disabled"; endif; ?> value="提交">
            </div>
        </form>
    </div>
</div>
</body>
</html>
