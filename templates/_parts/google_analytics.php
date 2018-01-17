<?php
$filePath = DOC_ROOT."/include/google_analytics.txt";
if( file_exists($filePath) && is_readable($filePath) ) echo file_get_contents($filePath);
