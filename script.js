<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <label for="">edad:</label>
        <input type="text" name="" id="edadinput">
    </div>
    <div>
        <label for="">sexo:</label>
        <input type="text" name="" id="sexoinput">
    </div>
    <button onclick="javascript: mensaje(document.getElementById('edadinput').value, document.getElementById('sexoinput').value);">click aqui</button>
    <script src="script.js"></script>
</body>
</html>

function mensaje(edad,sexo){
    if(edad>=18 && sexo=="hombre"){
        alert("Si puedes pasar  con fe ");
    }else{
        alert("Vete o te mueres ")
    }
}
//otra manera para saber en que ango esta 
function mensaje(edad){
    if(edad<=10){
        alert("soy un niño");
    }else{
        if(edad <=17){
            alert("Soy un joven");
        }else{
            if(edad <=64){
                alert("Soy un Adulto");
            }else{
                alert("Soy un anciano");
            }
        }
    }
}
// metodo abreviado
function mensaje(edad){
    if(edad<=10){
        alert("soy un niño");
    }else if(edad <=17){
            alert("Soy un joven");
    }else if(edad <=64){
            alert("Soy un Adulto");
    }else{
            alert("Soy un anciano");
    }
}
// sexo definido
function mensaje(sexo){
    switch (sexo){
        case "M":
            alert("Soy hombe")
            break;
        case "F":
            alert("Soy mujer")
            break;
        default:
            alert("No Definido")
            break;
    }
}
function mensaje(sexo){
    switch (sexo){
        case "M", "m", "Masculino", "masculino", "MASCULINO":
            alert("Soy hombe")
            break;
        case "F", "f", "Femenino ","femenino", "FEMENINO":
            alert("Soy mujer")
            break;
        default:
            alert("No Definido")
            break;
    }
}
 // array
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


   <script>
    var datos = [10,20,30,40,50,60];

    for(var i=0;  i < datos.length; i++){
        document.write(datos[i] + "</br>")
    }
   </script>
</body>
</html>  
//otra forma 01
<script>
    var i = 0;
    var datos = [10,20,30,40,50,60,70,80];

    do{
        document.write(datos[i]+"</br>");
        i++;
    }while(i < datos.lenght);
</script>

 



