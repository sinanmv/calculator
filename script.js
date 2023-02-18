var p =false
document.body.style.backgroundColor = "rgb(155, 155, 155)"
var memorystore = 0;
colorchangeme = true
function addnum(num)
{
        if(textshow.value==0)
        {
            textshow.value = num

        }
        else
        {
            textshow.value += num
        }
}
function evaluationnum()
{
    var exp = textshow.value;  
    if(exp)
    {
        textshow.value = eval(exp) 
    }
}

function backspace()
{
    var exp = textshow.value
    textshow.value = exp.substring(0,exp.length -1)
}
function clearnum()
{
    textshow.value = 0
}
function colorchange()
{
    if(colorchangeme)
    {
        document.body.style.backgroundColor = "#495057"
    data = document.getElementsByClassName("num")
    for(i=0;i<data.length;i++)
    {
        data[i].style.backgroundColor = "white"
        data[i].style.color = "black"
        data[i].style.boxShadow = "0px 0px 5px inset black"
    }
    data = document.getElementsByClassName("calculator")
    data[0].style.backgroundColor = "white"
    del.style.backgroundColor = "white"
    del.style.boxShadow = "0px 0px 5px inset black"
    del.style.color = "rgb(255, 123, 123)"
    colorchangeme = false
    }
    else
    {
        document.body.style.backgroundColor = "rgb(155, 155, 155)"
    data = document.getElementsByClassName("num")
    for(i=0;i<data.length;i++)
    {
        data[i].style.backgroundColor = "#3d3d3d"
        data[i].style.color = "white"
        data[i].style.boxShadow = "inset 0px 0px 15px -10px white"
    }
    data = document.getElementsByClassName("calculator")
    data[0].style.backgroundColor = "rgb(27, 27, 27)"
    del.style.color = "rgb(255, 123, 123)"
    colorchangeme = true
    }
    
    
}

function memoryresult()
{
    textshow.value = this.memorystore
}
function addmemory()
{
    this.memorystore  += parseFloat(textshow.value)
}
function submemory()
{
    this.memorystore -= parseFloat(textshow.value)
}