// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
    }
    
    // This function display values
    function display(value) {
    document.getElementById("result").value += value;
    }
    
    // This function evaluates the expression and returns result
    /* function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }*/
    function backspace() {
        var value = document.getElementById("result").value;
        document.getElementById("result").value = value.substr(0, value.length - 1);
    }


    function operate(){
		var res = [];
		var answer;
		
		if(document.getElementById("result").value.includes("+")){
		res = document.getElementById("result").value.split('+');
		return parseInt(res[0]) + parseInt(res[1]);
		}
		
		else if(document.getElementById("result").value.includes("-")){
		res = document.getElementById("result").value.split('-');
		return parseInt(res[0]) - parseInt(res[1]);
		}
		
		else if(document.getElementById("result").value.includes("/")){
		res = document.getElementById("result").value.split('/');
		return parseInt(res[0]) / parseInt(res[1]);
		}
		
		else{
		res = document.getElementById("result").value.split('*');
		return answer= parseInt(res[0]) * parseInt(res[1]);
		}
    }   
		
    function calculate(){	
        var a = operate()
        document.getElementById('result').value = a; 
    }

        // Keyboard input
        document.addEventListener('keydown', (e) => {
            if (e.code == "Enter") { calculate() } 
            else if (e.code == "Backspace") { backspace() }
            else if (e.code == "Delete") { clearScreen() }
            else { input(e) } 
       })

       function input(e) {
        // initialize inputValue
        let inputValue = "";

        // If click, set inputValue as previously
        if (e.type == "click") {
            inputValue = e.target.innerText;
        }

        // Otherwise set input by key pressed 
        else{
        if (e.key == "0") {inputValue = "0"}
        else if (e.key == "1") {inputValue = "1"}
        else if (e.key == "2") {inputValue = "2"}
        else if (e.key == "3") {inputValue = "3"}
        else if (e.key == "4") {inputValue = "4"}
        else if (e.key == "5") {inputValue = "5"}
        else if (e.key == "6") {inputValue = "6"}
        else if(e.key == "7") {inputValue = "7"}
        else if(e.key == "8") {inputValue = "8"}
        else if(e.key == "9") {inputValue = "9"}
        else if(e.key == "+") {inputValue = "+"}
        else if(e.key == "-") {inputValue = "-"}
        else if(e.key == "*") {inputValue = "*"}
        else if(e.key == "/") {inputValue = "/"}
        }

        document.getElementById('result').value += inputValue;
    }