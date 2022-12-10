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
