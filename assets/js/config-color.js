function init() {
    var sideel = $('#sideel');
    if(!sideel?.length) {
        setTimeout(() => {
            init()
        }, 1000);
    } else {
        sideel.click(function() {
            $(this).parents('.config').toggleClass('active');
        });
        $('body').data('bodyClassList', '');
        $('.color-item').click(function() {
            var cls = $(this).data('class');
            $('body').attr('class', $('body').data('bodyClassList'));
            $('body').addClass(cls);
        });

        $.fn.toggleSelected = function(options) {
            var defaults = $.extend({
              classes: 'selected',
              itemSelector: this.children(),
            });
            
            return this.each(function() {
              var o = defaults;
              var sel = o.itemSelector;
              
              sel.click(function() {
                var self = $(this);
                self.addClass(o.classes);
                self.siblings().removeClass(o.classes);
              });
            });
          };
          $('[data-toggle="selected"]').toggleSelected();
    }
}
init();