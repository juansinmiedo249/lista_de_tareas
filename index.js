// FUNCION PARA AGREGAR CAMPO NUEVO
function agregarCampo(){
    const formulario = document.getElementById('tal')
    const tarea = document.querySelector('input');
    let contenido = tarea.value;
    const parrafo = document.createElement('p');
    parrafo.textContent = contenido;
    let boton = document.createElement('button');
    boton.textContent="Eliminar";
    let chec = document.createElement('input');
    chec.type="checkbox";
    let div = document.createElement('div');
    div.style = //css
                `display: flex;
                gap: 2rem;
                border: solid 2px;
                border-radius: 1.5rem;
                padding: .3rem;
                align-items: center;`;
    
    boton.style = //css 
                `height:2rem;
                border-radius: 1.5rem;
                width: 5rem;`
    div.appendChild(chec);
    div.appendChild(parrafo);
    div.appendChild(boton)
    formulario.appendChild(div);

    boton.addEventListener('click',function(){
        formulario.children[formulario.children.length-1].remove()
    })
    
}

let button=document.getElementById('botomcito');
button.addEventListener('click',agregarCampo)