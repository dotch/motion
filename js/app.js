
function setup() {

  // get dom nodes
  var accelX = document.getElementById("acceleration-x");
  var accelY = document.getElementById("acceleration-y");
  var accelZ = document.getElementById("acceleration-z");
  var accelGravX = document.getElementById("acceleration-incl-gravity-x");
  var accelGravY = document.getElementById("acceleration-incl-gravity-y");
  var accelGravZ = document.getElementById("acceleration-incl-gravity-z");
  var rotationA = document.getElementById("rotation-a");
  var rotationB = document.getElementById("rotation-b");
  var rotationC = document.getElementById("rotation-c");
  var interval = document.getElementById("interval");

  var orientAbs = document.getElementById("orientation-absolute");
  var orientAlpha = document.getElementById("orientation-alpha");
  var orientBeta = document.getElementById("orientation-beta");
  var orientGamma = document.getElementById("orientation-gamma");
  var orientDeltaAlpha = document.getElementById("orientation-delta-alpha");
  var orientDeltaBeta = document.getElementById("orientation-delta-beta");
  var orientDeltaGamma = document.getElementById("orientation-delta-gamma");
  var turnsText = document.getElementById("turns");
  var rollsText = document.getElementById("rolls");

  var prevAlpha, deltaAlpha = 0;
  var prevBeta, deltaBeta = 0;
  var prevGamma, deltaGamma = 0;

  var turns = 0;
  var rolls = 0;

  handleMotion = function(dmEvent){
    console.log(dmEvent);
    if (dmEvent.acceleration.x !== null) {
      accelX.innerHTML = dmEvent.acceleration.x.toFixed(2);
      accelY.innerHTML = dmEvent.acceleration.y.toFixed(2);
      accelZ.innerHTML = dmEvent.acceleration.z.toFixed(2);
    }
    if (dmEvent.accelerationIncludingGravity.x !== null) {
      accelGravX.innerHTML = dmEvent.accelerationIncludingGravity.x.toFixed(2);
      accelGravY.innerHTML = dmEvent.accelerationIncludingGravity.y.toFixed(2);
      accelGravZ.innerHTML = dmEvent.accelerationIncludingGravity.z.toFixed(2);
    }
    if (dmEvent.rotationRate.alpha !== null) {
      rotationA.innerHTML = dmEvent.rotationRate.alpha.toFixed(2);
      rotationB.innerHTML = dmEvent.rotationRate.beta.toFixed(2);
      rotationC.innerHTML = dmEvent.rotationRate.gamma.toFixed(2);
    }
    interval = dmEvent.interval;
    
  };

  function calcDelta(newVal, oldVal) {
    var angle = Math.abs(newVal - oldVal) % 360;
    if (angle < 180) {
      return (newVal > oldVal) ? angle : -angle;
    }  else {
      return (newVal > oldVal) ? -(360 - angle) : (360 - angle);
    }
  }

  handleOrientation = function(mEvent){
    var alpha = mEvent.alpha;
    var beta = mEvent.beta;
    var gamma = mEvent.gamma;
    orientAlpha.innerHTML = alpha.toFixed(2);
    orientBeta.innerHTML = beta.toFixed(2);
    orientGamma.innerHTML = gamma.toFixed(2);
    if (prevAlpha !== undefined) {
      deltaAlpha += calcDelta(alpha, prevAlpha);
      deltaBeta += calcDelta(beta, prevBeta);
      deltaGamma += calcDelta(gamma, prevGamma);
      orientDeltaAlpha.innerHTML = deltaAlpha.toFixed(2);
      orientDeltaBeta.innerHTML = deltaBeta.toFixed(2);
      orientDeltaGamma.innerHTML = deltaGamma.toFixed(2);
    }
    prevAlpha = alpha;
    prevBeta = beta;
    prevGamma = gamma;

    // check for turns
    if (Math.abs(deltaAlpha) / 360 > 1) {
      deltaAlpha = deltaAlpha % 360;
      turns += 1;
      turnsText.innerHTML = turns;
    }

    // check for rolls
    if (Math.abs(deltaGamma) / 360 > 1) {
      deltaGamma = deltaGamma % 360;
      rolls += 1;
      rollsText.innerHTML = rolls;
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
