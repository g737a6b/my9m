<?php
$filePath = DOC_ROOT."/../google_analytics.txt";
if( file_exists($filePath) && is_readable($filePath) ) echo file_get_contents($filePath);
