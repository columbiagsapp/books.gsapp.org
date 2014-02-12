<div id="info-main">
  <?php
    if( !empty($node->field_main_image[0]['view']) ){
      echo '<div id="main-image" class="gif-carousel"><ul>';
      for($i=0;$i<count($node->field_main_image);$i++){
        print '<li>'.$node->field_main_image[$i]['view'].'</li>';
      }
      echo '</ul></div>';
    }

    if( !empty($node->field_main_text[0]['view']) ){
      print '<div id="main-text">'.$node->field_main_text[0]['view'].'</div>';
    }

    if( !empty($node->field_slider[0]['view']) ){
      echo '<div id="poster-slider" class="carousel"><ul>';
      for($i=0;$i<count($node->field_slider);$i++){
        print '<li>'.$node->field_slider[$i]['view'].'</li>';
      }
      echo '</ul><div class="carousel-prev">Prev</div><div class="carousel-next">Next</div></div>';
    }

    if( !empty($node->field_poster_caption[0]['view']) ){
      print '<div id="poster-caption">'.$node->field_poster_caption[0]['view'].'</div>';
    }
  ?>
</div><!-- /#info-main -->

<div id="info-side">
<?php


  if( !empty($node->field_director_portrait[0]['view']) ){
    print '<div id="director-portrait">'.$node->field_director_portrait[0]['view'].'</div>';
  }

  if( !empty($node->field_director[0]['view']) ){
    print '<div id="director-name">'.$node->field_director[0]['view'].',<br>Editor</div>';
  }
  
  if( !empty($node->field_director_print[0]['view']) ){
	echo '<div id="director-print">Director of Print Publications:<br>';
    print '<div>'.$node->field_director_print[0]['view'].'</div>';
	echo '</div>';
  }
  
  if( !empty($node->field_coordinator[0]['view']) ){
	echo '<div id="coordinator">Coordinator:<br>';
    print '<div>'.$node->field_coordinator[0]['view'].'</div>';
	echo '</div>';
  }

  if( !empty($node->field_assistants[0]['view']) ){
    echo '<div id="assistants">Assistants:<br>';
      for($i=0;$i<count($node->field_assistants);$i++){
        print '<div>'.$node->field_assistants[$i]['view'].'</div>';
      }
      echo '</div>';
  }

  if( !empty($node->field_photographers[0]['view']) ){
    echo '<div id="photographers">Photographers:<br>';
      for($i=0;$i<count($node->field_photographers);$i++){
        print '<div>'.$node->field_photographers[$i]['view'].'</div>';
      }
      echo '</div>';
  }

  if( !empty($node->field_ordering[0]['view']) ){
    print '<div id="ordering"><div id="ordering-title">Ordering and inquiries:</div>'.$node->field_ordering[0]['view'].'</div>';
  }

  if( !empty($node->field_distributed[0]['view']) ){
    print '<div id="distributed"><div id="distributed-title">Distributed by:</div>'.$node->field_distributed[0]['view'].'</div>';
  }
?>
</div><!-- /#info-side -->
