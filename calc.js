window.onload = function(){
    
    
            ///// Key Press Targets /////
    var calculator = document.getElementById("calculator");
    var keys = calculator.querySelector(".keys");
    
    keys.addEventListener('click', function(e){
				console.log(e.target)
        switch(e.target.attributes.type.value){
            case "numeral":
                digitPressed(e.target.innerHTML);
                break;
            case "operator":
                operatorPressed(e.target.innerHTML);
                e.target.classList.add ("pressed");
                break;
            case "negative":
                negativePressed(e.target.innerHTML);
                break;
            case "reset":
                clear();
                break;
            case "squared":
                squaredPressed();
                break;
            case "square-root":
                squareRootPressed();
                break;
            case "point":
                decimalPressed(e.target.innerHTML);
                break;
            case "express":
                equalsPressed();
                break;
        }});
 
            ///// Display Variables /////
    var displayActive = document.getElementById("active-display");
    var displayExpression = document.getElementById("expression-display");
    var displayAnswer = document.getElementById("answer-display");
    
            /////Operator Variables/////
    var decimal = document.getElementById("decimal");
    var division = document.getElementById("division");
    var multiplication = document.getElementById("multiplication");
    var subtraction = document.getElementById("subtraction");
    var addition = document.getElementById("addition");
    var equals = document.getElementById("equals");
    
            /////Square Variables/////
    var squared = document.getElementById("squared");
    var squareRoot = document.getElementById("square-root");
    
            /////Initial States/////
    multiplication.setAttribute("state","initial");
    division.setAttribute("state","initial");
    equals.setAttribute("state","initial");
    
            /////Number functions/////
    function digitPressedAttributeResetAfterEquals(){
        equals.classList.remove("pressed");
        displayExpression.innerHTML = "";
        displayActive.innerHTML = "";
        displayActive.style.display = "block";
    }
    
    function digitPressedAttributeReset(){
        addition.classList.remove("pressed");
        subtraction.classList.remove("pressed");
        multiplication.classList.remove("pressed");
        division.classList.remove("pressed");
        multiplication.setAttribute("state","");
        division.setAttribute("state","");
        equals.setAttribute("state","");
        displayActive.style.display = "block";
    }
    
    function digitPressed(number){
        if(equals.className == "pressed"){
            digitPressedAttributeResetAfterEquals();
            displayActive.innerHTML = displayActive.innerHTML + number;
            
        }else{
            digitPressedAttributeReset();
            displayActive.innerHTML = displayActive.innerHTML + number;
            }  
    }
    
             /////decimal function/////
    function decimalPressed(decimalpoint){
        if(decimal.getAttribute("state","restrict")){
            //do nothing//
            
        }else if(equals.className == "pressed"){
            decimal.setAttribute("state","restrict");
            equals.classList.remove("pressed");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = "";
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + decimalpoint;

        }else{
            decimal.setAttribute("state","restrict");
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + decimalpoint;
        }
    }
    
            /////Square/Square Root Functions/////
    function squaredPressed(){
        if(equals.className == "pressed"){
            var value = displayAnswer.innerHTML;
            var answer = eval(value * value);
            displayAnswer.innerHTML = answer;
        }else{
            //do nothing//
        }
    }
    
    function squareRootPressed(){
        var value = displayAnswer.innerHTML;
        var answer = Math.sqrt(value);
        displayAnswer.innerHTML = answer;
    }
    
            /////Operator Functions/////
    function operatorPressed(operator){
        
        if(multiplication.getAttribute("state","initial") || division.getAttribute("state","initial")){
            //do nothing//            
        
        }else if(addition.classList == "pressed" || subtraction.classList == "pressed" || multiplication.classList == "pressed" || division.classList == "pressed"){
            // do nothing //
            
        }else if(equals.className == "pressed" && displayAnswer.innerHTML == "Error: Divided by 0"){
            equals.classList.remove("pressed");
            equals.setAttribute("state","initial");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = "";
            clearErrorFlash();
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + operator;
        
        }else if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            equals.setAttribute("state","initial");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = displayAnswer.innerHTML;
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + operator;
            
        }else{
            equals.classList.remove("pressed");
            decimal.setAttribute("state","");
            equals.setAttribute("state","initial");
            displayExpression.innerHTML = "";
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + operator;
        }
    }
            /////Negative Function/////
    function negativePressed(operator){           
        
        if(subtraction.className == "pressed"){
            //Do nothing//
            
        }else if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            subtraction.classList.add("pressed");
            equals.setAttribute("state","initial");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = displayAnswer.innerHTML;
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + operator;
            
        }else{
            equals.classList.remove("pressed");
            subtraction.classList.add("pressed");    
            decimal.setAttribute("state","");
            equals.setAttribute("state","initial");
            displayExpression.innerHTML = "";
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + operator;
        }
    }
        
            /////Expression Function/////
    function equalsPressed(){
        if(equals.getAttribute("state","initial")){
            //do nothing//
            
        }else if(equals.classList == "pressed"){
            //do nothing//
            
        }else{
            equals.classList.add("pressed");
            multiplication.setAttribute("state","");
            division.setAttribute("state","");
            decimal.setAttribute("state","");
            displayExpression.innerHTML = displayActive.innerHTML;
            displayActive.style.display = "none";

            var answer = eval(displayExpression.innerHTML);

            displayAnswer.innerHTML = answer;
        }
        
        if(displayAnswer.innerHTML == Infinity){
            errorFlash();
            setTimeout(clearErrorFlash,5000); 
        }
    }

            /////Error Messagesn/////    
    function errorFlash(){
        displayAnswer.innerHTML = "Error: Divided by 0";
        displayAnswer.classList.add("flash"); 
    }   
    
    function clearErrorFlash(){
        displayAnswer.classList.remove("flash"); 
        displayAnswer.innerHTML = "";  
    }

    
        /////Clear Function/////
    function clear(){
        location.reload(); 
    }

	     ///// NumPad Interaction /////
	window.addEventListener('keydown', function(e) {
		switch(e.key) {
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
			case "0":
				cssNumberPressed(e.key);
				digitPressed(e.key);
				break;
			case "+":
				operatorPressed(e.key);
				cssNumberPressed(e.key);
				break;
			case "*":
				operatorPressed(e.key);
				cssNumberPressed(e.key);
				break;
			case "/":
				operatorPressed(e.key);
				cssNumberPressed(e.key);
				break;
			case "-":
				negativePressed(e.key);
				break;
			case "reset":
				clear();
				break;
			case "squared":
				squaredPressed();
				break;
			case "square-root":
				squareRootPressed();
				break;
			case ".":
				decimalPressed(e.key);
				break;
			case "=":
			case "Enter":
				equalsPressed();
				break;
			case 'Delete':
			case 'Backspace':
			case 'Escape':
				clear();
				break;
			default:
				break;
		}
	});


		///// Number Presses /////
	var currentNumberKeyboardPress;
	function cssNumberPressed(number) {
		
		if(currentNumberKeyboardPress) {
				currentNumberKeyboardPress.classList.remove('pressed');
			}
	switch(number) {
		case "1":
			currentNumberKeyboardPress = document.querySelectorAll('.row')[3].children[0];
			currentNumberKeyboardPress.classList.add('pressed');
			break;
		case "2":
			currentNumberKeyboardPress = document.querySelectorAll('.row')[3].children[1];
			currentNumberKeyboardPress.classList.add('pressed');
			break;
		case "3":
			currentNumberKeyboardPress = document.querySelectorAll('.row')[3].children[2];
			currentNumberKeyboardPress.classList.add('pressed');
			break;
		case "4":
			currentNumberKeyboardPress = document.querySelectorAll('.row')[2].children[0];
			currentNumberKeyboardPress.classList.add('pressed');
			break;
		case "5":
			currentNumberKeyboardPress = document.querySelectorAll('.row')[2].children[1];
			currentNumberKeyboardPress.classList.add('pressed');
			break;
		case "6":
			currentNumberKeyboardPress = document.querySelectorAll('.row')[2].children[2];
			currentNumberKeyboardPress.classList.add('pressed');
			break;
		case "7":
			currentNumberKeyboardPress = document.querySelectorAll('.row')[1].children[0];
			currentNumberKeyboardPress.classList.add('pressed');
			break;
		case "8":
			currentNumberKeyboardPress = document.querySelectorAll('.row')[1].children[1];
			currentNumberKeyboardPress.classList.add('pressed');
			break;
		case "9":
			currentNumberKeyboardPress = document.querySelectorAll('.row')[1].children[2];
			currentNumberKeyboardPress.classList.add('pressed');
			break;
		case "0":
			currentNumberKeyboardPress = document.querySelectorAll('.row')[4].children[0];
			currentNumberKeyboardPress.classList.add('pressed');
			break;
		case "+":
				currentNumberKeyboardPress = addition;
				addition.classList.add ("pressed");
				break;
			case "*":
				currentNumberKeyboardPress = multiplication;
				multiplication.classList.add ("pressed");
				break;
			case "/":
				currentNumberKeyboardPress = division;
				division.classList.add ("pressed");
				break;
			case "-":
				negativePressed(e.key);
				break;
	}
}

	
}


///// Number Presses /////




///// Switch Between Operators /////
///// Significant Figures /////
///// Add parathesis functionality /////
