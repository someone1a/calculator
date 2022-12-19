function calcular() {
    let opcion = document.getElementById("choose").value;
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    if (opcion == "suma") {
        let result = parseInt(n1+n2);
        alert(result)
        document.getElementById("demo").innerHTML = result;
    } else if (opcion == "resta"){
        let  result = parseInt(n1-n2)
        alert(result)
        document.getElementById("demo").innerHTML = result;
    } else if  (opcion == "multi"){
        let result = parseInt(n1*n2)
    alert(result)
    document.getElementById("demo").innerHTML = result;
    } else if (opcion == "division"){
        let result = parseInt(n1/n2)
        alert(result)
        document.getElementById("demo").innerHTML = result;
    }
}
document.getElementById("demo").innerHTML = result;