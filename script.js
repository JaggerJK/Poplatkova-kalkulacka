
function typeFundFunction() {
    
    document.querySelector("#amount").value = ""
    document.querySelector("#amount").style.backgroundColor = ""
    document.querySelector("#percentTax").value = ""
    document.querySelector("#percentTax").style.backgroundColor = ""
    document.querySelector("#result").value = ""
    
    let typeFund = document.querySelector("#choose-typeFund").value
    

    if (typeFund === "empty"){  
        x = document.querySelector("#percentTax").max = ""
        document.querySelector("#percentTax").placeholder = `%`

    } else if (typeFund === "alfa"){
        x = document.querySelector("#percentTax").max = 2
        document.querySelector("#percentTax").placeholder = `max ${x} %`

    } else if (typeFund === "beta"){
        x = document.querySelector("#percentTax").max = 3.5
        document.querySelector("#percentTax").placeholder = `max ${x} %`

    } else if (typeFund === "gama"){
        x = document.querySelector("#percentTax").max = 5
        document.querySelector("#percentTax").placeholder = `max ${x} %`

    } else if (typeFund === "delta"){
        x = document.querySelector("#percentTax").max = 6.1
        document.querySelector("#percentTax").placeholder = `max ${x} %`

    } else if (typeFund === "epsilon"){
        x = document.querySelector("#percentTax").max = 7.7
        document.querySelector("#percentTax").placeholder = `max ${x} %`
    } 
  }

  function typeCalculateFunction() {
            
    document.querySelector("#amount").value = ""
    document.querySelector("#amount").style.backgroundColor = ""
    document.querySelector("#percentTax").value = ""
    document.querySelector("#percentTax").style.backgroundColor = ""
    document.querySelector("#result").value = ""
  }


document.querySelector("#calculate-amount").addEventListener("submit",function(event){

    event.preventDefault()

    let amount = event.target.elements.amount.value
    let percentTax = event.target.elements.percentTax.value

    let typeCalculate = document.querySelector("#choose-typeCalculate").value

    if (typeCalculate != "calculate-empty"){
        document.querySelector("#choose-typeCalculate").style.backgroundColor = "" 

        if ((amount != "") && (percentTax != "")) {
            document.querySelector("#amount").style.backgroundColor = ""
            document.querySelector("#percentTax").style.backgroundColor = ""


            let y = document.querySelector("#choose-typeCalculate").value 

            if (y === "calculate-withTax"){
                let num1 = Math.round(amount*(percentTax/100 + 1))
                event.target.elements.result.value = num1.toLocaleString("cs-CZ", {style:"currency", currency:"CZK"});

            } else if (y === "calculate-withoutTax"){
                let num1 = Math.round(amount/(percentTax/100 + 1))
                event.target.elements.result.value = num1.toLocaleString("cs-CZ", {style:"currency", currency:"CZK"});       
            }  

        } else if ((amount === "") && (percentTax != "")) {
            document.querySelector("#amount").style.backgroundColor = "rgba(255, 0, 0, 0.164)"
            event.target.elements.amount.placeholder= "zadejte částku (Kč)"
            event.target.elements.result.value = null

        } else if ((amount != "") && (percentTax === "")) {
            document.querySelector("#percentTax").style.backgroundColor = "rgba(255, 0, 0, 0.164)"
            event.target.elements.percentTax.placeholder= "zadejte poplatek (%)"
            event.target.elements.result.value = null
        } else if ((amount === "") && (percentTax === "")) {
            document.querySelector("#amount").style.backgroundColor = "rgba(255, 0, 0, 0.164)"
            document.querySelector("#percentTax").style.backgroundColor = "rgba(255, 0, 0, 0.164)"
            event.target.elements.amount.placeholder= "zadejte částku (Kč)"
            event.target.elements.percentTax.placeholder= "zadejte poplatek (%)"
            event.target.elements.result.value = null
        }

    } else   document.querySelector("#choose-typeCalculate").style.backgroundColor = "rgba(255, 0, 0, 0.164)"


})


// *************************************************************************************************************************************************************
// PREVODY NUMBER NA TYP MENY


// var num = 123450006.7890

// result = Number(num.toFixed(0)).toLocaleString().split(/\s/).join(',') + '.' + Number(num.toString().slice(num.toString().indexOf('.')+1)).toLocaleString()
// console.log(result)
// result2 = num.toLocaleString("cs-CZ", {style:"currency", currency:"CZK"});

// console.log(result2)
