function FeuR () {
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.show()
}
function FeuV () {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.show()
}
function FeuO () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.setBrightness(35)
basic.forever(function () {
    FeuR()
    basic.pause(10000)
    strip.clear()
    FeuV()
    basic.pause(10000)
    strip.clear()
    FeuO()
    basic.pause(2000)
    strip.clear()
})
