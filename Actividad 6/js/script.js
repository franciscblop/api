axios.defaults.baseURL= "http://apiadw.ga/api/v1";

// Eventos de los botones
document.getElementById("btnTareas").onclick = function() {
    axios.get("/tareas")
    .then(function (response) {
        var tareas= response.data.data;
        document.getElementById("respuesta_tareas").innerHTML = "Lista de Tareas:";
        for (let i = 0; i < tareas.length; i++) {
            
            document.getElementById("respuesta_tareas").innerHTML +="<div>"+tareas[i].id+ "-"+ tareas[i].Tarea + "-" + tareas[1].Terminada+"</div>";    
        }    
       
    })
    .catch(function (error) {
        console.error(error);
        document.getElementById("respuesta_tareas").innerHTML = "algo salio mal :((";
    })
    
    
}

document.getElementById("btnTarea").onclick = function() {
   var idTarea = document.getElementById("txtidTareaget").value;
    document.getElementById("respuesta_tarea").innerHTML = `Informacion sobre persona ${idTarea}`;
}

document.getElementById("btnnuevo").onclick = function() {
    var nombre = document.getElementById("txtnombrepost").value;
    var terminada = document.getElementById("cbterminadapost").checked;
    console.log(terminada);
    document.getElementById("respuesta_post").innerHTML = `Se crea la persona ${nombre} ${terminada}`;
 }

 document.getElementById("btnactualizar").onclick = function() {
    var idTarea = document.getElementById("txtidTareaput").value;
    var nombre = document.getElementById("txtnombreput").value;
    var apellido = document.getElementById("cbterminadaput").checked;
    document.getElementById("respuesta_put").innerHTML = `Se actualiza la persona ${idTarea} por ${nombre} ${apellido}`;
 }

document.getElementById("btneliminar").onclick = function() {
    var idTarea = document.getElementById("txtidTarearemove").value;
     document.getElementById("respuesta_remove").innerHTML = `Se elimina la persona ${idTarea}`;
 }
