$(document).ready(function() {
    
  $('#StartBtn').click(function() {
    
    let qCatToyInput = prompt('What is your favorite object of extended and intense observation?');
    
    alert('Hmm..Interesting');
    
    // ----------------------------------------------------------------------------------------------------------------------------
    
    let qLikeDogsInput = confirm('As a fellow feline, do you think dogs are simply "OK" to be within eyeshot?...Or maybe you think the outrage mob on Whisker® ought to "Cancel" them?');
    
    if (qLikeDogsInput === false) {
      $(alert('A fellow feline of sophistication indeed!'));
    } else {
      $(alert('Hmm...I would say your priorities are bit...off. This will definitely impact your answer.'));
    } 
    
    // -----------------------------------------------------------------------------------------------------------------------------
    
    let qCatBellyRubsInput = parseInt(prompt('From 1 to 3, exactly how many belly rubs are allowed until the "clawAndBite()" function is called?'));
    
    if (qCatBellyRubsInput === 1) {
      $(alert('Indeed...although, still a bit much, do you not agree?'));
      $('#JavaScript').hide();
      $('#Ruby').hide();
      $('#Python').show();
    } else if (qCatBellyRubsInput === 2) {
      $(alert('How dare the authorities commit such an atrocity!'));
      $('#JavaScript').hide();
      $('#Ruby').show();
      $('#Python').hide();
    } else if (qCatBellyRubsInput === 3) {
      $(alert('Consider that YOU are contributing to the "One-Too-Many-Rubs" policy problem...'));
      $('#JavaScript').show();
      $('#Ruby').hide();
      $('#Python').hide();
    } else {
      (qCatBellyRubsInput = String)
      let qCatBellyRubsStringInput = confirm('Good sir, do you like breaking the rules?');
      if (qCatBellyRubsStringInput === true) {
        $(alert('"All in academic fun." as they say!'));
        $('#JavaScript').hide();
        $('#Ruby').show();
        $('#Python').hide();
      } else {
        $(alert('Maybe you should reconsider...'));
        $('#JavaScript').show();
        $('#Ruby').hide();
        $('#Python').hide();
      }
    }
    
    // ---------------------------------------------------------------------------------------------------------------------------------
    
    let qIndoorOutdoorInput = confirm('You enjoy the smell of a wet douglas fir as you defecate out in the great open litterbox?');
    
    if (qIndoorOutdoorInput === true) {
      $(alert('I see you are a cat with highly developed tastes.'));
    } else {
      $(alert(' Well I for one find it almost intoxicatedly splendid'));
    }
    
    // ----------------------------------------------------------------------------------------------------------------------------------
    
    let qCatchDotInput = confirm('"You frequently try and catch the phase-shifting red photon!" Is it okay to assume this is what you do in your extracurricular activities?');
    
    if (qCatchDotInput === true) {
      $(alert('A scholar of focus and dedication!'));
    } else {
      $(alert('We all had to learn how to walk before we could pounce...keep at it!'));
    }
    
    alert('Gadzooks! That was rather...enlightening. My assessment is finished! Your answer lies below...');
  });
});