import {DimenUnitHandler} from "./units.js"
import {displayHeight, displayWidth} from "./displayData.js"

export function addListeners(){
    window.addEventListener('resize', displayHeight);
    window.addEventListener('resize', displayWidth);
}

window.onSelectedDimensionUnit = ()=>{
    const newDimenUnit = document.getElementById("dimensionUnitSelect").value
    DimenUnitHandler.changeUnit(newDimenUnit)
}