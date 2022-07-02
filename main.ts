bluetooth.onUartDataReceived("payed", function () {
    basic.showString("Received" + "$" + dolaar)
})
bluetooth.onBluetoothConnected(function () {
    basic.showString("Connected")
    VT = 0
})
bluetooth.onBluetoothDisconnected(function () {
	
})
input.onButtonPressed(Button.A, function () {
    VT = 0
    dolaar += 1
    basic.showNumber(dolaar)
    VT = 1
})
function PAYToT () {
	
}
input.onButtonPressed(Button.AB, function () {
    VT = 0
    dolaar = 0
    basic.showNumber(dolaar)
    VT = 1
})
input.onButtonPressed(Button.B, function () {
    VT = 0
    dolaar += -1
    basic.showNumber(dolaar)
    VT = 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
let VT = 0
let dolaar = 0
bluetooth.startUartService()
images.createBigImage(`
    . . . . . . . . . .
    . . . # . . . . # .
    . . # # # . . # # #
    # # # # # # # . # .
    # # # # # # # . . .
    `).scrollImage(1, 200)
for (let index = 0; index < 6; index++) {
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        # . # . # . # . # .
        . . . . . . . . . .
        . . . . . . . . . .
        `).scrollImage(1, 200)
}
basic.forever(function () {
    if (VT == 1) {
        PAYToT()
    }
})
