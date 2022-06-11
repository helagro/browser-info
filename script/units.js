import { displayFunctionsThatUsesDimenUnits } from "./displayData.js"

export class DimenUnitHandler{
    static avalibleUnits = ["px", "rem", "mm"]
    static currentUnit = "px"
    static #mmMeasurementDiv = document.getElementById("mmMeasurement")
    static #pxToUnitConversionTable = {
        px: 1,
        rem: 1/getFontSize(),
        mm: DimenUnitHandler.#getPxToMmConversionFactor()
    }

    static #getPxToMmConversionFactor(){
        const heightStr = document.defaultView.getComputedStyle(DimenUnitHandler.#mmMeasurementDiv).height
        const heightInPx = heightStr.substring(0, heightStr.length-2)
        return 1/(heightInPx/100)
    }

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
			return (px/getFontSize()).toFixed(2)
		} else if(DimenUnitHandler.currentUnit == "px"){
			return px
		} else if (DimenUnitHandler.currentUnit == "mm"){
            return DimenUnitHandler.pxToMm(px)
        }
		throw new Error("Invalid Unit")
    }

    static unitToUnit(unitFrom, unitTo, number){
        const toPxFactor = 1/DimenUnitHandler.#pxToUnitConversionTable[unitFrom]
        const toUnitFactor = DimenUnitHandler.#pxToUnitConversionTable[unitTo]

        return toPxFactor*toUnitFactor*number
    }
    static pxToMm(px){
        const heightStr = document.defaultView.getComputedStyle(DimenUnitHandler.#mmMeasurementDiv).height
        const heightInPx = heightStr.substring(0, heightStr.length-2)
        return (px/(heightInPx/100)).toFixed(2);
    }
}

