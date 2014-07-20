
function setup() {

  // get dom nodes
  var accelX = document.getElementById("acceleration-x");
  var accelY = document.getElementById("acceleration-y");
  var accelZ = document.getElementById("acceleration-z");
  var accelGravX = document.getElementById("acceleration-incl-gravity-x");
  var accelGravY = document.getElementById("acceleration-incl-gravity-y");
  var accelGravZ = document.getElementById("acceleration-incl-gravity-z");
  var orientAbs = document.getElementById("orientation-absolute");
  var orientAlpha = document.getElementById("orientation-alpha");
  var orientBeta = document.getElementById("orientation-beta");
  var orientGamma = document.getElementById("orientation-gamma");

  handleMotion = function(dmEvent){
    if (dmEvent.acceleration.x !== null) {
      accelX.innerHTML = dmEvent.acceleration.x.toFixed(3);
      accelY.innerHTML = dmEvent.acceleration.y.toFixed(3);
      accelZ.innerHTML = dmEvent.acceleration.z.toFixed(3);
    }
    if (dmEvent.accelerationIncludingGravity.x !== null) {
      accelGravX.innerHTML = dmEvent.accelerationIncludingGravity.x.toFixed(3);
      accelGravY.innerHTML = dmEvent.accelerationIncludingGravity.y.toFixed(3);
      accelGravZ.innerHTML = dmEvent.accelerationIncludingGravity.z.toFixed(3);
    }
  };

  handleOrientation = function(mEvent){
    if (mEvent.absolute !== null) {
      orientAbs.innerHTML = mEvent.absolute.toFixed(3);
      orientAlpha.innerHTML = mEvent.alpha.toFixed(3);
      orientBeta.innerHTML = mEvent.beta.toFixed(3);
      orientGamma.innerHTML = mEvent.gamma.toFixed(3);
    }
  };

  window.addEventListener("devicemotion", handleMotion, true);
  window.addEventListener("deviceorientation", handleOrientation, true);

}


window.addEventListener('DOMContentLoaded', function() {

  // We'll ask the browser to use strict code to help us catch errors earlier.
  // https://developer.mozilla.org/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
  'use strict';

  setup();

});
