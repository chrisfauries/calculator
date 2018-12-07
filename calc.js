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
    
    
            /////Initial State/////
    
    multiplication.setAttribute("state","initial");
    division.setAttribute("state","initial");
    equals.setAttribute("state","initial");
    
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
        multiplication.setAttribute("state","");
        division.setAttribute("state","");
        equals.setAttribute("state","");
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
        multiplication.setAttribute("state","");
        division.setAttribute("state","");
        equals.setAttribute("state","");
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
        multiplication.setAttribute("state","");
        division.setAttribute("state","");
        equals.setAttribute("state","");
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
        multiplication.setAttribute("state","");
        division.setAttribute("state","");
        equals.setAttribute("state","");
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
        multiplication.setAttribute("state","");
        division.setAttribute("state","");
        equals.setAttribute("state","");
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
        multiplication.setAttribute("state","");
        division.setAttribute("state","");
        equals.setAttribute("state","");
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
        multiplication.setAttribute("state","");
        division.setAttribute("state","");
        equals.setAttribute("state","");
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
        multiplication.setAttribute("state","");
        division.setAttribute("state","");
        equals.setAttribute("state","");
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
        multiplication.setAttribute("state","");
        division.setAttribute("state","");
        equals.setAttribute("state","");
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
        multiplication.setAttribute("state","");
        division.setAttribute("state","");
        equals.setAttribute("state","");
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
        multiplication.setAttribute("state","");
        division.setAttribute("state","");
        equals.setAttribute("state","");
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + "00" ;
            }
    }  
    
    decimal.onclick = function(){
        
        if(decimal.getAttribute("state","restrict")){
            //nothing//
            
        }else if(equals.className == "pressed"){
            decimal.setAttribute("state","restrict");
            equals.classList.remove("pressed");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = "";
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + ".";

        }else{
        decimal.setAttribute("state","restrict");
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + ".";
            }
    }
    
    
            /////Operator Functions/////
    
    
    addition.onclick = function(){
        
        if(addition.classList == "pressed"){
            // do nothing //
        
        }else if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            addition.classList.add ("pressed");
            equals.setAttribute("state","initial");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = displayAnswer.innerHTML;
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + " + ";
            
        }else{
        equals.classList.remove("pressed");
        addition.classList.add ("pressed");
        decimal.setAttribute("state","");
        equals.setAttribute("state","initial");
        displayExpression.innerHTML = "";
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + " + ";
        }
    }
    
    subtraction.onclick = function(){
        
        if(subtraction.classList == "pressed"){
            // do nothing //
        
        }else if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            subtraction.classList.add ("pressed");
            equals.setAttribute("state","initial");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = displayAnswer.innerHTML;
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + " - ";
            
        }else{
        equals.classList.remove("pressed");
        subtraction.classList.add ("pressed");
        decimal.setAttribute("state","");
        equals.setAttribute("state","initial");
        displayExpression.innerHTML = "";
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + " - ";
        }
    }
    
    multiplication.onclick = function(){
        
        if(multiplication.getAttribute("state","initial")){
            // do nothing //
        
        }else if(multiplication.classList == "pressed"){
            // do nothing //
        
        }else if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            multiplication.classList.add ("pressed");
            equals.setAttribute("state","initial");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = displayAnswer.innerHTML;
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + " * ";
            
        }else{
        equals.classList.remove("pressed");
        multiplication.classList.add ("pressed");
        decimal.setAttribute("state","");
        equals.setAttribute("state","initial");
        displayExpression.innerHTML = "";
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + " * ";
        }
    }
    
    division.onclick = function(){
        
        if(division.getAttribute("state","initial")){
            // do nothing //
        
        }else if(division.classList == "pressed"){
            // do nothing //
        
        }else if(equals.className == "pressed"){
            equals.classList.remove("pressed");
            division.classList.add ("pressed");
            equals.setAttribute("state","initial");
            displayExpression.innerHTML = "";
            displayActive.innerHTML = displayAnswer.innerHTML;
            displayActive.style.display = "block";
            displayActive.innerHTML = displayActive.innerHTML + " / ";
            
        }else{
        equals.classList.remove("pressed");
        division.classList.add ("pressed");
        decimal.setAttribute("state","");
        equals.setAttribute("state","initial");
        displayExpression.innerHTML = "";
        displayActive.style.display = "block";
        displayActive.innerHTML = displayActive.innerHTML + " / ";
        }
    }  
    
    
    equals.onclick = function(){
        
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
            displayAnswer.innerHTML = "Error: Divided by 0";
            displayAnswer.classList.add("flash");  
        }
        
        /* Build an off-click function clear error message 
        document.addEventListener("click", function(event)){
        https://codeburst.io/the-off-click-7cbc08bb3df5
        if(event.target.closest("#equals")){
            displayAnswer.classList.remove("flash"); 
            displayAnswer.innerHTML = "";
            */
        }
    }
    



///// Significant Figures /////
///// Add parathesis functionality /////
///// Create funtions for "Square" and "Square Root" /////
/////  Clear and Full Clear buttons /////