<?php
define("DOC_ROOT", dirname(__DIR__, 1));
define("IS_DEV_MODE", false);
define("HOME_URL", "https://mofg.net/my9m");
define("TEMPLATE_DIR", DOC_ROOT."/templates");

mb_internal_encoding("UTF-8");
mb_regex_encoding("UTF-8");
mb_language("Japanese");

if( IS_DEV_MODE ){
	ini_set("display_errors", 1);
	error_reporting(E_ALL);
}else{
	ini_set("display_errors", 0);
	error_reporting(E_ALL & ~E_STRICT);
}

require_once(__DIR__."/../vendor/autoload.php");
require_once(__DIR__."/functions.php");
