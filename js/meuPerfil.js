import { connection } from "./Apis_conexion.js";
export function login(){
    var removeBntLogin = document.getElementById('position_bpd');
    var removeBntCadastro = document.getElementById('position_bpd_2');
    removeBntLogin.remove();
    removeBntCadastro.remove();
    var divLogin = document.createElement('div');
    divLogin.style.display = 'flex';
    divLogin.style.position = 'absolute';
    divLogin.style.top = '42.5vh';
    divLogin.style.left = '28vw';
    divLogin.style.fontSize = '6vh';
    divLogin.innerHTML = 'Login:';
    document.body.appendChild(divLogin);
    var divNome = document.createElement('div');
    var divSenha = document.createElement('div');
    divNome.style.display = 'flex';
    divNome.style.position = 'absolute';
    divNome.style.width = '10vw';
    divNome.style.height = '12vh';
    divNome.style.top = '50vh';
    divNome.style.left = '28vw';
    divNome.innerHTML = "Nome:";
    divSenha.style.display = 'flex';
    divSenha.style.position = 'absolute';
    divSenha.style.width = '10vw';
    divSenha.style.height = '12vh';
    divSenha.style.top = '60vh';
    divSenha.style.left = '28vw';
    divSenha.innerHTML = "Senha:";
    document.body.appendChild(divNome);
    document.body.appendChild(divSenha);
    var inputNome = document.createElement('input');
    var inputSenha = document.createElement('input');
    inputNome.id = "inputNome";
    inputSenha.id = "inputSenha";
    inputNome.style.display = 'flex';
    inputNome.style.position = 'absolute';
    inputNome.style.width = '39vw';
    inputNome.style.height = '3vh';
    inputNome.style.top = '50vh';
    inputNome.style.left = '33vw';
    inputNome.style.border = 'none';
    inputNome.style.display = 'flex';


    inputSenha.style.display = 'flex';
    inputSenha.style.position = 'absolute';
    inputSenha.style.width = '38vw';
    inputSenha.style.height = '3vh';
    inputSenha.style.top = '60vh';
    inputSenha.style.left = '34vw';
    inputSenha.style.border = 'none';
    inputSenha.type = 'password';
    document.body.appendChild(inputNome);
    document.body.appendChild(inputSenha);
    var divButtomEntrar = document.createElement('div');
    var buttomEntrar = document.createElement('button');
    divButtomEntrar.style.display = 'flex';
    divButtomEntrar.style.position = 'absolute';
    divButtomEntrar.style.top = '65vh';
    divButtomEntrar.style.left = '39vw';
    buttomEntrar.innerHTML = "Entrar";    
    divButtomEntrar.appendChild(buttomEntrar);
    document.body.appendChild(divButtomEntrar);
    buttomEntrar.onclick = entrar;
    function entrar(){
        let connection_obj = new connection;
        let promisePoem = connection_obj.retornar_usuario(document.getElementById("inputNome").value, document.getElementById("inputSenha").value);
        promisePoem.then(resultado => {
            localStorage.setItem("obj_local", JSON.stringify(resultado));
            window.location.href = "/meusPoemas.html";
        }).catch(error =>{
            console.error("Ocorreu um erro:", error);
            alert("O login não foi efetuado");
        });
    }
}
export function cadastro(){
    var removeBntLogin = document.getElementById('position_bpd');
    var removeBntCadastro = document.getElementById('position_bpd_2');
    removeBntLogin.remove();
    removeBntCadastro.remove();
    var divCadastro = document.createElement('div');
    divCadastro.style.display = 'flex';
    divCadastro.style.position = 'absolute';
    divCadastro.style.top = '42.5vh';
    divCadastro.style.left = '28vw';
    divCadastro.style.fontSize = '6vh';
    divCadastro.innerHTML = 'Cadastro:';
    document.body.appendChild(divCadastro);
    var divNome = document.createElement('div');
    var divEMail = document.createElement('div');
    var divSenha = document.createElement('div');
    divNome.style.display = 'flex';
    divNome.style.position = 'absolute';
    divNome.style.width = '10vw';
    divNome.style.height = '12vh';
    divNome.style.top = '50vh';
    divNome.style.left = '28vw';
    divNome.innerHTML = "Nome:";
    divEMail.style.display = 'flex';
    divEMail.style.position = 'absolute';
    divEMail.style.width = '10vw';
    divEMail.style.height = '12vh';
    divEMail.style.top = '55vh';
    divEMail.style.left = '28vw';
    divEMail.innerHTML = "Email:";
    divSenha.style.display = 'flex';
    divSenha.style.position = 'absolute';
    divSenha.style.width = '10vw';
    divSenha.style.height = '12vh';
    divSenha.style.top = '60vh';
    divSenha.style.left = '28vw';
    divSenha.innerHTML = "Senha:";
    document.body.appendChild(divNome);
    document.body.appendChild(divEMail);
    document.body.appendChild(divSenha);
    var inputNome = document.createElement('input');
    var inputEMail = document.createElement('input');
    var inputSenha = document.createElement('input');
    inputNome.id = "inputNome";
    inputEMail.id = "inputEMail";
    inputSenha.id = "inputSenha";
    inputNome.style.display = 'flex';
    inputNome.style.position = 'absolute';
    inputNome.style.width = '40vw';
    inputNome.style.height = '3vh';
    inputNome.style.top = '50vh';
    inputNome.style.left = '32vw';
    inputNome.style.border = 'none';

    inputEMail.style.display = 'flex';
    inputEMail.style.position = 'absolute';
    inputEMail.style.width = '40vw';
    inputEMail.style.height = '3vh';
    inputEMail.style.top = '55vh';
    inputEMail.style.left = '32vw';
    inputEMail.style.border = 'none';

    inputSenha.style.display = 'flex';
    inputSenha.style.position = 'absolute';
    inputSenha.style.width = '40vw';
    inputSenha.style.height = '3vh';
    inputSenha.style.top = '60vh';
    inputSenha.style.left = '32vw';
    inputSenha.style.border = 'none';
    inputSenha.type = 'password';
    document.body.appendChild(inputNome);
    document.body.appendChild(inputEMail);
    document.body.appendChild(inputSenha);
    var divButtomEntrar = document.createElement('div');
    var buttomEntrar = document.createElement('button');
    divButtomEntrar.style.display = 'flex';
    divButtomEntrar.style.position = 'absolute';
    divButtomEntrar.style.top = '65vh';
    divButtomEntrar.style.left = '39vw';
    buttomEntrar.innerHTML = "Cadastrar";      
    divButtomEntrar.appendChild(buttomEntrar);
    document.body.appendChild(divButtomEntrar);
    buttomEntrar.onclick = cadastrar;
    function cadastrar() {
        let connection_obj = new connection;
        let name = document.getElementById("inputNome").value;
        console.log(name);
        let promiseUsuario = connection_obj.cadastrar_usuario(document.getElementById("inputNome").value, document.getElementById("inputSenha").value, document.getElementById("inputEMail").value);
        console.log(promiseUsuario);
        promiseUsuario.then(resultado => {
            localStorage.setItem('obj_local', JSON.stringify(resultado));
            window.location.href = "/meusPoemas.html";
        }).catch(error =>{
            console.error("Deu um erro: ", error);
            alert("O cadastro não foi efetuado");
        })   
    }
}
window.cadastro = cadastro;
window.login = login;