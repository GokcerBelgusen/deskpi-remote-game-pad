input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("backward")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("stop")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("forward")
})
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showString("Hello!")
})
