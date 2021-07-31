
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
var principal = document.getElementById("principal").value;
    if (principal<=0) { alert("Please enter a positive value")}
    else{
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
   
    document.getElementById("interest").innerText=interest;}
    
}
        
