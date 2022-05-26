import {DimenUnitHandler} from "./units.js"
import {showInitialData} from "./displayData.js"
import {addListeners} from "./listeners.js"

function main(){
    DimenUnitHandler.displayCurrentUnit()
    showInitialData()
	addListeners()
}



main()