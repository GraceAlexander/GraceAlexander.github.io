// Function for nav bar
// Adapted from http://codepen.io/clokey2k/pen/jgfFD
$ = jQuery;

var selector = '.nav li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});



// $sections includes all of the page divs that relate to menu items.
var $sections = $('.page');
var $ft = $('#more');

$(function() {
    navbarUpdater();

    // The user scrolls
    $(window).scroll(function() {
        navbarUpdater();
    });
});

function navbarUpdater() {
    var $currentSection;
    var $minDistance = Number.POSITIVE_INFINITY;

    //first check footer since it is not a .page div
    if ($(window).scrollTop() > (3 * $(window).height())) {
        $currentSection = $ft;
    } else {
        $sections.each(function() {
            // divDistance is the distance(in px) of the head of a div to the head of the view/window
            var $divDistance = Math.abs($('body').scrollTop() - $(this).offset().top);
            console.log($(this).attr('id'));
            console.log($divDistance);
            if ($divDistance <= $minDistance) {
                $currentSection = $(this);
                $minDistance = $divDistance;
            }
        });
    }

}

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        $target = $(this.hash);
        $('body').animate({
            scrollTop: $target.offset().top
        }, 1000);
    });
});


function updateExperienceBlurb(element, year)
{  
    console.log(element)
    console.log(year)
    var blurb;
    console.log("updateExperienceBlurb called")
     if(year=='2017'){
        blurb="coming soon!"
    }
    if(year=='2016'){
        blurb="coming soon!"
    }
    if(year=='2015'){
        blurb="coming soon!"
    }
    if(year=='2014'){
        blurb="coming soon!"
    }
    document.getElementById("experience-blurb").innerHTML = blurb;
    updateSelected(element);
}

function updateSelected(element)
{
    document.getElementById("experience2017").style.background = "black";
    document.getElementById("experience2016").style.background = "black";
    document.getElementById("experience2015").style.background = "black";
    document.getElementById("experience2014").style.background = "black";
    document.getElementById(element).style.background = "#008ca8";
}


