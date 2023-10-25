// console.log("--sueldos--");
function categ(categoria){
    if (categoria == 1){
        return "categoria 1";
    }
    else if (categoria == 2){
        return "categoria 2";

    }
    else if (categoria == 3){
        return "categoria 3";

    }
    else if (categoria == 4){
        return "categoria 4";

    }
}
function sueldo(sueldo, ca){
    if (ca == 1){
        return (((sueldo * 0.15) + sueldo).toFixed(2));
    }
    else if (ca == 2){
        return (((sueldo * 0.10) + sueldo).toFixed(2));

    }
    else if (ca == 3){
        return (((sueldo * 0.8) + sueldo).toFixed(2));

    }
    else if (ca == 4){
        return (((sueldo * 0.7) + sueldo).toFixed(2));
        

    }
}
let cadena = ["categoria: " + categ(3) + "  " + " sueldo " +  sueldo(288273.2 ,3)];
// console.log(cadena);