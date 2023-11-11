"use client"
import Link from 'next/link';
import styles from '../../../styles/dadosBicicleta.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DadosBicicleta() {
    const [formValues, setFormValues] = useState({
        marca: '',
        modelo: '',
        anoFabricacao: '',
        numeroSerie: '',
        material: '',
        valorMercado: '',
        cor: '',
        notaFiscal: null,
    });

    const [errorMessages, setErrorMessages] = useState({
        marca: '',
        modelo: '',
        anoFabricacao: '',
        numeroSerie: '',
        cor: '',
        valorMercado: '',
    });

    const router = useRouter();

    const handleAnoFabricacaoChange = (e) => {
        const value = e.target.value;
        setFormValues({ ...formValues, anoFabricacao: value });
        if (/^\d{4}$/.test(value) && parseInt(value, 10) >= 1980 || value === '') {
            setErrorMessages({ ...errorMessages, anoFabricacao: '' });
        } else {
            setErrorMessages({ ...errorMessages, anoFabricacao: 'Ano de fabricação inválido' });
        }
    };

    const handleMarcaChange = (e) => {
        const value = e.target.value;
        setFormValues({ ...formValues, marca: value });

        if (/^[A-Za-z]{3,}$/.test(value) || value === '') {
            setErrorMessages({ ...errorMessages, marca: '' });
        } else {
            setErrorMessages({ ...errorMessages, marca: 'Marca inválida' });
        }
    };

    const handleModeloChange = (e) => {
        const value = e.target.value;
        setFormValues({ ...formValues, modelo: value });

        if (/^[A-Za-z]{3,}$/.test(value) || value === '') {
            setErrorMessages({ ...errorMessages, modelo: '' });
        } else {
            setErrorMessages({ ...errorMessages, modelo: 'Modelo inválido' });
        }
    };

    const handleNumeroSerieChange = (e) => {
        const value = e.target.value;
        setFormValues({ ...formValues, numeroSerie: value });

        if (value.length === 9 || value === '') {
            setErrorMessages({ ...errorMessages, numeroSerie: '' });
        } else {
            setErrorMessages({ ...errorMessages, numeroSerie: 'Número de série inválido' });
        }
    };

    const handleCorChange = (e) => {
        const value = e.target.value;
        setFormValues({ ...formValues, cor: value });

        if (/^[A-Za-z\s]*$/.test(value) || value === '') {
            setErrorMessages({ ...errorMessages, cor: '' });
        } else {
            setErrorMessages({ ...errorMessages, cor: 'Cor inválida' });
        }
    };

    const handleValorMercadoChange = (e) => {
        const value = e.target.value;
        setFormValues({ ...formValues, valorMercado: value });

        if (parseFloat(value) > 2000 || value === '') {
            setErrorMessages({ ...errorMessages, valorMercado: '' });
        } else {
            setErrorMessages({ ...errorMessages, valorMercado: 'Valor de mercado inválido' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const hasErrors = Object.values(errorMessages).some((message) => message !== '');
        if (!hasErrors) {
            console.log('Dados do formulário:', formValues);
            router.push('/cameraPage');
        } else {
            alert('Por favor, corrija os campos com erros antes de continuar.');
        }
    };

    return (
        <div className={styles.bike}>
            <div className={styles.header}>
                <Link href="/dadosCliente">
                    <button className={styles.backButton}>&#8592; Voltar</button>
                </Link>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formSection}>
                    <div className={styles.title}>
                        <h2 className={styles.h2}>DADOS DA BICICLETA</h2>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="marca">Marca:</label>
                        <input type="text" id="marca" name="marca" value={formValues.marca} onChange={handleMarcaChange} required />
                        {errorMessages.marca && <p className={styles.errorText}>{errorMessages.marca}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="modelo">Modelo:</label>
                        <input type="text" id="modelo" name="modelo" value={formValues.modelo} onChange={handleModeloChange} required />
                        {errorMessages.modelo && <p className={styles.errorText}>{errorMessages.modelo}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="anoFabricacao">Ano de Fabricação:</label>
                        <input type="text" id="anoFabricacao" name="anoFabricacao" value={formValues.anoFabricacao} onChange={handleAnoFabricacaoChange} required />
                        {errorMessages.anoFabricacao && <p className={styles.errorText}>{errorMessages.anoFabricacao}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="numeroSerie">Número de Série:</label>
                        <input type="text" id="numeroSerie" name="numeroSerie" value={formValues.numeroSerie} onChange={handleNumeroSerieChange} required />
                        {errorMessages.numeroSerie && <p className={styles.errorText}>{errorMessages.numeroSerie}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="material">Material:</label>
                        <input type="text" id="material" name="material" value={formValues.material} onChange={(e) => setFormValues({ ...formValues, material: e.target.value })} required />
                    </div>
                </div>
                <div className={styles.formSection2}>
                    <div className={styles.formGroup}>
                        <label htmlFor="valorMercado">Valor de Mercado:</label>
                        <input type="text" id="valorMercado" name="valorMercado" value={formValues.valorMercado} onChange={handleValorMercadoChange} required />
                        {errorMessages.valorMercado && <p className={styles.errorText}>{errorMessages.valorMercado}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="cor">Cor:</label>
                        <input type="text" id="cor" name="cor" value={formValues.cor} onChange={handleCorChange} required />
                        {errorMessages.cor && <p className={styles.errorText}>{errorMessages.cor}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="notaFiscal">Anexar Nota Fiscal:</label>
                        <input type="file" id="notaFiscal" name="notaFiscal" onChange={(e) => setFormValues({ ...formValues, notaFiscal: e.target.files[0] })} />
                    </div>
                </div>
                <button type="submit" className={styles.botaoCadastrar}>Continuar</button>
            </form>
        </div>
    );
}
