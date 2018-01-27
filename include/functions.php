<?php
/**
 * @param mixed $str
 * @return mixed
 */
function h($str){
	if( is_array($str) ) return array_map("h", $str);
	if( !is_string($str) ) return $str;
	return htmlspecialchars($str);
}

/**
 * @param mixed $str
 * @return mixed
 */
function sanitize($str){
	if( is_array($str) ) return array_map("sanitize", $str);
	if( !is_string($str) ) return $str;
	return str_replace("\0", "", $str);
}

/**
 * @param object $Template R2Template
 */
function setDefaults($Template){
	$Template->set("homeUrl", HOME_URL);
	$Template->set("css", "default.css");
	$Template->set("js", "default.js");
	$Template->set("title", "My9");
	$Template->set("payload", []);
}

/**
 * @param string $filePath
 * @return string
 */
function appendTimestamp($filePath){
	$fullPath = DOC_ROOT.DIRECTORY_SEPARATOR.ltrim($filePath, DIRECTORY_SEPARATOR);
	$timestamp = ( file_exists($fullPath) && $timeModified = filemtime($fullPath) ) ? $timeModified : strtotime(date("Y-m-d"));
	return "{$filePath}?{$timestamp}";
}
