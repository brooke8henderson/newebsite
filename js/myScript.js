
function enlarge(id) { //selects the image with the id that we want to enlarge
  $(id).click(function () {      //sets when function will run
    $(id).animate({width: '100%'})   //details of function action
  })
}

function shrink(id) {
  $(id).click(function () {
    $(id).animate({width: '25%'})
  })
}


$(document).ready(function() {  //this part sets what image is effected and how
  enlarge('#one')
  shrink('#two')
  enlarge('#three')
  shrink('#four')
});
