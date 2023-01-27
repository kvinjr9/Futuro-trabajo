const txtop1= document.getElementById("op1")
const txtOperador= document.getElementById("operador")
const txtop2= document.getElementById("op2")
const txtcalcular= document.getElementById("Calcular")
const txtresultado = document.getElementById("Resultado")

txtcalcular.addEventListener('click',calcular)

    function calcular(){
        const operado = txtOperador.value
        const op1 = parseFloat (txtop1.value)
        const op2 = parseFloat (txtop2.value)

        if( (operado == "+"|| operado == "-" || operado == "*" || 
        operado == "/") && !isNaN (op1) && !isNaN (op2) ){
            let resultado;
            switch(operado){
            case "+":
                resultado= op1 + op2
                break;
            case "-":
                resultado= op1 - op2
                break;
            case "*":
                resultado= op1 * op2
                break;
            case "/":
                resultado= op1 / op2
                break
            
            }
            txtresultado.style="color:black"
        txtresultado.innerText="="+resultado
        }
        else{
        txtresultado.style="color:red"
        txtresultado.innerText="Calculo Imposible"
        }
    }