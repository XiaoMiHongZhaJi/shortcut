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
                $fileSize = filesize($filePath);
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
                echo '<td>' . formatSizeUnits($fileSize) . '</td>';
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

            function formatSizeUnits($bytes)
            {
                if ($bytes >= 1073741824) {
                    $bytes = number_format($bytes / 1073741824, 2) . ' GB';
                } elseif ($bytes >= 1048576) {
                    $bytes = number_format($bytes / 1048576, 2) . ' MB';
                } elseif ($bytes >= 1024) {
                    $bytes = number_format($bytes / 1024, 2) . ' KB';
                } elseif ($bytes > 1) {
                    $bytes = $bytes . ' bytes';
                } elseif ($bytes == 1) {
                    $bytes = $bytes . ' byte';
                } else {
                    $bytes = '0 bytes';
                }

                return $bytes;
            }
            ?>
        </tbody>
    </table>

    <script src="https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.staticfile.org/layui/2.5.6/layui.min.js"></script>
    <script>
        function deleteFile(file) {
            layer.confirm('确定要删除该文件吗？', function(index) {
                $.post('delete.php', {file: file}, function(data) {
                    layer.msg(data, {time: 2000}, function() {
                        location.reload();
                    });
                });
                layer.close(index);
            });
        }

        function uploadFile(folder) {
            layer.open({
                type: 2,
                title: '上传文件',
                content: 'upload.php?folder=' + folder,
                area: ['500px', '300px'],
                maxmin: true
            });
        }
    </script>
</body>
</html>
