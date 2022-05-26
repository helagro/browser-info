function showInitialData(){
    displayWidth()
    displayHeight()
}

function displayHeight(){
    document.getElementById("pageHeight").innerText = DimenUnitHandler.pxToCurrentUnit(getHeight())
}
function displayWidth(){
    document.getElementById("pageWidth").innerText = DimenUnitHandler.pxToCurrentUnit(getWidth())
}