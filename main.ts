radio.onReceivedNumber(function (receivedNumber) {
    密碼 = receivedNumber
    basic.showString("" + (密碼))
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(設定)
})
let 密碼 = 0
let 設定 = 0
radio.setGroup(1)
設定 = 666
