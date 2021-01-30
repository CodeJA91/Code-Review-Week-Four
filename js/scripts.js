$(document).ready(function() {
    
  $('#StartBtn').click(function() {
    
    let qCatToyInput = prompt('What is your favorite cat toy?');
    
    alert('Hmm..Interesting');
    
    // ----------------------------------------------------------------------
    
    let qLikeDogsInput = confirm('As a fellow feline, do you think dogs are simply "OK"?...Or maybe you think the outrage mob on Whisker® ought to "Cancel" them?');
    
    if (qLikeDogsInput === false) {
      $(alert('A fellow feline of sophistication indeed!'));
    } else {
      $(alert('Hmm...I would say your priorities are bit...off. This will definitely impact your answer.'));
    }
    
    // ----------------------------------------------------------------------
    
    let qCatBellyRubsInput = parseInt(prompt('From 1 to 3, exactly how many belly rubs are allowed until the "clawAndBite" function is called?'));

    if (qCatBellyRubsInput === 1) {
      $(alert('A bit much, do you not agree?'));
      $('#JavaScript').hide();
      $('#Ruby').hide();
      $('#Python').show();
    } else if (qCatBellyRubsInput === 2) {
      $(alert('Indeed! How dare the authorities commit such an atrocity!'));
      $('#JavaScript').hide();
      $('#Ruby').show();
      $('#Python').hide();
    } else {
      $(alert('Consider that YOU are contributor to the misinterpretation of the "One-Too-Many-Rubs" policy problem...'));
      $('#JavaScript').show();
      $('#Ruby').hide();
      $('#Python').hide();
    }
    
    
    
    let qIndoorOutdoorInput = confirm('You enjoy the smell of a wet douglas fir as you defecate out in the great open litterbox?');
    
    let qCatchDotInput = confirm('You try and catch the phase-shifting red photon!');
    









    alert('All Done! Check Below!');
  });



});