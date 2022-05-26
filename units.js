class DimenUnitHandler{
    static avalibleUnits = ["px", "rem"]
    static currentUnit = "px"
	static #callbacksOnNewUnit = []

    static changeUnit(newUnit){
        DimenUnitHandler.currentUnit = newUnit
        DimenUnitHandler.displayCurrentUnit()
    }

    static displayCurrentUnit(){
        for (let elem of document.getElementsByClassName("factUnitDimen")){
            elem.innerText = DimenUnitHandler.currentUnit
        }
        document.getElementById("dimensionUnitSelect").value = DimenUnitHandler.currentUnit
    }

    static pxToCurrentUnit(px){
        if (DimenUnitHandler.currentUnit == "rem"){
			return px/getFontSize()
		} else if(DimenUnitHandler.currentUnit == "px"){
			return px
		}
		throw new Error("Invalid Unit")
    }
}

