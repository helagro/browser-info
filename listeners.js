function onSelectedDimensionUnit(){
    const newDimenUnit = document.getElementById("dimensionUnitSelect").value
    DimenUnitHandler.changeUnit(newDimenUnit)
}