<!DOCTYPE html>
<!--[if lt IE 7]> <html class="ie6 ie" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <![endif]-->
<!--[if IE 7]>    <html class="ie7 ie" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <![endif]-->
<!--[if IE 8]>    <html class="ie8 ie" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <![endif]-->
<!--[if gt IE 8]> <!--> <html class="" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <!--<![endif]-->
<head>
  <?php print $head; ?>
  <!-- Set the viewport width to device width for mobile -->
  <meta name="viewport" content="width=device-width" />
  <title><?php print $head_title; ?></title>
  <?php print $styles; ?>
  <?php print $scripts; ?>
  <!-- IE Fix for HTML5 Tags -->
  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->

  <script type="text/javascript" src="http://fast.fonts.com/jsapi/709d5c75-086f-4337-aa2d-9c2ed878ed64.js"></script>
</head>

<body class="<?php print $body_classes; ?>">

  <div id="container" class="clearfix">

    <header id="header" role="banner" class="clearfix">
      <div id="header-inside">
      <?php if ($search_box): ?>
        <div id="search-container">
          Search
          <?php print $search_box ?>
        </div><!-- /#search-container -->
      <?php endif; ?>

      <div id="logo-nav">

        <?php if ($logo): ?>
          <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" id="logo">
            <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
          </a>
        <?php endif; ?>

        <?php if (!empty($navigation)): ?>
          <nav id="navigation" role="navigation" class="clearfix ">
              <?php print $navigation ?>
          </nav> <!-- /#navigation -->
        <?php endif; ?>

      </div> <!-- /#logo-nav -->


       <div id="sortbox">
        <div class="sortbox-title">
          Sort index by</div>
          <div id="sortbox-drops">
            <ul id="highlight">
            </ul>
            <ul id="dropdown">
            </ul>
          </div>
      </div>

      </div> <!-- /#header-inside -->


    </header> <!-- /#header -->





    <section id="main" role="main" class="clearfix">
      <?php if (!empty($messages)): print $messages; endif; ?>
      <a id="main-content"></a>
      <?php if (!empty($tabs)): ?><div class="tabs-wrapper clearfix"><?php print $tabs; ?></div><?php endif; ?>
      <?php if (!empty($help)): print $help; endif; ?>
      <?php print $content; ?>
    </section> <!-- /#main -->

    <footer id="footer" role="contentinfo" class="clearfix">
      <?php print $footer_message; ?>
      <?php if (!empty($footer)): print $footer; endif; ?>
      <?php print $feed_icons ?>
    </footer> <!-- /#footer -->

    <?php print $closure ?>

  </div> <!-- /#container -->

</body>
</html>