
function setup() {

  // get dom nodes
  var accelX = document.getElementById("acceleration-x");
  var accelY = document.getElementById("acceleration-y");
  var accelZ = document.getElementById("acceleration-z");
  var accelGravX = document.getElementById("acceleration-incl-gravity-x");
  var accelGravY = document.getElementById("acceleration-incl-gravity-y");
  var accelGravZ = document.getElementById("acceleration-incl-gravity-z");



  handleMotion = function(dmEvent){

    console.log(dmEvent.acceleration);

    // display values
    accelX.innerHTML = dmEvent.acceleration.x;
    accelY.innerHTML = dmEvent.acceleration.y;
    accelZ.innerHTML = dmEvent.acceleration.z;
    accelGravX.innerHTML = dmEvent.accelerationIncludingGravity.x;
    accelGravY.innerHTML = dmEvent.accelerationIncludingGravity.y;
    accelGravZ.innerHTML = dmEvent.accelerationIncludingGravity.z;


  };

  window.addEventListener("devicemotion", handleMotion, true);
}


window.addEventListener('DOMContentLoaded', function() {

  // We'll ask the browser to use strict code to help us catch errors earlier.
  // https://developer.mozilla.org/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
  'use strict';

  setup();

});
