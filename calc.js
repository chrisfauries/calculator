window.onload = function(){
    
    var displayActive = document.getElementById("active-display");
    var displayExpression = document.getElementById("expression-display");
    var displayAnswer = document.getElementById("answer-display");
    
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    
    var addition = document.getElementById("addition");
    var equals = document.getElementById("equals");
    
    
    one.onclick = function(){
        
        displayActive.innerHTML = displayActive.innerHTML + "1";
    }
    
    two.onclick = function(){
        
        displayActive.innerHTML = displayActive.innerHTML + "2" ;
    }
    
    addition.onclick = function(){
        
        displayActive.innerHTML = displayActive.innerHTML + " + ";
    }
    
    equals.onclick = function(){
        displayExpression.innerHTML = displayActive.innerHTML;
        displayActive.innerHTML = "";
        
        var answer = eval(displayExpression.innerHTML);
        
        displayAnswer.innerHTML = "= " + answer;
        
        }
    }
    
