var gra = confirm ("Czy grasz w gry?")

if(gra)
{
    var gierasz = prompt("Jaka masz ulubiona gre komputerowa?")
    var pytanko = parseInt(prompt("Ile godzin spedziles?"))
    if(pytanko < 100)
    {
    alert ("Zaczynam dopiero w to grac")
    }
    else if(pytanko >= 100 && pytanko < 300)
    {
        alert("Poznales Juz Ta Gre")
    }  
    {
        document.write("Jestes w tym MISTRZEM")
    }
}




