import Link from 'next/link';
import styles from '../../../styles/dadosCliente.module.css';
export default function DadosCliente() {
  return (
    <div className={styles.clienteForm}>
    <div className={styles.clienteHeader}>

        <Link href='/homeDois'>
        <button className={styles.clienteButton}>&#8592; Voltar</button>
        </Link>
    </div>
        <form className={styles.clienteContainer}>
            <div className={styles.clienteTitle}>
                <h2>PARA CONTINUAR PRECISAMOS CONFIRMAR ALGUNS DADOS, OK?</h2>
            </div>
            <div className={styles.clienteGroup}>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required />
            </div>
            <div className={styles.clienteGroup}>
                <label htmlFor="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" required />
            </div>
            <div className={styles.clienteGroup}>
                <label htmlFor="idade">Idade:</label>
                <input type="text" id="idade" name="idade" required />
            </div>
            <div className={styles.clienteGroup}>
                <label htmlFor="telefone">Telefone:</label>
                <input type="text" id="telefone" name="telefone" required />
            </div>
            <div className={styles.clienteGroup}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" required />
            </div>
            <Link href='/dadosBicicleta'>
            <button type="submit" className={styles.clienteContinue}>Continuar</button>
            </Link>
        </form>
    </div>
  )
}
