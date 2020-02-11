var num1 = 0;//1st number
var num2 = 0;//2nd number
var ops = 0;//Operators 1= addition, 2= division, 3= multiplication, 4 = subtraction
var key = false;

//numbers
function set(x)
{
if (key == false)
{
    document.getElementById("display").innerHTML += x;
    num1+=x;
}
else 
{
    document.getElementById("display").innerHTML
}
}



function op(x)
{
    if (key = false )
    {
        if (ops == op(1))
        {
            document.getElementById("display").innerHTML = num1 + " + "  +num2;
        }
        else if(ops == op(2))
        {
            document.getElementById("display").innerHTML = num1 + " / " +num2; 
        }
        else if(ops == op(3))
        {
            document.getElementById("display").innerHTML = num1+ " X " +num2;
        }
        else
        {
            document.getElementById("display").innerHTML = num1+" - " +num2;
        } 
    }
}

//Equal button
function equal()
{
    if (key = false ){
    document.getElementById("display").innerHTML = num1 += x;
    }
}

//Clear button
function erase()
{
    document.getElementById("display").innerHTML = " ";
}