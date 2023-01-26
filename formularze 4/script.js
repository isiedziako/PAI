function Wyswietl()
{
    text = document.getElementById("Text").value;
    ilosc = parseInt(document.getElementById("Ilosc").value)

    for(var i =0; i < ilosc; i++)
    {
        alert(text);
    }
}