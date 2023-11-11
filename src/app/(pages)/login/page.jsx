"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from 'next/link';
import styles from '../../../styles/login.module.css'

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

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          const response = await fetch("http://localhost:3000/api/base/base-users", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(usuario)
          });
  
          if (response.ok) {
              const data = await response.json();
              if (data.status) {
                  setMsgStatus("Login realizado com SUCESSO! Aguarde...");
  
                  const tokenUser = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
  

                  sessionStorage.setItem("token-user", tokenUser);
  
                  
                  sessionStorage.setItem("user-obj", JSON.stringify(data.user));
  
                  setTimeout(() => {
                      navigate.push("/homeDois");
                  }, 5000);
  
              } else {
                  
                  setMsgStatus("Nome de usuário ou senha inválidos!");
  
                  
                  setTimeout(() => {
                      setMsgStatus("");
                      setUsuario({
                          "email": "",
                          "senha": ""
                      });
                  }, 5000);
              }
          } else {
              
              console.log("Erro na requisição:", response.statusText);
          }
      } catch (error) {
          console.error("Erro durante a requisição:", error);
      }
  };

  return (

    <div className={styles.telaLogin}>
      <div className={styles.LoginHeader}> 
        <Link href='/homeDois'>
          <button className={styles.loginButton}>&#8592; Voltar</button>

        </Link>
      </div>
        
        <h2 className={classeMsg}>{msgStatus}</h2>


        <div className={styles.formLogin}>
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
                <h1 className={styles.loginHeader}>Ainda não possui conta? <a href="/cadastro" className={styles.cadastro}>Clique aqui para cadastrar-se</a></h1>

            </form>
        </div>
    </div>
  )
}