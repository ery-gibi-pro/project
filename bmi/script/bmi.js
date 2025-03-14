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

function giveBmi()
{
    // get the height and width from form and calculate the bmi and print it out
    let h = document.querySelector("#height");
    let w = document.querySelector("#weight");
    //alert(w.value)
    let bmi = calBmi(h.value,w.value)
    alert(h)
    alert(bmi)
    let result = checkBmi(bmi)
    alert(result);
}

function check_button()
{
    // get the button and add code when it is clicked
    //alert("work")
    let b = document.querySelector("#button");
    //alert(b)
    b.addEventListener("click",giveBmi);
}

let a = calBmi(1.64,65)

let b = checkBmi(a)


//alert(a+b)
//get_value()
check_button();