import {DimenUnitHandler} from "./units.js"

const calculatorResElem = document.getElementById("unitCalculatorRes")

window.calculateUnitConversion = ()=>{
    const inputNumber = document.getElementById("unitCalculatorNumInput").value

    if(inputNumber === "") return calculatorResElem.value = ""

    const unitFrom = document.getElementById("unitCalculatorUnitFrom").value
    const unitTo = document.getElementById("unitCalculatorUnitTo").value

    const res = DimenUnitHandler.unitToUnit(unitFrom, unitTo, inputNumber).toFixed(2)

    calculatorResElem.value = res
}