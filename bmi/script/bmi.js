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
    let r = document.querySelector("#result");
    let rp = document.createElement("p");
    //alert(w.value)
    let bmi = calBmi(h.value,w.value)
    //alert(h)
    //ggit alert(bmi)
    let result = checkBmi(bmi)
    //alert(result);
    // change back ground color based on resul

    rp.textContent=result;
    r.appendChild(rp);

    if (result == "under weight")
    {
        document.body.style.backgroundColor = "grey";
    }
    else if (result == "normal weight")
    {
        document.body.style.backgroundColor = "blue";
    }
    else if (result == "over weight")
    {
        document.body.style.backgroundColor = "yellow";
    }
    else
    {
        document.body.style.backgroundColor = "red";
    }

}

function check_button()
{
    // get the button and add code when it is clicked
    //alert("work")
    let b = document.querySelector("#button");
    //alert(b)
    b.addEventListener("click",giveBmi);
}

//let a = calBmi(1.64,65)

//let b = checkBmi(a)


//alert(a+b)
//get_value()
check_button();