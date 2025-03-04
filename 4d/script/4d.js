console.log('your 4d number is')
var a = Math.random()
console.log(a)
var b = Math.random()* 10000
b = Math.floor(b)
console.log(b)

create_p()

function create_4d()
{
    //fucntion to generate random 4d number
    var n = Math.random()*10000
    n = Math.floor(n)
    if(n > 1000)
    {
    
    }
    else if( n > 100)
    {
        n = String(n)
        n = '0'+n
    }
    else if ( n > 10)
    {
        n = String(n)
        n = '00'+n
    }
    else
    {
        n = String(n)
        n = "000" + n
    }
    return n
}

function create_p()
{
    let p = document.createElement("p")
    p.textContent = "hello world"
   
    console.log(p)
    var a = document.getElementById('di')
    a.appendChild(p)

}