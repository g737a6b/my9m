<?php
require_once(__DIR__."/../include/init.php");

$Template = new R2Template\R2Template(TEMPLATE_DIR);
setDefaults($Template);

$Template->set("include", "_pages/help.php");
$Template->set("title", "ヘルプ - My9");
$Template->set("description", "よくある質問についてまとめています。My9(マイキュー)はキュー型のタスク管理ツールです。");
$Template->set("canonical", HOME_URL."/help/");
$Template->set("ogp", [
	"title" => "ヘルプ - My9",
	"description" => "よくある質問についてまとめています。My9(マイキュー)はキュー型のタスク管理ツールです。",
	"url" => HOME_URL."/help/",
	"image" => HOME_URL."/img/ogp_default.png"
]);
$Template->display("default.php");
