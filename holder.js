function enlarge(id) { //selects the image with the id that we want to enlarge
  $(id).click(function () {      //sets when function will run
    $(id).animate({width: '100%'})   //details of function action
  })
};

function shrink(id) {
  $(id).click(function () {
    $(id).animate({width: '25%'})
  })
};


$(document).ready(function() {  //this part sets what image is effected and how
  enlarge('#one')
  shrink('#two')
  enlarge('#three')
  shrink('#four')
});

-----------
-


$(document).ready(function() {
  var images = ['#one', '#two', '#three','#four'];
if ('#one'){
  $('#one').animate({width: '100%'})
};
else
$('#two','#three','#four').animate({width: '25%')};
};
{
photos[i].addEventListener('click', function ()
}
-----
$(document).ready(() => {
  const images = $('.sunsets');

  $sunsets.on('click', () => {
   function enlarge(.sunsets)
  })

// $(id).click(function () {   stuff    }
// that line "listens" for a click event - when click is "heard" the stuff happens
// $('#one').click(function () {   stuff    }

//for all ids in an rray, if its 100 make it 25, in loop, length of array
--------------
var images = document.getElementsByClassName('sunsets');
 for (var i = 0; i < images.length; i++)
 if (images[i].sunsets == '#one'); {
       $('#one').animate({width: '150%'})
     })
else ('#two','#three','#four'){
    .animate({width: '100%'})
}
