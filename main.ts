let blue_value = 0
let green_value = 0
let red_value = 0
let strip = neopixel.create(DigitalPin.P8, 7, NeoPixelMode.RGB)
basic.forever(function () {
    red_value = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 255)
    green_value = Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 0, 255)
    blue_value = Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 0, 255)
    strip.showColor(neopixel.rgb(red_value, green_value, blue_value))
})
