import {DimenUnitHandler} from "./units.js"

export const displayFunctionsThatUsesDimenUnits = [displayHeight, displayWidth, displayMousePos]

const mousePosElem = document.getElementById("mousePos")

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

export function displayMousePos(event){
    if(event === undefined){
        mousePosElem.innerText = "X: Y:"
        return
    }

    const x = DimenUnitHandler.pxToCurrentUnit(event.pageX)
    const y = DimenUnitHandler.pxToCurrentUnit(event.pageY)
    mousePosElem.innerText = `X:${x} Y:${y}`
}