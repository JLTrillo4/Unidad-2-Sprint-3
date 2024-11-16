 //! OPCION 1
 /*
 //* TRAEMOS EL BOTON AGREDAR CON SU ID
const botonAgregar = document.getElementById("agregar");

//*TRAEMOS LA LISTA "LISTA" CON SU ID
const listado = document.getElementById("lista");

//*HEMOS CREADO UN EVENTO CLICK DENTRO DEL BOTON AGREGAR
botonAgregar.addEventListener("click", function() {
    
    //*SE CREA UN "ITEEM" CON LO QUE PONGA EL USUARIO EN EL PROMPT
    const item = prompt("Agrega un elemento a la lista");
    
    //*CREO UN ELEMENTO <LI> DENTRO DEL DOCUMENTO HTML
    const newElement = document.createElement("li");

    //*DENTRO DE LA "LISTA" METO ESE ITEM QUE ES UN <LI>
    listado.appendChild(newElement);

    //*CREAMOS UN ELEMENTO TEXTO DENTRO DE ESE ITEM <LI>
    const elementText = document.createTextNode(item);

    //*METE ESE TEXTO DENTRO DE NEWELEMENT = <LI>
    newElement.appendChild (elementText);
}) */
/*
//! OPCION 2

 const boton = document.getElementById("agregar");
const lista = document.getElementById("lista");

function addElement() {
    const elemento = prompt("Añadir elemento a la lista");
    lista.insertAdjacentHTML("beforeend", "<li> ${elemento} </li>")
}

boton.addEventListener("click", addElement); 
*/
//! OPCION 3

const boton = document.getElementById("agregar");
const lista = document.getElementById("lista");

boton.addEventListener("click", () =>{
    const elemento = prompt("Añade un elemento a la lista");

    if (elemento) {
        const li = document.createElement("li");
        li.innerHTML = elemento;
        lista.appendChild(li)
    }   else {
        alert("No has añadido ningun elemento")
    }
})

