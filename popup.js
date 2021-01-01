
$(function() {
    $('#search_word').change(function() {
        $('#contents').find('ul').empty();
        let search_word = $(this).val();
        chrome.bookmarks.search(search_word, function(results) {
            results.forEach(function(item){
                $('#contents').find('ul').append('<li><a href="'+item.url+'">'+item.title+'</a></li>');
            });
        });
    });


    $('#history_word').change(function() {
        $('#history_contents').find('ul').empty();
        let search_word = $(this).val();

        chrome.history.search({text: search_word, maxResults: 30}, function(results) {
            results.forEach(function(item) {
                $('#history_contents').find('ul').append('<li><a href="'+item.url+'">'+item.title+'</a></li>');
            });
        });
    });



});
