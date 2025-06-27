//% weight=90 color=#0099FF icon="\uf0c2"
namespace weatherBlocks {
    //% block="start rain"
    export function startRain(): void {
        serial.writeLine("RAIN_ON")
    }
    //% block="stop rain"
    export function stopRain(): void {
        serial.writeLine("RAIN_OFF")
    }
}

//% weight=50 color=#0fbc11 icon="\uf0c2"
namespace weatherBlocks {

    /**
     * Start wind (turn on fan)
     */
    //% block
    export function startWind(): void {
        serial.writeLine("WIND_ON")
    }

    /**
     * Stop wind (turn off fan)
     */
    //% block
    export function stopWind(): void {
        serial.writeLine("WIND_OFF")
    }
}
