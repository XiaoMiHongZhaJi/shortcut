<!DOCTYPE html>
<html>
<head>
    <title>文件列表</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <style>
		tbody, td, tfoot, th, thead, tr {
			border-width: 1px;
		}
		.table>:not(caption)>*>* {
			padding: .4rem .3rem;
		}
        .table th {
            text-align: center;
        }

        .table td:nth-child(1) {
            text-align: right;
            min-width: 75px;
        }
        .table td:nth-child(2) {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .table td:nth-child(3) {
            text-align: right;
            min-width: 85px;
        }
        .table td:nth-child(4) {
            text-align: center;
            min-width: 150px;
        }

    </style>
</head>
<body>
    <div class="container">
        <h1>文件列表</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>类型</th>
                    <th>文件名</th>
                    <th>文件大小</th>
                    <th>修改日期</th>
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
								if (is_dir($dir . $file)) {
									echo "<tr>";
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

									echo "<tr>";
									echo "<td>" . $page . $fileType . "</td>";
									echo "<td><a href='" . $filePath . "' download>" . $file . "</a></td>";
									echo "<td>" . $fileSizeFormatted . "</td>";
									echo "<td>" . $fileModified . "</td>";
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

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
