import { connection } from "./Apis_conexion.js";
import { modificarDivCentral_Comentarios } from "./index.js";

export function chamarPoemas(){
    let obj_pessoas = JSON.parse(localStorage.getItem('obj_local'));
    let connect = new connection;
    let promisePoems = connect.retornar_poemas_byUsuario(obj_pessoas.nome);
    promisePoems.then(resultado => {
        let random = Math.floor(Math.random()*(resultado.length-0)+0);
        let obj_Nresultado = resultado[random];
        let poem_ofc = document.getElementById("poem_ofc");
        poem_ofc.innerHTML = obj_Nresultado.poem;
        let title = document.getElementById("title_ofc");
        title.innerHTML = obj_Nresultado.title;
        let name = document.getElementById("name_ofc");
        name.innerHTML = obj_Nresultado.author;
        localStorage.setItem('obj_global', JSON.stringify(obj_Nresultado));
    }).catch(error => {
        console.error("Ocorreu um erro: ", error);
    });
}
export function enviarPoema(){
    let nome = document.getElementById("name_ofc");
    nome.style.display = 'none';
    let title = document.getElementById('title_ofc');
    title.style.display = 'none';
    let poem = document.getElementById('poem_ofc');
    poem.style.display = 'none';
    let insertPoem = document.createElement('textarea');
    insertPoem.id = "poema";
    insertPoem.classList.add('textArea');
    let poemDiv = document.getElementById('poem_div');
    let insertTitle = document.createElement('input');
    let button_new_poem = document.getElementById('new_poem');
    button_new_poem.style.display = 'none';
    insertTitle.id = "title";
    insertTitle.type = "text";
    insertTitle.classList.add('textTitle');
    poemDiv.appendChild(insertPoem);
    poemDiv.appendChild(insertTitle);
    let buttonModificar = document.getElementById('modificar');
    buttonModificar.style.display = "none";
    let obj_autor = JSON.parse(localStorage.getItem('obj_local'));
    let conect = new connection;
    let button = document.createElement('button');
    button.innerHTML = 'Publicar';
    let divButton = document.createElement('div');
    divButton.classList.add('buttonPostPoem');
    divButton.appendChild(button);
    document.body.appendChild(divButton);
    button.onclick = publish;
    function publish(){
        let promisePoem = conect.publicar_poem(document.getElementById('poema').value, document.getElementById('title').value, obj_autor.nome);
        promisePoem.then(resultado =>{
            location.reload();
        }).catch(error=>{
            console.error("Ocorreu um erro: ", error);
        });
    }
    
}
window.onload = chamarPoemas;
window.chamarPoemas = chamarPoemas;
window.enviarPoema = enviarPoema;