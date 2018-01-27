<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8" />
<?php $this->display("_parts/seo_tags.php"); ?>
<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
<?php $this->display("_parts/ogp_tags.php"); ?>
<title><?php echo h($title); ?></title>
<link rel="apple-touch-icon" href="<?php echo $homeUrl; ?>/img/icon-320.png" />
<link rel="icon" sizes="192x192" href="<?php echo $homeUrl; ?>/img/icon-192.png" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Berkshire+Swash" />
<link rel="stylesheet" href="<?php echo $homeUrl.appendTimestamp(( !empty($css) ) ? "/css/{$css}" : "/css/default.css"); ?>" />
<?php $this->display("_parts/head_tags.php"); ?>
<script>
var payload = <?php echo ( !empty($payload) ) ? json_encode($payload, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT) : "{}"; ?>;
</script>
</head>
<body>
<div id="wrapper">
<?php $this->display($include); ?>
<?php $this->display("_parts/footer.php"); ?>
</div><!-- #wrapper -->
<script src="<?php echo $homeUrl.appendTimestamp(( !empty($js) ) ? "/js/{$js}" : "/js/default.js"); ?>"></script>
</body>
</html>
