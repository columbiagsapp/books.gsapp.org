





<h1>Index by Author</h1>

<div id="title-view">
  <?php
    //prepare
    $letter = array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    $viewName = 'index';
    $display_id = 'page_6';

    //get the total number of books
    $authorsView = views_get_view($viewName);
    $authorsView->set_display('page_2'); // like 'block_1'   
    $authorsView->render(); 
    $totalAuhtorCount = sizeof($authorsView->result);

    //calculate the number of books per column
    $tolerance = 2;
    $authorsPerColumn = floor($totalAuhtorCount/5) + $tolerance;


    //set up variables
    $columnNumber = 0;//the current column that is being filled
    $columnCount = 0;//the number of books already in the current column

    print '<div id="column-'.$columnNumber.'" class="column">';
    
    for($i=0;$i<26;$i++){
      $view = views_get_view($viewName);
      $view->set_display($display_id); // like 'block_1'   
      $view->set_arguments($letter[$i]); 
      $renderedView = $view->render();

      //get the number of results in the view
      $viewCount = sizeof($view->result);

      if($viewCount != 0){
        if( ($columnCount + $viewCount) > $authorsPerColumn ){//need to start a new column
          $columnNumber++;
          $columnCount = $viewCount;
          print '</div>';//close out the column div #column-$columnNumber
          print '<div id="column-'.$columnNumber.'" class="column">';//open a div for the new column
          print '<div id="letter-'.$letter[$i].'" class="letter-section '.$viewCount.'"><div class="letter-header">'.$letter[$i].'</div>';
        }else{//keep filling the current column
          $columnCount += $viewCount;
          print '<div id="letter-'.$letter[$i].'" class="letter-section '.$viewCount.'"><div class="letter-header">'.$letter[$i].'</div>';
        }
        print $renderedView;
        print '</div>';//close out the div #letter-$letter[$i]
      }
    }
    print '</div>';//close out the last column div #column-4
  ?>


</div>

