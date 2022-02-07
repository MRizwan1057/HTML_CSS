$(function() {
    $(".cn").click(function() {
        $("div.content p:first").toggle();
    });
    // $(".logo").click(function() {
    //     $(".logo").css("font-size", "44px");
    $(".logo").mouseover(function() {
        var logo = $(".logo");
        logo.animate({ left: '100px' }, "slow");
        logo.animate({ fontSize: '3em' }, "slow");
    })
});