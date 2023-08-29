
    Nombre_Pasatiempo_array = [];
    function submit()
    {
        var Pasatiempo_1 = document.getElementById("Nombre_Pasatiempo_1").value;
        var Pasatiempo_2 = document.getElementById("Nombre_Pasatiempo_2").value;
        var Pasatiempo_3 = document.getElementById("Nombre_Pasatiempo_3").value;
        var Pasatiempo_4 = document.getElementById("Nombre_Pasatiempo_4").value;
    
    
        Nombre_Pasatiempo_array.push(Pasatiempo_1);
        Nombre_Pasatiempo_array.push(Pasatiempo_2);
        Nombre_Pasatiempo_array.push(Pasatiempo_3);
        Nombre_Pasatiempo_array.push(Pasatiempo_4);
        console.log(Nombre_Pasatiempo_array);
    
    
        document.getElementById("Ver_Pasatiempo").innerHTML = Nombre_Pasatiempo_array;
        document.getElementById("Botton_Enviar").style.display = "none";
        document.getElementById("Botton_Ordenar_Alfabeticamente").style.display = "inline-block";
    }

function sorting()
{
    Nombre_Pasatiempo_array.sort();
    document.getElementById("Ver_Pasatiempo").innerHTML = Nombre_Pasatiempo_array;
}
