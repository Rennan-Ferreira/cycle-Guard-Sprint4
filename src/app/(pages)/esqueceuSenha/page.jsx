import Link from 'next/link'
import styles from '../../../styles/login.module.css'
export default function EsqueceuSenha() {
    return (

        <div className={styles.telaLogin}>
            <div className={styles.LoginHeader}>
                <Link href='/login'>
                    <button className={styles.loginButton}>&#8592; Voltar</button>

                </Link>
            </div>
            <div className={styles.formLogin}>
                <form>
                    <fieldset>
                        <legend>Esqueceu a senha?</legend>
                        <div>
                            <label htmlFor="idEmail">Email</label>
                            <input type="email" name="email" id="idEmail" placeholder="Digite seu Email." />
                        </div>
                        <div>
                            <Link href='/login'>
                                <button>Enviar</button>
                            </Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
