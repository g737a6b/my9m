<?php if( !empty($noindex) ): ?>
<meta name="robots" content="noindex" />
<?php endif; ?>
<?php if( !empty($description) ): ?>
<meta name="description" content="<?php echo h($description); ?>" />
<?php endif; ?>
<?php if( !empty($canonical) ): ?>
<link rel="canonical" href="<?php echo h($canonical); ?>" />
<?php endif; ?>
<?php if( !empty($amphtml) ): ?>
<link rel="amphtml" href="<?php echo h($amphtml); ?>" />
<?php endif; ?>
