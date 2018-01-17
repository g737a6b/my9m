<?php
if( empty($ogp) || !is_array($ogp) ) return;
if( !isset($ogp["site_name"]) ) $ogp["site_name"] = "My9";
?>
<?php if( !empty($ogp["title"]) ): ?>
<meta property="og:title" content="<?php echo h($ogp["title"]); ?>" />
<?php endif; ?>
<?php if( !empty($ogp["site_name"]) ): ?>
<meta property="og:site_name" content="<?php echo h($ogp["site_name"]); ?>" />
<?php endif; ?>
<?php if( !empty($ogp["url"]) ): ?>
<meta property="og:url" content="<?php echo h($ogp["url"]); ?>" />
<?php endif; ?>
<?php if( !empty($ogp["description"]) ): ?>
<meta property="og:description" content="<?php echo h($ogp["description"]); ?>" />
<?php endif; ?>
<?php if( !empty($ogp["image"]) ): ?>
<meta property="og:image" content="<?php echo h($ogp["image"]); ?>" />
<?php endif; ?>
<meta name="twitter:card" content="summary_large_image" />
