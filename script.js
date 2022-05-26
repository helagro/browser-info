
function main(){
    addListeners()
    showInitialData()
}

function addListeners(){
    window.addEventListener('resize', displayWidth);
    window.addEventListener('resize', displayHeight);
}

function showInitialData(){
    displayWidth()
    displayHeight()
}

function displayHeight(){
    document.getElementById("pageHeight").innerText = getHeight()
}
function displayWidth(){
    document.getElementById("pageWidth").innerText = getWidth()
}


main()