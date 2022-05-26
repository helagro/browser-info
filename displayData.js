import {DimenUnitHandler} from "./units.js"

export const displayFunctionsThatUsesDimenUnits = [displayHeight, displayWidth]

export function showInitialData(){
    displayWidth()
    displayHeight()
}

export function displayHeight(){
    document.getElementById("pageHeight").innerText = DimenUnitHandler.pxToCurrentUnit(getHeight())
}
export function displayWidth(){
    document.getElementById("pageWidth").innerText = DimenUnitHandler.pxToCurrentUnit(getWidth())
}