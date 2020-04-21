<?php
$files=$_FILES['files'];
move_uploaded_file($files['tmp_name'],"C:/wamp/www/javascript/Javascript/ProgressBar/img/$files[name]");