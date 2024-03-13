let result = '';
let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");
for (a of buttons) {
    a.addEventListener('click', function (G) {
        buttonText = G.target.innerText;
    //   console.log(typeof(buttonText))
        if (buttonText == "=") {
            result = eval(result);
            input.value = result;
            result ='';
        }
        else if (buttonText == "AC") {
            result = '';
            input.value = result;
        }
        else if (buttonText == "DEL") {
            result = result.slice(0,-1) ;
            input.value = result;
        }
        else if (buttonText == "×") {
            result += '*';    
            input.value = result;
        }
        else if (buttonText == "+/-") {
            result = result*(-1);    
            input.value = result;
        }
        else {
            result += buttonText;
            input.value = result;
        }
    });
   
}