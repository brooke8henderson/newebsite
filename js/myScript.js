function enlarge(id) { //selects the image with the id that we want to enlarge
  $(id).click(function () {
    $(id).animate({width: '100%'})
  })
}

function shrink(id) {
  $(id).click(function () {
    $(id).animate({width: '25%'})
  })
}


$(document).ready(function() {
  enlarge('#one')
  shrink('#two')
  enlarge('#three')
  shrink('#four')

})
