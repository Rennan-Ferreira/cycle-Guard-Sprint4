"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from 'next/link';

export default function Login() {
    
    const navigate = useRouter();

    const [usuario, setUsuario] = useState({
        "info": "login",
        "email" : "",
        "senha" : ""
    })

    const [msgStatus, setMsgStatus] = useState("");
    const [classeMsg, setClasseMsg] = useState("");

    useEffect(() => {
        if(msgStatus == "Login realizado com SUCESSO! Aguarde..."){
            setClasseMsg("login-sucesso");
        }else if(msgStatus == "Nome de usuário ou senha inválidos!"){
            setClasseMsg("login-erro");
        }else{
            setClasseMsg("login-none");
        }

    }, [msgStatus])
          
    const handleChange = async (e)=>{
        const {name, value} = e.target;
    setUsuario({...usuario,[name]:value});
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/base/base-users",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:  JSON.stringify(usuario)
            });

            if(response.ok){
                const data = await response.json();
                if(data.status){
                   setMsgStatus("Login realizado com SUCESSO! Aguarde...");

                    const tokenUser = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);

                   sessionStorage.setItem("token-user",tokenUser);

                    sessionStorage.setItem("user-obj",JSON.stringify(data.user));

                   setTimeout(()=>{
                    navigate.push("/homeDois");
                   },5000);

                }else{
                    setMsgStatus("Nome de usuário ou senha inválidos!");
                    
                   setTimeout(()=>{
                    setMsgStatus("");
                    setUsuario({
                        "email":"",
                        "senha":""
                    });
                   },5000);
                }
            }
            
        } catch (error) {
            console.log(error);
        }
        
    };
    

  return (
    <div className="tela-login">
      <div className="cliente-data-header"> 
        <Link href='/home'>
          <button className="cliente-back-button">&#8592; Voltar</button>
        </Link>
      </div>
        <h1 className="header-cadastro">AINDA NÃO POSSUI CONTA?<br></br> <a href="/cadastro" className="cadastro">Clique aqui para cadastrar-se</a></h1>

        <h2 className={classeMsg}>{msgStatus}</h2>


        <div className="form-login">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>LOGIN</legend>
                    <div>
                        <label htmlFor="idEmail">Email</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite seu Email." value={usuario.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite sua Senha." value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>LOGIN</button> 
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}