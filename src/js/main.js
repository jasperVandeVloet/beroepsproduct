
function onForwardClick(e) {
    e.preventDefault();

    var forwardLink = e.currentTarget;
    forwardLink.classList.toggle("active");

    var forwardForm = document.querySelector(".forward-form");
    forwardForm.classList.toggle("active");
}

function onMenuToggle(e) {
    e.preventDefault();

    var menuLink = e.currentTarget.parentElement;
    menuLink.classList.toggle("active");

    $(".nav-full").slideToggle();
    $(".searchbox").hide();
}


function bindEvents() {
    var forward = document.querySelector(".page-actions .forward");
    if (forward)
    {
        forward.addEventListener("click", onForwardClick);
    }

    var menu = document.querySelector(".menu a");
    menu.addEventListener("click", onMenuToggle);
}

bindEvents();


$(window).on('load', function(){
    setTimeout(removeLoader, 2000);
    $(".arrow").hide().slideDown(1000);
});

$(document).ready(function(){
    //checkbox checked
    $('input[type="checkbox"]').change(function(){
        if($(this).is(':checked'))
        {
            $(this).closest('.row').addClass('active');
        }
        else
        {
            $(this).closest('.row').removeClass('active');
        }
    })

    
    // SEARCH BOX FULL VIEW
    $("#searchbox-input, #searchbox-btn").focus(function(){
        $(".searchbox").addClass('active');
    });

    $("#searchbox-input, #searchbox-btn").blur(function(){
        $(".searchbox").removeClass('active');
        $(this).val("");
    });

     // SEARCH BOX MOBILE
    $(".search-btn-resp").click(function(){
       
        $(".menu").removeClass("active");
        $(".nav-full").hide();
        $(".searchbox").addClass("mobile");
        $(".searchbox").slideToggle(200);
    });

    
});

function removeLoader(){
    $( "#loader-wrapper" ).fadeOut(200, function() {
        $( "#loader-wrapper" ).remove();
    });
}

