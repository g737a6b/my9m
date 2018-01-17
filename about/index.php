<?php
require_once(__DIR__."/../include/init.php");

$Template = new R2Template\R2Template(TEMPLATE_DIR);
setDefaults($Template);

$Template->set("include", "_pages/about.php");
$Template->set("title", "My9とは");
$Template->set("description", "タスク管理の原則やツールの利用方法について説明しています。My9(マイキュー)はキュー型のタスク管理ツールです。");
$Template->set("canonical", HOME_URL."/about/");
$Template->set("ogp", [
	"title" => "My9とは",
	"description" => "タスク管理の原則やツールの利用方法について説明しています。My9(マイキュー)はキュー型のタスク管理ツールです。",
	"url" => HOME_URL."/about/",
	"image" => HOME_URL."/img/ogp_default.png"
]);
$Template->display("default.php");
