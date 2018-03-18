<?php
if( empty($ogp) || !is_array($ogp) ) return;
if( !isset($ogp["og:site_name"]) ) $ogp["og:site_name"] = SITE_NAME;
?>
<?php foreach($ogp as $key => $value): ?>
<meta property="<?php echo h($key); ?>" content="<?php echo h($value); ?>" />
<?php endforeach; ?>
<meta name="twitter:card" content="summary_large_image" />
