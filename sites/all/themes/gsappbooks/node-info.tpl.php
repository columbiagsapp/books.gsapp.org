<h1>
  <?php
    print $node->title;
  ?>
</h1>



<div id="info-main">
  <?php
    dsm($node);


    if( !empty($node->field_main_image[0]['view']) ){
      for($i=0;$i<count($node->field_main_image);$i++){
        print $node->field_main_image[$i]['view'];
      }
    }



    if( !empty($node->field_main_text[0]['view']) ){
      print '<div>'.$node->field_main_text[0]['view'].'</div>';
    }

    if( !empty($node->field_slider[0]['view']) ){
      echo '<div class="carousel"><ul>';
      for($i=0;$i<count($node->field_slider);$i++){
        print '<li>'.$node->field_slider[$i]['view'].'</li>';
      }
      echo '</ul></div>';
    }



    
  ?>







</div><!-- /#info-main -->

<div id="info-side">

</div><!-- /#info-side -->