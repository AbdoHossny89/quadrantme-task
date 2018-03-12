$(document).ready(function () {
    $(".countrie-desc .countrie:first-child").addClass("active");
    $(".flags ul li:first-child").addClass("selected");
    $(".flags ul li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        $('.countrie-desc .countrie').eq(($(this).index())+1).fadeIn().addClass("active").siblings().fadeOut().removeClass("active");
    });

  });
