var num1 = 0;//1st number
var num2 = 0;//2nd number
var ops = 0;//Operators 1= addition, 2= division, 3= multiplication, 4 = subtraction
var key = true;//Flag

//numbers
function set(x)
{
if (key == true)//Number1
{
    
    num1=document.getElementById("display").innerHTML+=x;
    console.log("num1:"+num1);
}
if(key == false)//Number2
{
    
    num2+=""+x;
    document.getElementById("display").innerHTML+=x;
    console.log("num2:"+num2);
}
}

function op(x)// display type of operation
{
    key = false;
    if(x==1)
        {
        document.getElementById("display").innerHTML += " + ";
        ops=x;
        
        }  
     else if(x==2)
        {
        document.getElementById("display").innerHTML = num1 + " / "+num2;
        }
    else if(x==3)
        {
        document.getElementById("display").innerHTML = num1 + " X "+num2;
        }
    else if(x==4)
        {
        document.getElementById("display").innerHTML = num1 +" - "+num2;
        } 
}



//Equal button
function equal()
{
    key=true;
    if (key == true)
{
    document.getElementById("display").innerHTML = num1+num2;  
    console.log(num1+num2);    
}
    /*else if(key == true)
    {
        document.getElementById("display").innerHTML = num1/num2;
    }*/
}
//Clear button
function erase()
{
    document.getElementById("display").innerHTML = "";
}