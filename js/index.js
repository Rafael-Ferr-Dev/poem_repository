import { connection } from "./Apis_conexion.js";

export function modificarDivCentral_Comentarios(){
    var buttonEscondido = document.getElementById('button_perfil');
    buttonEscondido.style.display = 'none';
    var title_ofc = document.getElementById('title_ofc');
    title_ofc.innerHTML = "Comentários";
    var poem_ofc = document.getElementById('poem_ofc');
    poem_ofc.innerHTML = '';
    var outrosComentarios = document.createElement('div');
    outrosComentarios.style.display = 'block';
    outrosComentarios.style.position = 'absolute';
    outrosComentarios.style.width = '94vw';
    outrosComentarios.style.height = '50vh';
    outrosComentarios.style.left = '3vw';
    outrosComentarios.style.top = '32vh';
    outrosComentarios.style.backgroundColor = 'white';
    outrosComentarios.style.borderRadius = '7px';
    outrosComentarios.style.overflowY = 'scroll';
    outrosComentarios.style.overflowX = 'hidden';
    document.body.appendChild(outrosComentarios);
    var novoComentario = document.createElement('input');
    novoComentario.id = "inserirComentario";
    novoComentario.type = 'text';
    novoComentario.style.display = 'flex';
    novoComentario.style.position = 'absolute';
    novoComentario.style.width = '40vw';
    novoComentario.style.height = '10vh';
    novoComentario.style.left = '3vw';
    novoComentario.style.top = '83vh';
    novoComentario.style.border = 'none';
    document.body.appendChild(novoComentario);
    var buttomInicio = document.createElement('button');
    var divButtomInicio = document.createElement('div');
    divButtomInicio.style.display = 'flex';
    divButtomInicio.style.position = 'absolute';
    divButtomInicio.style.left = '52vw';
    divButtomInicio.style.top = '85vh';
    buttomInicio.innerHTML = "poema";
    divButtomInicio.appendChild(buttomInicio);
    document.body.appendChild(divButtomInicio);
    var buttomModificado = document.createElement('button');
    buttomModificado.innerHTML = "Comentar";
    var divBnt = document.getElementById('button_poem');
    divBnt.appendChild(buttomModificado);
    var buttonUsado = document.getElementById('modificar');
    buttonUsado.style.display = "none";
    let buttonNewPoem = document.getElementById('new_poem');
    buttonNewPoem.style.display = 'none';

    let obj_local_return = JSON.parse(localStorage.getItem('obj_global'));
    function reverse(){
        title_ofc.innerHTML = obj_local_return.title;
        outrosComentarios.remove();
        novoComentario.remove();
        buttomInicio.remove();
        divButtomInicio.remove();
        buttomModificado.style.display = "none";
        buttonEscondido.style.display = 'inline';
        buttonUsado.style.display = "block";
        buttonNewPoem.style.display = 'flex';
        poem_ofc.innerHTML = obj_local_return.poem;
        var author_ofc = document.getElementById('name_ofc');
        author_ofc.innerHTML = obj_local_return.author;
    }
    buttomInicio.onclick = reverse;

    let conect = new connection;
    let promiseComents = conect.retornar_comentarios_byPoema(obj_local_return.title);
    console.log(obj_local_return.title);
    console.log(promiseComents);
    promiseComents.then(resultado =>{
        if (resultado.length>0){
            for(let i=0; i<resultado.length; i++){
                var divComentarios = document.createElement('div');
                divComentarios.id = "divComentarios"+i;
                divComentarios.innerHTML = resultado[i].autor + ": " + resultado[i].comentario;
                divComentarios.style.display = "block";
                divComentarios.style.position = "static";
                divComentarios.style.margin = "4vh";
                outrosComentarios.appendChild(divComentarios);
            }
        }
    }).catch(error =>{
        console.error("Ocorreu um erro: ", error);
    });

    buttomModificado.onclick = comentar;
    let obj_user = JSON.parse(localStorage.getItem('obj_local'));
    function comentar(){
        let promiseComents2 = conect.retornar_comentarios_byPoema(obj_local_return.title);
        promiseComents2.then(resultado =>{
            if (resultado.length>0){
                for(let i=0; i<resultado.length; i++){
                    var divComentarios = document.createElement('div');
                    divComentarios.id = "divComentarios"+i;
                    divComentarios.innerHTML = resultado[i].autor + ": " + resultado[i].comentario;
                    divComentarios.style.display = "block";
                    divComentarios.style.position = "static";
                    divComentarios.style.margin = "4vh";
                    outrosComentarios.removeChild(outrosComentarios.firstChild);
                    outrosComentarios.appendChild(divComentarios);
                }
            }
        }).catch(error =>{
            console.error("Ocorreu um erro: ", error);
        });
        let promiseComentar = conect.cadastrar_comentario(document.getElementById('inserirComentario').value, obj_local_return.title, obj_user.nome);
        promiseComentar.then(resultado =>{
            console.log(resultado);
        }).catch(error =>{
            console.error("Deu um erro: ", error);
            alert("Comentário não enviado");
        })
    }
}
export function request_poem(){
    let connection_obj = new connection;
    let promisePoem = connection_obj.retornar_AllPoemas();
    promisePoem.then(resultado =>{

        let random = Math.floor(Math.random()*(resultado.length - 0)+0);
        var obj = resultado[random];
        var poem_ofc = document.getElementById('poem_ofc');
        var author_ofc = document.getElementById('name_ofc');
        var title_ofc = document.getElementById('title_ofc');
        poem_ofc.innerHTML = obj.poem;
        author_ofc.innerHTML = obj.author;
        title_ofc.innerHTML = obj.title;
        localStorage.setItem('obj_global', JSON.stringify(obj));

    }).catch(error => {
        console.error("Ocorreu um erro: ", error);
    });
}
window.onload = request_poem;
window.modificarDivCentral_Comentarios = modificarDivCentral_Comentarios;
window.request_poem = request_poem;