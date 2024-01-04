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
                    echo '<button class="layui-btn layui-btn-normal layui-btn-sm" onclick="toggleFolder(\'' . $file . '\')">展开</button>';
                }
                echo '</td>';
                echo '</tr>';

                if ($fileType == '文件夹') {
                    echo '<tr id="' . $file . '" style="display: none;">';
                    echo '<td colspan="5">';
                    echo '<table class="layui-table">';
                    echo '<thead>';
                    echo '<tr>';
                    echo '<th>类型</th>';
                    echo '<th>文件名</th>';
                    echo '<th>文件大小</th>';
                    echo '<th>修改日期</th>';
                    echo '<th>操作</th>';
                    echo '</tr>';
                    echo '</thead>';
                    echo '<tbody>';

                    $subFiles = scandir($filePath);
                    foreach ($subFiles as $subFile) {
                        if ($subFile == '.' || $subFile == '..') {
                            continue;
                        }

                        $subFilePath = $filePath . '/' . $subFile;
                        $subFileSize = is_dir($subFilePath) ? getFolderSize($subFilePath) : getFileSize($subFilePath);
                        $subFileType = is_dir($subFilePath) ? '文件夹' : '文件';
                        $subFileDate = date('Y-m-d H:i:s', filemtime($subFilePath));

                        echo '<tr>';
                        echo '<td>' . $subFileType . '</td>';
                        echo '<td>';
                        if ($subFileType == '文件') {
                            echo '<a href="download.php?file=' . urlencode($subFile) . '">' . $subFile . '</a>';
                        } else {
                            echo $subFile;
                        }
                        echo '</td>';
                        echo '<td>' . formatSize($subFileSize) . '</td>';
                        echo '<td>' . $subFileDate . '</td>';
                        echo '<td>';
                        if ($subFileType == '文件') {
                            echo '<button class="layui-btn layui-btn-danger layui-btn-sm" onclick="deleteFile(\'' . $subFile . '\')">删除</button>';
                        } else {
                            echo '<button class="layui-btn layui-btn-normal layui-btn-sm" onclick="toggleFolder(\'' . $subFile . '\')">展开</button>';
                        }
                        echo '</td>';
                        echo '</tr>';
                    }

                    echo '</tbody>';
                    echo '</table>';
                    echo '</td>';
                    echo '</tr>';
                }
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
                    deleteFileRequest(file);
                });
            }

            function deleteFileRequest(file) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status === 200) {
                            layer.msg(xhr.responseText, {icon: 1});
                            location.reload();
                        } else {
                            layer.msg('删除文件失败！', {icon: 2});
                        }
                    }
                };
                xhr.open('GET', 'delete.php?file=' + encodeURIComponent(file), true);
                xhr.send();
            }

            function toggleFolder(folder) {
                var folderRow = document.getElementById(folder);
                if (folderRow.style.display === 'none') {
                    folderRow.style.display = '';
                } else {
                    folderRow.style.display = 'none';
                }
            }

            window.deleteFile = deleteFile;
            window.toggleFolder = toggleFolder;
        });
    </script>
</body>
</html>
