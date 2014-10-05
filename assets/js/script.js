// JavaScript Document

(function($){
  $(document).ready(function() {
    $('label[data-toggle]').click(function(){
        var el = $(this).data('toggle');
        $('div[data-display=' + el + ']').toggle();
    });

  });
})(jQuery);
