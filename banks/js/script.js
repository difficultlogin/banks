(function($){
    $(function() {
        $('#add-more').bind('click', function() {
            var href = $(this).attr('href');

            $.ajax({
                url: href,
                success: function(data) {
                    console.log('success: ', data);
                },
                error: function(data) {
                    console.log('error: ', data);
                }
            });

            return false;
        });
    });
}(jQuery));