<?php
require_once(__DIR__."/include/init.php");
if( !session_id() ) session_start();

$Template = new R2Template\R2Template(TEMPLATE_DIR);
setDefaults($Template);

$showWelcomeScreen = false;
if( empty($_SESSION["welcomeScreenShown"]) ){
	$_SESSION["welcomeScreenShown"] = true;
	$showWelcomeScreen = true;
}

$Template->set("js", "app.js");
$Template->set("include", "_pages/app.php");
$Template->set("payload", [
	"homeUrl" => strval(parse_url(HOME_URL, PHP_URL_PATH)),
	"showWelcomeScreen" => $showWelcomeScreen
]);
$Template->set("description", "My9(マイキュー)はキュー型のタスク管理ツールです。");
$Template->set("canonical", HOME_URL."/");
$Template->set("ogp", [
	"title" => "My9",
	"description" => "My9(マイキュー)はキュー型のタスク管理ツールです。",
	"url" => HOME_URL."/",
	"image" => HOME_URL."/img/ogp_default.png"
]);
$Template->display("default.php");
