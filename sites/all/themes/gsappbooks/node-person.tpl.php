<h1>
  <?php
    print $node->title;
  ?>
</h1>



<div id="person-books">
  <?php
    $viewName = 'book_by_author';
    $display_id_author = 'page_1';
    $display_id_editor = 'page_2';
    $display_id_designer = 'page_3';

    print views_embed_view($viewName, $display_id_author, $node->nid);
    print views_embed_view($viewName, $display_id_editor, $node->nid);
    print views_embed_view($viewName, $display_id_designer, $node->nid);
  ?>
</div>