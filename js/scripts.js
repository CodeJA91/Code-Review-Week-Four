$(document).ready(function() {
  $('#StartBtn').click(function() {   
    let qCatBellyRubsInput = parseInt($('#qCatBellyRubsInput').val());
    if (qCatBellyRubsInput === 0) {
      $('#JavaScript').hide();
      $('#Ruby').hide();
      $('#Python').show();
    } else if (qCatBellyRubsInput === 1) {
      $('#JavaScript').hide();
      $('#Ruby').show();
      $('#Python').hide();
    } else if (qCatBellyRubsInput === 2) {
      $('#JavaScript').hide();
      $('#Ruby').hide();
      $('#Python').show();
    } else {(qCatBellyRubsInput === 3)
      $('#JavaScript').show();
      $('#Ruby').hide();
      $('#Python').hide();
    }
    alert('Gadzooks! That was rather...enlightening. My assessment is finished! Your answer lies below...');
    $('#introshowhide').hide();
  });
});