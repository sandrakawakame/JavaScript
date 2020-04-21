<?php
$files=$_FILES['files'];
move_uploaded_file($files['tmp_name'], destination,"C:\Users\Sandra\Documents\MeusPojetos\javascript\ProgressBar/$files[name]");