import Link from 'next/link';
import styles from '../../../styles/dadosBicicleta.module.css';

export default function DadosBicicleta() {

    return (
        <div className={styles.bike}>
            <div className={styles.header}>
                <Link href="/dadosCliente">
                    <button className={styles.backButton}>&#8592; Voltar</button>
                </Link>
            </div>
            <form className={styles.form} >
                <div className={styles.formSection}>
                    <div className={styles.title}>
                        <h2 className={styles.h2}>DADOS DA BICICLETA</h2>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="marca">Marca:</label>
                        <input type="text" id="marca" name="marca" required />

                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="modelo">Modelo:</label>
                        <input type="text" id="modelo" name="modelo"  required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="anoFabricacao">Ano de Fabricação:</label>
                        <input type="text" id="anoFabricacao" name="anoFabricacao" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="numeroSerie">Número de Série:</label>
                        <input type="text" id="numeroSerie" name="numeroSerie"  required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="material">Material:</label>
                        <input type="text" id="material" name="material"  required />
                    </div>
                </div>
                <div className={styles.formSection2}>
                    <div className={styles.formGroup}>
                        <label htmlFor="valorMercado">Valor de Mercado:</label>
                        <input type="text" id="valorMercado" name="valorMercado"  required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="cor">Cor:</label>
                        <input type="text" id="cor" name="cor"  required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="notaFiscal">Anexar Nota Fiscal:</label>
                        <input type="file" id="notaFiscal" name="notaFiscal" />
                    </div>
                </div>
                <Link href="/cameraPage">
                    <button type="submit" className={styles.botaoCadastrar}>Continuar</button>
                </Link>
            </form>
        </div>
    );
}
