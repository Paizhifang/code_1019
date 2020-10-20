basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(4, 4 - X)
            basic.pause(200)
        }
        for (let X = 0; X <= 4; X++) {
            led.plot(3, 0 + X)
            basic.pause(200)
        }
        for (let X = 0; X <= 4; X++) {
            led.plot(2, 4 - X)
            basic.pause(200)
        }
        for (let X = 0; X <= 4; X++) {
            led.plot(1, 0 + X)
            basic.pause(200)
        }
        for (let X = 0; X <= 4; X++) {
            led.plot(0, 4 - X)
            basic.pause(200)
        }
    }
    basic.clearScreen()
})
