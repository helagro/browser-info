import {DimenUnitHandler} from "./units.js"
import {Ruler} from "./ruler.js"

export const displayFunctionsThatUsesDimenUnits = [displayHeight, displayWidth, displayMousePos, displayRuler]

const mousePosElem = document.getElementById("mousePos")
let lastWidthRenderedRulerFor = undefined

export function showInitialData(){
    displayCookiesAreDisabled()
    displayFontSize()
    displayHeight()
    displayJavascriptIsDisabled()
    displayWidth()
    displayRuler()
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
export function displayRuler(event){
    const resizedPastThreshold = (lastWidthRenderedRulerFor > Ruler.pageWidthSmallRulerThreshold) == (getWidth() > Ruler.pageWidthSmallRulerThreshold)
    if(resizedPastThreshold && event !== undefined) return 
    lastWidthRenderedRulerFor = getWidth()

    Ruler.clear()
    Ruler.render()
}

