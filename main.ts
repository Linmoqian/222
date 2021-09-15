function 速度参数与方向信号转换 (X: number, Y: number, 前进姿态: any[]) {
	
}
let 坐标X = 0
let 坐标y = 0
radio.setGroup(1)
radio.sendString("ready")
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # # # .
    . . # . .
    `)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    if (input.acceleration(Dimension.X) < 0 && input.acceleration(Dimension.Y) < 0) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (input.acceleration(Dimension.X) < 0 && input.acceleration(Dimension.Y) > 0) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (input.acceleration(Dimension.X) > 0 && input.acceleration(Dimension.Y) > 0) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (input.acceleration(Dimension.X) > 0 && input.acceleration(Dimension.Y) < 0) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (input.acceleration(Dimension.X) == 0 && input.acceleration(Dimension.Y) == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . # #
            # . . # .
            # # . # #
            . # . # .
            # # . # #
            `)
    }
})
basic.forever(function () {
    坐标X = input.acceleration(Dimension.X)
    坐标y = input.acceleration(Dimension.Y)
})
basic.forever(function () {
    serial.writeLine("x" + pins.map(
    input.acceleration(Dimension.X),
    0,
    1023,
    0,
    100
    ) + "y" + pins.map(
    input.acceleration(Dimension.Y),
    0,
    1023,
    0,
    100
    ))
    radio.sendString("" + pins.map(
    input.acceleration(Dimension.X),
    0,
    1023,
    0,
    100
    ) + "/" + pins.map(
    input.acceleration(Dimension.Y),
    0,
    1023,
    0,
    100
    ))
})
