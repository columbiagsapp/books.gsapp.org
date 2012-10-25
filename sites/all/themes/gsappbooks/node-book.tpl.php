<?php
  $forthcoming = false;
  if($node->field_year[0]['view'] == 'Forthcoming'){
    $forthcoming = true;
  }
?>
<article id="node-<?php print $node->nid; ?>" class="book node<?php if (!$status) { print ' node-unpublished'; } if($forthcoming){ print ' forthcoming'; } ?> clearfix">


  <h1>
    <?php 
      print '<span class="title">'.$node->title;
      if(!empty($node->field_subtitle[0]['view'])){
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
        print '<div class="title-container"><span class="title">'.$node->title;
        if(!empty($node->field_subtitle[0]['view'])){
          print ': '.$node->field_subtitle[0]['view'];
        }
        print '</span></div>';
      ?>

      <div class="authors-editors-container">
    <?php
      if(!empty($node->field_authors[0]['nid'])){
        $length = count($node->field_authors);
        if($length > 1){
          print '<div class="colophon">Authors: ';
        }else{
          print '<div class="colophon">Author: ';
        }
        $i = 0;
        
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
      if(!empty($node->field_editors[0]['nid'])){
        $length = count($node->field_editors);
        if($length > 1){
          print '<div class="colophon">Editors: ';
        }else{
          print '<div class="colophon">Editor: ';
        }
        $i = 0;  
        for($i = 0; $i < $length; $i++){
          print $node->field_editors[$i]['safe']['title'];
          if($i < ($length - 1)){
            print ', ';
          }
        }
        print '</div>';
      }
    ?>
  </div><!-- /.authors-editors-container -->

    <?php
      if(!empty($node->field_info)){
        print '<div class="info">'.$node->field_info[0]['view'].'</div>';
      }
    ?>

    <?php
      if(!empty($node->field_publisher[0]['view'])){
        print '<div class="colophon">'.$node->field_publisher[0]['view'];
        if(!empty($node->field_year[0]['view'])){
          print ', '.$node->field_year[0]['view'];
        }
        print '</div>';
      }
    ?>

    <?php
      if(!empty($node->field_designers[0]['nid'])){
        $length = count($node->field_designers);
        if($length > 1){
          print '<div class="colophon">Designers: ';
        }else{
          print '<div class="colophon">Designer: ';
        }
        $i = 0;  
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
      if(!empty($node->field_page_count[0]['view']) && !empty($node->field_binding[0]['view']) && !empty($node->field_width[0]['view'])){
        print '<div class="colophon">'.$node->field_page_count[0]['view'].' pages, '.$node->field_binding[0]['view'].', '.$node->field_width[0]['view'].'mm x '.$node->field_height[0]['view'].'mm</div>';
      }else if(!empty($node->field_page_count[0]['view']) && !empty($node->field_binding[0]['view'])){
        print '<div class="colophon">'.$node->field_page_count[0]['view'].' pages, '.$node->field_binding[0]['view'].'</div>';
      }else if(!empty($node->field_binding[0]['view']) && !empty($node->field_width[0]['view'])){
        print '<div class="colophon">'.$node->field_binding[0]['view'].', '.$node->field_width[0]['view'].'mm x '.$node->field_height[0]['view'].'mm</div>';
      }else if(!empty($node->field_page_count[0]['view']) && !empty($node->field_width[0]['view'])){
        print '<div class="colophon">'.$node->field_page_count[0]['view'].' pages, '.$node->field_width[0]['view'].'mm x '.$node->field_height[0]['view'].'mm</div>';
      }else if(!empty($node->field_page_count[0]['view'])){
        print '<div class="colophon">'.$node->field_page_count[0]['view'].' pages</div>';
      }else if(!empty($node->field_binding[0]['view'])){
        print '<div class="colophon">'.$node->field_binding[0]['view'].'</div>';
      }else if(!empty($node->field_width[0]['view'])){
        print '<div class="colophon">'.$node->field_width[0]['view'].'mm x '.$node->field_height[0]['view'].'mm</div>';
      }
    ?>

    <?php
      if(!empty($node->field_isbn[0]['view'])){
        print '<div class="colophon">'.$node->field_isbn[0]['view'].'</div>';
      }
    ?>


    <?php
      if(!empty($node->field_buy_link)){
        print '<div class="colophon">'.$node->field_buy_link[0]['view'].'</div>';
      }
    ?>

    <?php
      if(!empty($node->field_issuu_link)){
        print '<div class="colophon">'.$node->field_issuu_link[0]['view'].'</div>';
      }
    ?>

    <?php
      if(!empty($node->field_download)){
        print '<div class="colophon">'.$node->field_download[0]['view'].'</div>';
      }
    ?>

  </div><!-- /.info-container -->


</article> <!-- /.node -->

