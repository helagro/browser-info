import {DimenUnitHandler} from "./units.js"

export const displayFunctionsThatUsesDimenUnits = [displayHeight, displayWidth, displayMousePos]

const mousePosElem = document.getElementById("mousePos")

export function showInitialData(){
    displayCookiesAreDisabled()
    displayFontSize()
    displayHeight()
    displayJavascriptIsDisabled()
    displayWidth()
}

function displayCookiesAreDisabled(){
    document.getElementById("cookiesEnabled").innerText = navigator.cookieEnabled ? "are" : "are not"
}
function displayFontSize(){
    document.getElementById("fontSize").innerText = getFontSize()
}
export function displayHeight(){
    document.getElementById("pageHeight").innerText = DimenUnitHandler.pxToCurrentUnit(getHeight())
}
function displayJavascriptIsDisabled(){
    document.getElementById("jsEnabled").innerText = "is"
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

