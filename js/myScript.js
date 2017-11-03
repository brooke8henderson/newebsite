$(document).ready(function () { // keep this at top

var ids = ['#one', '#two', '#three', '#four']; // array of ids

function enlarge(selector) { //selects the image with the id that i want to enlarge
  $(selector).animate({width: '120%'})   //details of function action, animate how
};

function shrink(selector) {                // selects what to shrink
  $(selector).animate({width: '50%'})   /// how much to shrink
};

// loop over array of ids on mouseover enlarge and mouseleave shrink
// don't need to call ids individually.
//"This" is neeeded to set where the function will happen, makes it so don't need each id, like the for loop

for (var id of ids) {
  $( id )
    .mouseover(function() {
      enlarge(this);
    })
    .mouseout(function() {
      shrink(this)
    });
}


}); // end of document ready.
