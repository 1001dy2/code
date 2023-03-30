radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    radio.setGroup(設定 + 1)
    radio.sendNumber(receivedNumber)
})
// 第一和第二個人的廣播群族:1，後面依序2`3`4`5...
let 設定 = 0
設定 = 1
radio.setGroup(設定)
let 密碼 = 0
