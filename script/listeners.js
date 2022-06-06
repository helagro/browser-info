import {DimenUnitHandler} from "./units.js"
import {displayHeight, displayWidth, displayMousePos, displayRuler} from "./displayData.js"

export function addListeners(){
    window.addEventListener('resize', displayHeight)
    window.addEventListener('resize', displayWidth)
    window.addEventListener('resize', displayRuler)
    window.addEventListener("mousemove", displayMousePos, false)
}

window.onSelectedDimensionUnit = ()=>{
    const newDimenUnit = document.getElementById("dimensionUnitSelect").value
    DimenUnitHandler.changeUnit(newDimenUnit)
}
