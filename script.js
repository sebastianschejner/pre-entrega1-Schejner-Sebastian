
let preguntar = "";
let nota = "";


preguntar = prompt( " escriba lista o nota");

if(preguntar.toLocaleLowerCase() =="nota"){
    nota = prompt('escriba aqui su nota');
    alert(`su nota es ${nota}`);
}else if(preguntar.toLowerCase()== "lista"){
    valor = prompt (`anadir elemento a la lista`);
    const lista2 = addToList(valor)
    alert(`su lista es ${lista2.join(`-`)}`);
}else{ 
    alert('introduzca otra cosa')
}


function addToList(v){
    let lista = [];
    lista.push(v)
    while (confirm('desea anadir otro elemento?') == true){
        v = prompt (`anadir elemento a la lista`);
        lista.push(v);
    }
    return lista;
}




