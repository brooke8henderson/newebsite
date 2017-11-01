$(document).ready(function () { // keep this at top

var ids = ['#one', '#two', '#three', '#four']; // array of ids

function enlarge(selector) { //selects the image with the id that we want to enlarge
  $(selector).animate({width: '100%'})   //details of function action
};

function shrink(selector) {
  $(selector).animate({width: '50%'})
};

// loop over array of ids on mouseover enlarge and mouseleave shrink
// don't need to call ids individually.
//"This" is neeeded to set where the function will happen
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
