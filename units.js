import { displayFunctionsThatUsesDimenUnits } from "./displayData.js"

export class DimenUnitHandler{
    static avalibleUnits = ["px", "rem", "mm"]
    static currentUnit = "px"
    static #mmMeasurementDiv = document.getElementById("mmMeasurement")

    static changeUnit(newUnit){
        DimenUnitHandler.currentUnit = newUnit
        DimenUnitHandler.displayCurrentUnit()
		for(let displayFunction of displayFunctionsThatUsesDimenUnits){
			displayFunction.call()
		}
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
		} else if (DimenUnitHandler.currentUnit == "mm"){
            return DimenUnitHandler.pxToMm(px)
        }
		throw new Error("Invalid Unit")
    }
    static pxToMm(px){
        const heightStr = document.defaultView.getComputedStyle(DimenUnitHandler.#mmMeasurementDiv).height
        const heightInPx = heightStr.substring(0, heightStr.length-2)
        return Math.floor(px/(heightInPx/100));
    }
}

