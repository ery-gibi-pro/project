//alert("hello")

function calBmi(height,weight)
{
    // calculate the bmi
    let bmi;
    height = height * height
    bmi = weight/height
    return bmi
}

function checkBmi(bmi)
{
    //check the bmi
    let result
    if(bmi < 18.5)
    {
        result = "under weight";
    }
    else if(bmi <= 24.9)
    {
        result = "normal weight";
    }
    else if (bmi <= 29.9)
    {
        result = "over weight";
    }
    else
    {
        result = "obese";
    }
    return result
}

let a = calBmi(1.64,65)

let b = checkBmi(a)
alert(a+b)