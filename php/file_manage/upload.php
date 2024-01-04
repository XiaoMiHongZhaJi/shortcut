<?php
$folder = $_GET['folder'];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $targetDir = './' . $folder . '/';
    $targetFile = $targetDir . basename($_FILES['file']['name']);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    // 检查文件是否已存在
    //if (file_exists($targetFile)) {
    //    echo '文件已存在！';
    //    $uploadOk = 0;
    //}

    // 检查文件大小
    //if ($_FILES['file']['size'] > 1024 * 1024) {
    //    echo '文件大小不能超过1MB！';
    //    $uploadOk = 0;
    //}

    // 允许的文件格式
    //$allowedTypes = array('jpg', 'jpeg', 'png', 'gif');
    //if (!in_array($imageFileType, $allowedTypes)) {
    //    echo '只允许上传 JPG, JPEG, PNG, GIF 格式的文件！';
    //    $uploadOk = 0;
    //}

    if ($uploadOk == 0) {
        echo '文件上传失败！';
    } else {
        if (move_uploaded_file($_FILES['file']['tmp_name'], $targetFile)) {
            echo '文件上传成功！';
        } else {
            echo '文件上传失败！';
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>上传文件</title>
    <link rel="stylesheet" href="https://cdn.staticfile.org/layui/2.5.6/css/layui.min.css">
</head>
<body>
    <form class="layui-form" action="" method="post" enctype="multipart/form-data">
        <div class="layui-form-item">
            <label class="layui-form-label">选择文件</label>
            <div class="layui-input-block">
                <input type="file" name="file" lay-verify="required">
            </div>
        </div>
        <div class="layui-form-item">
            <div class="layui-input-block">
                <button class="layui-btn" lay-submit lay-filter="upload">上传</button>
            </div>
        </div>
    </form>

    <script src="https://cdn.staticfile.org/layui/2.5.6/layui.min.js"></script>
    <script>
        layui.use(['form'], function() {
            var form = layui.form;

            form.on('submit(upload)', function(data) {
                // 提交表单
                return true;
            });
        });
    </script>
</body>
</html>