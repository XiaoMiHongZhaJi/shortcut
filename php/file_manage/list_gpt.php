<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>文件管理</title>
    <link rel="stylesheet" href="https://cdn.staticfile.org/layui/2.5.6/css/layui.min.css">
</head>
<body>
    <table class="layui-table">
        <thead>
            <tr>
                <th>类型</th>
                <th>文件名</th>
                <th>文件大小</th>
                <th>修改日期</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $dir = './'; // 当前目录
            $files = scandir($dir); // 获取目录下所有文件和文件夹

            foreach ($files as $file) {
                if ($file == '.' || $file == '..') {
                    continue;
                }

                $filePath = $dir . $file;
                $fileSize = is_dir($filePath) ? getFolderSize($filePath) : getFileSize($filePath);
                $fileType = is_dir($filePath) ? '文件夹' : '文件';
                $fileDate = date('Y-m-d H:i:s', filemtime($filePath));

                echo '<tr>';
                echo '<td>' . $fileType . '</td>';
                echo '<td>';
                if ($fileType == '文件') {
                    echo '<a href="download.php?file=' . urlencode($file) . '">' . $file . '</a>';
                } else {
                    echo $file;
                }
                echo '</td>';
                echo '<td>' . formatSize($fileSize) . '</td>';
                echo '<td>' . $fileDate . '</td>';
                echo '<td>';
                if ($fileType == '文件') {
                    echo '<button class="layui-btn layui-btn-danger layui-btn-sm" onclick="deleteFile(\'' . $file . '\')">删除</button>';
                } else {
                    echo '<button class="layui-btn layui-btn-normal layui-btn-sm" onclick="uploadFile(\'' . $file . '\')">上传</button>';
                }
                echo '</td>';
                echo '</tr>';
            }

            function getFileSize($filePath) {
                return filesize($filePath);
            }

            function getFolderSize($folderPath) {
                $totalSize = 0;
                $files = scandir($folderPath);

                foreach ($files as $file) {
                    if ($file == '.' || $file == '..') {
                        continue;
                    }

                    $filePath = $folderPath . '/' . $file;
                    if (is_dir($filePath)) {
                        $totalSize += getFolderSize($filePath);
                    } else {
                        $totalSize += getFileSize($filePath);
                    }
                }

                return $totalSize;
            }

            function formatSize($size) {
                $units = array('B', 'KB', 'MB', 'GB', 'TB');
                $i = 0;

                while ($size >= 1024 && $i < 4) {
                    $size /= 1024;
                    $i++;
                }

                return round($size, 2) . ' ' . $units[$i];
            }
            ?>
        </tbody>
    </table>

    <script src="https://cdn.staticfile.org/layui/2.5.6/layui.min.js"></script>
    <script>
        layui.use(['layer'], function() {
            var layer = layui.layer;

            function deleteFile(file) {
                layer.confirm('确定要删除该文件吗？', function(index) {
                    layer.close(index);
                    // 发送删除文件的请求
                    window.location.href = 'delete.php?file=' + encodeURIComponent(file);
                });
            }

            function uploadFile(folder) {
                layer.open({
                    type: 2,
                    title: '上传文件',
                    content: 'upload.php?folder=' + encodeURIComponent(folder),
                    area: ['500px', '300px'],
                    maxmin: true
                });
            }

            window.deleteFile = deleteFile;
            window.uploadFile = uploadFile;
        });
    </script>
</body>
</html>
