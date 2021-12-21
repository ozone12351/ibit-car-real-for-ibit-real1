# radio recieve function

def on_received_number(receivedNumber):
    global NumberRE
    NumberRE = receivedNumber
radio.on_received_number(on_received_number)

NumberRE = 0
# set radio
radio.set_group(1)
# forever

def on_forever():
    # if else that get number from radio and translate to command
    # button section *** if using button can command in then
    # joystick section
    # Forward Backward section
    # spin section
    # something else
    if NumberRE == 1:
        pass
    elif NumberRE == 2:
        pass
    elif NumberRE == 3:
        pass
    elif NumberRE == 4:
        pass
    elif NumberRE == 5:
        pass
    elif NumberRE == 6:
        pass
    elif NumberRE == 7:
        iBIT.motor(ibitMotor.BACKWARD, 25)
    elif NumberRE == 8:
        iBIT.motor(ibitMotor.BACKWARD, 50)
    elif NumberRE == 9:
        iBIT.motor(ibitMotor.BACKWARD, 75)
    elif NumberRE == 10:
        iBIT.motor(ibitMotor.BACKWARD, 100)
    elif NumberRE == 11:
        iBIT.motor(ibitMotor.FORWARD, 25)
    elif NumberRE == 12:
        iBIT.motor(ibitMotor.FORWARD, 50)
    elif NumberRE == 13:
        iBIT.motor(ibitMotor.FORWARD, 75)
    elif NumberRE == 14:
        iBIT.motor(ibitMotor.FORWARD, 100)
    elif NumberRE == 15:
        iBIT.spin(ibitSpin.LEFT, 25)
    elif NumberRE == 16:
        iBIT.spin(ibitSpin.LEFT, 50)
    elif NumberRE == 17:
        iBIT.spin(ibitSpin.LEFT, 75)
    elif NumberRE == 18:
        iBIT.spin(ibitSpin.LEFT, 100)
    elif NumberRE == 19:
        iBIT.spin(ibitSpin.RIGHT, 25)
    elif NumberRE == 20:
        iBIT.spin(ibitSpin.RIGHT, 50)
    elif NumberRE == 21:
        iBIT.spin(ibitSpin.RIGHT, 75)
    elif NumberRE == 22:
        iBIT.spin(ibitSpin.RIGHT, 100)
    else:
        iBIT.motor_stop()
basic.forever(on_forever)
