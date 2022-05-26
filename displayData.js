import {DimenUnitHandler} from "./units.js"

export const displayFunctionsThatUsesDimenUnits = [displayHeight, displayWidth, displayMousePos]

const mousePosElem = document.getElementById("mousePos")

export function showInitialData(){
    displayFontSize()
    displayHeight()
    displayJavascriptIsDisabled()
    displayWidth()
}

function displayFontSize(){
    document.getElementById("fontSize").innerText = getFontSize()
}
export function displayHeight(){
    document.getElementById("pageHeight").innerText = DimenUnitHandler.pxToCurrentUnit(getHeight())
}
function displayJavascriptIsDisabled(){
    document.getElementById("jsDisabled").innerText = "is not"
}
export function displayMousePos(event){
    if(event === undefined){
        mousePosElem.innerText = "x: y:"
        return
    }

    const x = DimenUnitHandler.pxToCurrentUnit(event.pageX)
    const y = DimenUnitHandler.pxToCurrentUnit(event.pageY)
    mousePosElem.innerText = `x:${x} y:${y}`
}
export function displayWidth(){
    document.getElementById("pageWidth").innerText = DimenUnitHandler.pxToCurrentUnit(getWidth())
}

