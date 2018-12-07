window.onload = function(){
            ///// Display Variables /////
    
    var displayActive = document.getElementById("active-display");
    var displayExpression = document.getElementById("expression-display");
    var displayAnswer = document.getElementById("answer-display");
    
           /////Number Variables/////
    
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var zero = document.getElementById("zero");
    var doubleZero = document.getElementById("double-zero");
    var decimal = document.getElementById("decimal");
    
            /////Operator Variables/////
    
    var division = document.getElementById("division");
    var multiplication = document.getElementById("multiplication");
    var subtraction = document.getElementById("subtraction");
    var addition = document.getElementById("addition");
    var equals = document.getElementById("equals");
    
            /////Number functions/////
    
    one.onclick = function(){
        
        if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = "";
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + "1" ;
            
        }else{
            
        addition.classList.remove("pressed");
        subtraction.classList.remove("pressed");
        multiplication.classList.remove("pressed");
        division.classList.remove("pressed");
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + "1" ;
            }
    } 
    
    two.onclick = function(){
        
        if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = "";
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + "2" ;
            
        }else{
            
        addition.classList.remove("pressed");
        subtraction.classList.remove("pressed");
        multiplication.classList.remove("pressed");
        division.classList.remove("pressed");
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + "2" ;
            }
    } 
    
    three.onclick = function(){
        
        if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = "";
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + "3" ;
            
        }else{
            
        addition.classList.remove("pressed");
        subtraction.classList.remove("pressed");
        multiplication.classList.remove("pressed");
        division.classList.remove("pressed");
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + "3" ;
            }
    } 
    
    four.onclick = function(){
        
        if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = "";
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + "4" ;
            
        }else{
            
        addition.classList.remove("pressed");
        subtraction.classList.remove("pressed");
        multiplication.classList.remove("pressed");
        division.classList.remove("pressed");
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + "4" ;
            }
    }    
    
    five.onclick = function(){
        
        if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = "";
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + "5" ;
            
        }else{

        addition.classList.remove("pressed");
        subtraction.classList.remove("pressed");
        multiplication.classList.remove("pressed");
        division.classList.remove("pressed");
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + "5" ;
            }
    }   
    
    six.onclick = function(){
        
        if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = "";
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + "6" ;
            
        }else{

        addition.classList.remove("pressed");
        subtraction.classList.remove("pressed");
        multiplication.classList.remove("pressed");
        division.classList.remove("pressed");
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + "6" ;
            }
    }   
    
    seven.onclick = function(){
        
        if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = "";
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + "7" ;
            
        }else{

        addition.classList.remove("pressed");
        subtraction.classList.remove("pressed");
        multiplication.classList.remove("pressed");
        division.classList.remove("pressed");
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + "7" ;
            }
    }   
    
    eight.onclick = function(){
        
        if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = "";
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + "8" ;
            
        }else{
        
        addition.classList.remove("pressed");
        subtraction.classList.remove("pressed");
        multiplication.classList.remove("pressed");
        division.classList.remove("pressed");
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + "8" ;
            }
    }   
    
    nine.onclick = function(){
        
        if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = "";
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + "9" ;
            
        }else{
        
        addition.classList.remove("pressed");
        subtraction.classList.remove("pressed");
        multiplication.classList.remove("pressed");
        division.classList.remove("pressed");
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + "9" ;
            }
    }   
    
    zero.onclick = function(){
        
        if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = "";
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + "0" ;
            
        }else{
        
        addition.classList.remove("pressed");
        subtraction.classList.remove("pressed");
        multiplication.classList.remove("pressed");
        division.classList.remove("pressed");
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + "0" ;
            }
    }   
    
    doubleZero.onclick = function(){

        if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = "";
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + "00" ;

        }else{

        addition.classList.remove("pressed");
        subtraction.classList.remove("pressed");
        multiplication.classList.remove("pressed");
        division.classList.remove("pressed");
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + "00" ;
            }
    }  
    
    decimal.onclick = function(){

        if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = "";
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + "." ;

        }else{
            
        addition.classList.remove("pressed");
        subtraction.classList.remove("pressed");
        multiplication.classList.remove("pressed");
        division.classList.remove("pressed");
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + "." ;
            }
    }
    
    
            /////Operator Functions/////
    //Problems: Can't allow more than one press of an operator in a row
    //Pressing an operator after equals needs to pull the answer
    
    addition.onclick = function(){
        
        if(addition.classList == "pressed"){
            // do nothing //
        
        }else if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            addition.classList.add ("pressed");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = displayAnswer.innerHTML;
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + " + ";
            
        }else{
        equals.classList.remove("pressed");
        addition.classList.add ("pressed");    
        displayExpression.innerHTML = "";
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + " + ";
        }
    }
    
    subtraction.onclick = function(){
        
        if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = displayAnswer.innerHTML;
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + " + ";
            
        }else{
        equals.classList.remove("pressed");
        displayExpression.innerHTML = "";
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + " + ";
        }
    }
    
    multiplication.onclick = function(){
        equals.classList.remove("pressed");
        displayExpression.innerHTML = "";
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + " * ";
    }
    
    division.onclick = function(){
        equals.classList.remove("pressed");
        displayExpression.innerHTML = "";
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + " / ";
    }   
    
    equals.onclick = function(){
        equals.classList.add ("pressed");
        displayExpression.innerHTML = displayActive.innerHTML;
        displayActive.style.display = "none";
        
        var answer = eval(displayExpression.innerHTML);
        
        displayAnswer.innerHTML = answer;
        
    }
    
}
