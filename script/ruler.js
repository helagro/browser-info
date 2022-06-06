import {DimenUnitHandler} from "./units.js"

export class Ruler{
    static pageWidthSmallRulerThreshold = 670
    static element = document.getElementById("ruler")

    static MEASURMENT_NUMBERS_INCS = {
        rem: 1,
        px: 50,
        mm: 10
    }

    static clear(){
        Ruler.element.replaceChildren()
    }

    static render(){
        const MEASURMENT_NUMBERS_AMT = Ruler.getAmountOfNumbers()
        const MEASURMENT_NUMBERS_INC = Ruler.MEASURMENT_NUMBERS_INCS[DimenUnitHandler.currentUnit]

        for(let measurmentNumI = 0; measurmentNumI < MEASURMENT_NUMBERS_AMT; measurmentNumI++){
            const p = document.createElement("p")
            p.innerText = measurmentNumI * MEASURMENT_NUMBERS_INC
            p.className = "measuringNumber"
            Ruler.element.appendChild(p)
        }
        for(let measurmentNumI = 0; measurmentNumI < MEASURMENT_NUMBERS_AMT; measurmentNumI++){
            const div = document.createElement("div")
            div.className = "measuringLine"
            Ruler.element.appendChild(div)
        }
        
        Ruler.element.style.gridTemplateColumns = Ruler.getGridTemplateColumns()
    }

    static getAmountOfNumbers(){
        switch (DimenUnitHandler.currentUnit){
            case "rem": return getWidth() > Ruler.pageWidthSmallRulerThreshold ? 31: 16
            case "px": return getWidth() > Ruler.pageWidthSmallRulerThreshold ? 11: 6
            case "mm": return getWidth() > Ruler.pageWidthSmallRulerThreshold ? 16: 6 
        }
    }
    static getGridTemplateColumns(){
        switch (DimenUnitHandler.currentUnit){
            case "rem": return `${`${Ruler.MEASURMENT_NUMBERS_INCS.rem}rem `.repeat(Ruler.getAmountOfNumbers() -1)} 0`
            case "px": return `${`${Ruler.MEASURMENT_NUMBERS_INCS.px}px `.repeat(Ruler.getAmountOfNumbers() -1)} 0`
            case "mm": return `${`${Ruler.MEASURMENT_NUMBERS_INCS.mm}mm `.repeat(Ruler.getAmountOfNumbers() -1)} 0`
        }
    }
}