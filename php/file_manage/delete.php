<?php
$file = $_GET['file'];
$filePath = './' . $file;

if (file_exists($filePath)) {
    if (is_dir($filePath)) {
        deleteFolder($filePath);
    } else {
        unlink($filePath);
    }
    echo '删除成功！';
} else {
    echo '文件不存在！';
}

function deleteFolder($folderPath) {
    $files = scandir($folderPath);

    foreach ($files as $file) {
        if ($file == '.' || $file == '..') {
            continue;
        }

        $filePath = $folderPath . '/' . $file;
        if (is_dir($filePath)) {
            deleteFolder($filePath);
        } else {
            unlink($filePath);
        }
    }

    rmdir($folderPath);
}
?>
