

function mostrar_alerta() {
    event.preventDefault();

    alert("El contenido aún no está disponible.")
}

    var iniintentos = 0
    var intentos = 4;

function adivinanzaHarry() {
    
    if (iniintentos===4) {
        alert("No te quedan mas intentos. La respuesta correcta era: EL SOMBRERO SELECCIONADOR")
        document.getElementById("click").disabled = true;
    }
    
        var rtacorrecta = "EL SOMBRERO SELECCIONADOR"
        var rtausuario = document.getElementById("rta1").value;
        
        do {
            if (rtausuario === rtacorrecta) {
                alert("Tu respuesta es correcta, felicitaciones!!!")}
            else {  iniintentos++;
                    alert("Intentelo nuevamente.")}
                    if(iniintentos===2) {alert("Pista: Escucha los pedidos de los estudiantes.")}
                    if(iniintentos===3) {alert("Pista: Va sobre la cabeza.")}
                     break;
                    
            }
while(iniintentos <=4);
}