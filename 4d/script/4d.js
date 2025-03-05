//console.log('your 4d number is')
//var a = Math.random()
//console.log(a)
//var b = Math.random()* 10000
//b = Math.floor(b)
//console.log(b)

//create_p('tests hello')

//var number = create_4d()
//alert(number)
//create_p(number)

for(var i=0;i<1;i++)
{
    let number = create_4d()
    create_p(number)
}

function create_4d()
{
    //fucntion to generate random 4d number
    var n = Math.random()*10000
    n = Math.floor(n)
    if(n < 10)
    {
        n = String(n)
        n = "000" + n
    }
    else if( n < 100)
    {
        n = String(n)
        n = '00'+n
    }
    else if ( n < 1000)
    {
        n = String(n)
        n = '0'+n
    }
    else
    {
      
    }
    return n
}

function create_p(number)
{
    let p = document.createElement("p")
    p.textContent = number
   
    console.log(p)
    var a = document.getElementById('number')
    a.appendChild(p)

}