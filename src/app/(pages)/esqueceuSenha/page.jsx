"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from 'next/link';
import styles from '../../../styles/login.module.css';


export default function EsqueceuSenha() {
    const router = useRouter(); // Usar 'useRouter' para redirecionamento
    const [email, setEmail] = useState("");
    const [msgStatus, setMsgStatus] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setMsgStatus("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes('@') || !email.includes('.com')) {
            setMsgStatus("Email inválido. Deve conter '@' e '.com'.");
        } else {
            router.push('/login');
        }
    };

    return (
        <div className={styles.telaLogin}>
            <div className={styles.LoginHeader}>
                <Link href='/login'>
                    <button className={styles.loginButton}>&#8592; Voltar</button>
                </Link>
            </div>
            <div className={styles.formLogin}>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Esqueceu a senha?</legend>
                        <div>
                            <label htmlFor="idEmail">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="idEmail"
                                placeholder="Digite seu Email."
                                value={email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <button>Enviar</button>
                        </div>
                    </fieldset>
                </form>
                {msgStatus && <p className={styles.errorMsg}>{msgStatus}</p>}
            </div>
        </div>
    );
}
