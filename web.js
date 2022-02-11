// Navbar Sticky Start

// when the user sroll the page, execute myFunction

window.onscroll = function(){
myFunction()
};

// Get The Navbar
var navbar = document.getElementById("navbar");

// Get the  offset possition of the navbar
var sticky = navbar.offsetTop;

// add the stickyclass to the navbar when you reach  its scroll position.
//  Remove "sticky" when you leave the scroll
function myFunction() {
    if(window.pageYOffset >=sticky){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky")
    }
}

// Navbar Sticky End

// Smoot Scrolling Start

$(document).ready(function(){
    // Add Smooth Scrolling To All Links
    $("a").on('click', function(event){

        // Make Sure this.hash has a value before overriding a default behaviour
        if(this.hash !== ""){
            // Prevent default anchor click behaviour
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jquesr's animate() method to add smooth page scroll
            // The opitional number(800) specifies the number of milliseconds it takes to scroll to the specifies area
            $('html, body').animate({
                scrollTop: $(hash).offset().top    
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behaviour)
                window.location.hash = hash;
            });
        };
    });
});
// Smoot Scrolling End