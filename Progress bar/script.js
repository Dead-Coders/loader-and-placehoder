
// background color
$('[data-color]').each(function (){
    $(this).css({
        'background-color': $(this).data('color')
    });
});

//progress bar

$('[data-progress]').each(function (){
    $(this).css({
        'bottom': $(this).data('progress')
    });
});