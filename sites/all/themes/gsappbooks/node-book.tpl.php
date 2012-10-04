
<article id="node-<?php print $node->nid; ?>" class="book node<?php if (!$status) { print ' node-unpublished'; } ?> clearfix">


  <h1>
    <?php 
      print '<span class="title">'.$node->title;
      if(!empty($node->field_subtitle)){
        print ': '.$node->field_subtitle[0]['view'];
      }
      print '</span>';
    ?>
  </h1>

  
    <?php
      if(!empty($node->field_images)){
        print '<div class="images">';
          foreach($node->field_images as $image){
            print $image['view'];
          }
        print '</div><!-- /.images -->';
      }
    ?>
  
    <div class="info-container">

    <?php
      if(!empty($node->field_authors)){
        print '<div class="authors">';
          $i = 0;
          $length = count($node->field_authors);
          for($i = 0; $i < $length; $i++){
            print $node->field_authors[$i]['safe']['title'];
            if($i < ($length - 1)){
              print ', ';
            }
          }
        print '</div>';
      }
    ?>

    <?php
      if(!empty($node->field_editors)){
        print '<div class="editors">Edited by ';
          $i = 0;
          $length = count($node->field_editors);
          for($i = 0; $i < $length; $i++){
            print $node->field_editors[$i]['safe']['title'];
            if($i < ($length - 1)){
              print ', ';
            }
          }
        print '</div>';
      }
    ?>

    <?php
      if(!empty($node->field_info)){
        print '<div class="info">'.$node->field_info[0]['view'].'</div>';
      }
    ?>

    <?php
      if(!empty($node->field_designers)){
        print '<div class="authors">';
          $i = 0;
          $length = count($node->field_designers);
          for($i = 0; $i < $length; $i++){
            print $node->field_designers[$i]['safe']['title'];
            if($i < ($length - 1)){
              print ', ';
            }
          }
        print '</div>';
      }
    ?>

    <?php
      if(!empty($node->field_buy_link)){
        print '<div class="buy-link">'.$node->field_buy_link[0]['view'].'</div>';
      }
    ?>

    <?php
      if(!empty($node->field_issuu_link)){
        print '<div class="issuu-link">'.$node->field_issuu_link[0]['view'].'</div>';
      }
    ?>

  </div><!-- /.info-container -->


</article> <!-- /.node -->

