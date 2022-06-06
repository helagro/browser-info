import {DimenUnitHandler} from "./units.js"

export class Ruler{
    static element = document.getElementById("ruler")

    static MEASURMENT_NUMBERS_INCS = {
        rem: 1,
        px: 50,
        mm: 10
    }
    static MEASURMENT_NUMBERS_AMTS = {
        rem: getWidth() > 570 ? 31: 16,
        px: getWidth() > 570 ? 11: 6,
        mm: getWidth() > 600 ? 16: 6 
    }
    static GRID_TEMPLATE_COLUMNS_STRS = {
        rem: `${`${Ruler.MEASURMENT_NUMBERS_INCS.rem}rem `.repeat(Ruler.MEASURMENT_NUMBERS_AMTS.rem -1)} 0`,
        px: `${`${Ruler.MEASURMENT_NUMBERS_INCS.px}px `.repeat(Ruler.MEASURMENT_NUMBERS_AMTS.px -1)} 0`,
        mm: `${`${Ruler.MEASURMENT_NUMBERS_INCS.mm}mm `.repeat(Ruler.MEASURMENT_NUMBERS_AMTS.mm -1)} 0`
    }

    static clear(){
        Ruler.element.replaceChildren()
    }

    static render(){
        const MEASURMENT_NUMBERS_AMT = Ruler.MEASURMENT_NUMBERS_AMTS[DimenUnitHandler.currentUnit]
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
        
        Ruler.element.style.gridTemplateColumns = Ruler.GRID_TEMPLATE_COLUMNS_STRS[DimenUnitHandler.currentUnit]
    }
}