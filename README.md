# Motion Demo

Playing around with `devicemotion` and `deviceorientation`.

Tested on mobile safari (iPhone 5s, iOS 7) and firefox os (Flame, b2g 2.0).

## Links and noteable implementation differences

### devicemotion

#### Links:

[DeviceMotionEvent in the Safari Developer Library](https://developer.apple.com/library/safari/documentation/SafariDOMAdditions/Reference/DeviceMotionEventClassRef/DeviceMotionEvent/DeviceMotionEvent.html#//apple_ref/javascript/instp/DeviceMotionEvent/rotationRate)

[DeviceMotionEvent on MDN](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)

[DeviceMotionEvent Spec](http://w3c.github.io/deviceorientation/spec-source-orientation.html#devicemotion)

[MDN Explanation](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Orientation_and_motion_data_explained)

#### Notes

The Flame does not support `DeviceMotionEvent.acceleration`, it does however support `DeviceMotionEvent.accelerationIncludingGravity`.
The iPhone supports both.


### deviceorientation

#### Links

[DeviceOrientationEvent in the Safari Developer Library](https://developer.apple.com/library/safari/documentation/SafariDOMAdditions/Reference/DeviceOrientationEventClassRef/DeviceOrientationEvent/DeviceOrientationEvent.html#//apple_ref/javascript/instp/DeviceOrientationEvent/beta)

[DeviceOrientationEvent on MDN](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent)

[DeviceOrientationEvent Spec](http://w3c.github.io/deviceorientation/spec-source-orientation.html#deviceorientation)

[MDN Explanation](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Orientation_and_motion_data_explained)

#### Notes

The Gecko implementation of DeviceOrientationEvent has the property `absolute`, safaris webkit does not.

`DeviceOrientationEvent.alpha` is identical with values from 0 to 360.

`DeviceOrientationEvent.beta` has values between -90 and 90 on webkit, between 180 and -180 on gecko.

`DeviceOrientationEvent.gamma` has values between -180 and 180 on webkit, between 90 and -90 on gecko.
