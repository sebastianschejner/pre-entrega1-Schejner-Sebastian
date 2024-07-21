NoteApp()

function NoteApp(){

let preguntar = "";
let nota = "";



preguntar = prompt( "Escriba LISTA si desea escribir una lista o NOTA si desea escribir una nota");

if(preguntar.toLocaleLowerCase() =="nota"){
    nota = prompt('Escriba aqui su nota')
    if (nota == ""){
        alert(`Por favor intente escribir su nota nuevamente`)
        NoteApp()
    }else{
        alert(`su nota es ${nota}`);
    }
   
}else if(preguntar.toLowerCase()== "lista"){
    valor = prompt (`Añadir elemento a la lista`);
    const lista2 = addToList(valor)
    alert(`su lista es ${lista2.join(`-`)}`);
}else{ 
    alert('Introduzca un valor correcto')
    NoteApp()
    
}

//Funcion Añadir elemento a la lista

function addToList(v){
    const lista = [];
    lista.push(v)
    while (confirm('¿Desea añadir otro elemento a su lista?') == true){
        v = prompt (`Añadir elemento a la lista`);
        if(v== ""){
            alert(`Por favor escriba el elemento que desea añadir a su lista`)   
        }else{
        lista.push(v);
    }
    }
    return lista;
}


}

