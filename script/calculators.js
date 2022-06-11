import {DimenUnitHandler} from "./units.js"

window.calculateUnitConversion = ()=>{
    const unitFrom = document.getElementById("unitCalculatorUnitFrom").value
    const unitTo = document.getElementById("unitCalculatorUnitTo").value
    const inputNumber = document.getElementById("unitCalculatorNumInput").value

    const res = DimenUnitHandler.unitToUnit(unitFrom, unitTo, inputNumber)

    document.getElementById("unitCalculatorRes").value = res
}