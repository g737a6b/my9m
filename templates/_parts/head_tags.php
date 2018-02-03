<?php
$filePath = DOC_ROOT."/../my9m-tags.txt";
if( file_exists($filePath) && is_readable($filePath) ) echo file_get_contents($filePath);
