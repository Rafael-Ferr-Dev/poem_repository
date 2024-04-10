export class connection{
    constructor(){
        this.usuario;
        this.senha;
        this.email;
        this.poema;
        this.title;
    }
    cadastrar_usuario(usuario, senha, email){
        return new Promise((resolve, reject) => {
            fetch("https://poem-api.onrender.com/usuarios",{
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }, 
                method: "POST",
                body: JSON.stringify({
                    nome: usuario, 
                    senha: senha,
                    email: email
                })
            })
            .then(response => response.json())
            .then(data => {
                resolve(data); 
            })
            .catch(error => {
                reject(error); 
            });
        });
        
    }
    retornar_usuario(usuario, senha){
        return new Promise((resolve, reject)=>{
            fetch("https://poem-api.onrender.com/usuarios/"+usuario+"/"+senha,{
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        method: "GET"
                    })
            .then(response => response.json())
            .then(data => {
                resolve(data); 
            })
            .catch(error => {
                reject(error); 
            });
        })
       
    }
    atualizar_usuario(usuario,senha,email){
        fetch("https://poem-api.onrender.com/usuarios/"+usuario+"/"+senha,{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }, 
            method: "PUT",
            body: JSON.stringify({
                nome: usuario, 
                senha: senha,
                email: email
            })
        })
        .then(response => response.json())
        .then(data => {return data})
    }
    delete_usuario(){
        fetch("https://poem-api.onrender.com/usuarios/"+usuario+"/"+senha,{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "DELETE"
        })
    }
    publicar_poem(poema, title, usuario){
        return new Promise((resolve, reject) => {
            fetch("https://poem-api.onrender.com/poems",{
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        }, 
                        method: "POST",
                        body: JSON.stringify({
                            poem: poema, 
                            title: title,
                            author: usuario
                        })
                    })
                .then(response => response.json())
                .then(data => {
                    resolve(data); 
                })
                .catch(error => {
                    reject(error); 
                });
        });
        
    }
    retornar_poema(usuario, title){
        fetch("https://poem-api.onrender.com/poems/"+usuario+"/"+title,{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {return data})        
    }
    retornar_poemas_byUsuario(usuario){
        return new Promise((resolve, reject)=>{
            fetch("https://poem-api.onrender.com/poems/"+usuario,{
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                resolve(data); 
            })
            .catch(error => {
                reject(error);
            });    
        });
   
    }
    retornar_AllPoemas(){
        return new Promise((resolve, reject) => {
                fetch("https://poem-api.onrender.com/poems", {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    method: "GET"
                })
                .then(response => response.json())
                .then(data => {
                    resolve(data); 
                })
                .catch(error => {
                    reject(error);
                });
            });
        
    }
    atualizar_poema(poema, usuario, title){
        fetch("https://poem-api.onrender.com/poems/"+usuario+"/"+title,{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }, 
            method: "POST",
            body: JSON.stringify({
                poem: poema, 
                title: title,
                author: usuario
            })
        })
        .then(response => response.json())
        .then(data => {return data})
    }
    delete_poema(){
        fetch("https://poem-api.onrender.com/poems/"+usuario+"/"+title,{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "GET"
        })
    }
    retornar_comentarios_byPoema(title){
        return new Promise((resolve, reject)=>{
            fetch("https://poem-api.onrender.com/coments/"+title,{
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                resolve(data); 
            })
            .catch(error => {
                reject(error);
            });    
        });
   
    }
    cadastrar_comentario(comentario, title, autor){
        return new Promise((resolve, reject) => {
            fetch("https://poem-api.onrender.com/coments",{
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }, 
                method: "POST",
                body: JSON.stringify({
                    comentario: comentario, 
                    title: title,
                    autor: autor
                })
            })
            .then(response => response.json())
            .then(data => {
                resolve(data); 
            })
            .catch(error => {
                reject(error); 
            });
        });
        
    }
}
