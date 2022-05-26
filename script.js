
function main(){
    addListeners()
    DimenUnitHandler.displayCurrentUnit()
    showInitialData()
}

function addListeners(){
    window.addEventListener('resize', displayHeight);
    window.addEventListener('resize', displayWidth);
}




main()