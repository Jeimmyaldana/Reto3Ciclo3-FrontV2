//GET, POST , PUT Y DELETE

function getCliente (){
    $.ajax({
        url:"http://192.9.238.217:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){   
            pintarCliente(respuesta);
        }
    });

}

function postCliente(){

    if($("#email").val().length==0 || $("#password").val().length==0 
        || $("#name").val().length==0 ||  $("#age").val().length==0 ){
        alert("Todos los campos son obligatorios");
    }else{

    let cajas = {
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val()
    };
    $.ajax({
        url:"http://192.9.238.217:8080/api/Client/save",
        type:"POST",
        datatype:"JSON",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se registro correctamente el cliente");
            window.location.reload();
    
        }
    });
    }
}

function putCliente(idDesdeBoton){
    if($("#email").val().length==0 || $("#password").val().length==0 
    || $("#name").val().length==0 ||  $("#age").val().length==0 ){
    alert("Todos los campos son obligatorios");
    }else{
        let cajas = {
            id:idDesdeBoton,
            email:$("#email").val(),
            password:$("#password").val(),
            name:$("#name").val(),
            age:$("#age").val()
        };
        $.ajax({
            url:"http://192.9.238.217:8080/api/Client/update",
            type:"PUT",
            datatype:"JSON",
            contentType:"application/json",
            data: JSON.stringify(cajas),
            success:function(respuesta){
                alert("se actualizo correctamente la informacion del cliente");
                window.location.reload();
        
                }
            });



    }


}

function deleteCliente(idDesdeBoton){
    
    let myData={
        id:idDesdeBoton
    };

    $.ajax({
        url:"http://192.9.238.217:8080/api/Client/"+idDesdeBoton,
        type:"DELETE",
        datatype:"JSON",
        data: JSON.stringify(myData),
        contentType:"application/json",
        success:function(respuesta){
            alert("se borro correctamente el cliente");
            window.location.reload();
        }
    });

}


////////////////////////////////////////////

function pintarCliente(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td> <button class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' onclick='putCliente("+respuesta[i].id+") '> Actualizar</button>"
        myTable+="<td> <button class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' onclick='deleteCliente("+respuesta[i].id+")'> Borrar</button>"
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);

    
}