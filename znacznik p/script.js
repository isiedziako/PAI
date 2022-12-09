function zwieksz()
{
    let p = document.getElementById("p");
    console.log(p);

    i = parseInt(p.innerHTML);
    i = i + 1;

    if(i < 10)
    {
        document.getElementById("zmniejsz").style.visibility = "hidden";
    }
    else if( i >= 10)
    {
        document.getElementById("zmniejsz").style.visibility = "inherit";     
        document.getElementById("zwieksz").style.visibility = "hidden"; 
    }

    p.innerHTML = i;
}

function zmniejsz()
{
    let p = document.getElementById("p");
    console.log(p);

    i = parseInt(p.innerHTML)
    i = i - 1;

    if(i > 0)
    {
        document.getElementById("zwieksz").style.visibility = "hidden";
    }
    else if( i <= 0)
    {
        document.getElementById("zwieksz").style.visibility = "inherit";     
        document.getElementById("zmniejsz").style.visibility = "hidden"; 
    }

    p.innerHTML = i;
}