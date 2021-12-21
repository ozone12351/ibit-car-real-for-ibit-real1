// radio recieve function
radio.onReceivedNumber(function (receivedNumber) {
    NumberRE = receivedNumber
})
let NumberRE = 0
// set radio
radio.setGroup(1)
// forever
basic.forever(function () {
    // if else that get number from radio and translate to command
    // button section *** if using button can command in then
    // joystick section
    // Forward Backward section
    // spin section
    // something else
    if (NumberRE == 1) {
    	
    } else if (NumberRE == 2) {
    	
    } else if (NumberRE == 3) {
    	
    } else if (NumberRE == 4) {
    	
    } else if (NumberRE == 5) {
    	
    } else if (NumberRE == 6) {
    	
    } else if (NumberRE == 7) {
        iBIT.Motor(ibitMotor.Backward, 25)
    } else if (NumberRE == 8) {
        iBIT.Motor(ibitMotor.Backward, 50)
    } else if (NumberRE == 9) {
        iBIT.Motor(ibitMotor.Backward, 75)
    } else if (NumberRE == 10) {
        iBIT.Motor(ibitMotor.Backward, 100)
    } else if (NumberRE == 11) {
        iBIT.Motor(ibitMotor.Forward, 25)
    } else if (NumberRE == 12) {
        iBIT.Motor(ibitMotor.Forward, 50)
    } else if (NumberRE == 13) {
        iBIT.Motor(ibitMotor.Forward, 75)
    } else if (NumberRE == 14) {
        iBIT.Motor(ibitMotor.Forward, 100)
    } else if (NumberRE == 15) {
        iBIT.Spin(ibitSpin.Left, 25)
    } else if (NumberRE == 16) {
        iBIT.Spin(ibitSpin.Left, 50)
    } else if (NumberRE == 17) {
        iBIT.Spin(ibitSpin.Left, 75)
    } else if (NumberRE == 18) {
        iBIT.Spin(ibitSpin.Left, 100)
    } else if (NumberRE == 19) {
        iBIT.Spin(ibitSpin.Right, 25)
    } else if (NumberRE == 20) {
        iBIT.Spin(ibitSpin.Right, 50)
    } else if (NumberRE == 21) {
        iBIT.Spin(ibitSpin.Right, 75)
    } else if (NumberRE == 22) {
        iBIT.Spin(ibitSpin.Right, 100)
    } else {
        iBIT.MotorStop()
    }
})
