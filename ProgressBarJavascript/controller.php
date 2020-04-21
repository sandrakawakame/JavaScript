<?php
$files=$_FILES['files'];
move_uploaded_file($files['tmp_name'],"C:/wamp/www/ProgressBarJavascript/$files[name]");
