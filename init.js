/**
 * Created by Daria on 19.11.17.
 */

"use strict";
(function ($) {

    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });


    $('.user-edit__btn').click(function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        var $this = $(this);
        var $menu = $this.parents('.user-edit');
        var isVisible = $menu.hasClass('user-edit--visible');

        if (!isVisible) {
            $menu.addClass('user-edit--visible');
            $(document).one('click', function () {
                $menu.removeClass('user-edit--visible');
            });
        }
    })

})(jQuery);

