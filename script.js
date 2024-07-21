(function NoteApp() {
    let preguntar = prompt("Escriba LISTA si desea escribir una lista o NOTA si desea escribir una nota");

    if (preguntar === null) {
        return; 
    }

    preguntar = preguntar.toLowerCase();

    if (preguntar === "nota") {
        let nota = prompt('Escriba aquí su nota');
        if (nota === "") {
            alert(`Por favor intente escribir su nota nuevamente`);
            NoteApp(); 
        }else if(nota === null){
            NoteApp()
        }else {
            alert(`Su nota es: ${nota}`);
        }
    } else if (preguntar === "lista") {
        const lista = addToList(); 
        alert(`Su lista es: ${lista.join('-')}`);
    } else {
        alert('Introduzca un valor correcto (LISTA o NOTA)');
        NoteApp(); 
    }

    // Función para añadir elementos a la lista
    function addToList() {
        const lista = [];
        
        while (true) {
            let valor = prompt(`Añadir elemento a la lista`);
            if (valor === null) {
                NoteApp(); 
            }
            if (valor === "") {
                alert(`Por favor escriba el elemento que desea añadir a su lista`);
                continue; 
            }
            lista.push(valor);
            if (!confirm('¿Desea añadir otro elemento a su lista?')) {
                break; 
            }
        }
        
        return lista;
    }
})();