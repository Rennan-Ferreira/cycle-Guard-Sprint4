"use client"
import Link from 'next/link';
import styles from '../../../styles/dadosCliente.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ReactInputMask from 'react-input-mask';

export default function DadosCliente() {
    const [formValues, setFormValues] = useState({
        nome: '',
        cpf: '',
        idade: '',
        telefone: '',
        email: '',
    });

    const [errorMessages, setErrorMessages] = useState({
        nome: '',
        cpf: '',
        idade: '',
        telefone: '',
        email: '',
    });

    const router = useRouter();

    const handleNomeChange = (e) => {
        const value = e.target.value;
        setFormValues({ ...formValues, nome: value });

        if (/^[A-Za-z]{3,}$/.test(value) || value === '') {
            setErrorMessages({ ...errorMessages, nome: '' });
        } else {
            setErrorMessages({ ...errorMessages, nome: 'Nome inválido' });
        }
    };

    const handleCpfChange = (e) => {
        const value = e.target.value;
        setFormValues({ ...formValues, cpf: value });

        if (/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value) || value === '') {
            setErrorMessages({ ...errorMessages, cpf: '' });
        } else {
            setErrorMessages({ ...errorMessages, cpf: 'CPF inválido' });
        }
    };

    const handleIdadeChange = (e) => {
        const value = e.target.value;
        setFormValues({ ...formValues, idade: value });

        if (/^\d+$/.test(value) && parseInt(value, 10) >= 18 || value === '') {
            setErrorMessages({ ...errorMessages, idade: '' });
        } else {
            setErrorMessages({ ...errorMessages, idade: 'Idade inválida' });
        }
    };

    const handleTelefoneChange = (e) => {
        const value = e.target.value;
        setFormValues({ ...formValues, telefone: value });

        if (/^\(\d{2}\) \d{5}-\d{4}$/.test(value) || value === '') {
            setErrorMessages({ ...errorMessages, telefone: '' });
        } else {
            setErrorMessages({ ...errorMessages, telefone: 'Telefone inválido' });
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setFormValues({ ...formValues, email: value });
        if (value.includes('@') && value.includes('.com') || value === '') {
            setErrorMessages({ ...errorMessages, email: '' });
        } else {
            setErrorMessages({ ...errorMessages, email: 'Email inválido' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const hasErrors = Object.values(errorMessages).some((message) => message !== '');
        if (!hasErrors) {
            console.log('Dados do formulário:', formValues);
            router.push('/dadosBicicleta');
        } else {
            alert('Por favor, corrija os campos com erros antes de continuar.');
        }
    };

    return (
        <div className={styles.clienteForm}>
            <div className={styles.clienteHeader}>
                <Link href='/homeDois'>
                    <button className={styles.clienteButton}>&#8592; Voltar</button>
                </Link>
            </div>
            <form className={styles.clienteContainer} onSubmit={handleSubmit}>
                <div className={styles.clienteTitle}>
                    <h2>PARA CONTINUAR PRECISAMOS CONFIRMAR ALGUNS DADOS, OK?</h2>
                </div>
                <div className={styles.clienteGroup}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" placeholder='Digite seu nome' value={formValues.nome} onChange={handleNomeChange} required />
                    {errorMessages.nome && <p className={styles.errorText}>{errorMessages.nome}</p>}
                </div>
                <div className={styles.clienteGroup}>
                    <label htmlFor="cpf">CPF:</label>
                    <ReactInputMask mask="999.999.999-99" type="text" id="cpf" name="cpf" placeholder='Digite seu CPF' value={formValues.cpf} onChange={handleCpfChange} required />
                    {errorMessages.cpf && <p className={styles.errorText}>{errorMessages.cpf}</p>}
                </div>
                <div className={styles.clienteGroup}>
                    <label htmlFor="idade">Idade:</label>
                    <input type="text" id="idade" name="idade" placeholder='Digite sua idade' value={formValues.idade} onChange={handleIdadeChange} required />
                    {errorMessages.idade && <p className={styles.errorText}>{errorMessages.idade}</p>}
                </div>
                <div className={styles.clienteGroup}>
                    <label htmlFor="telefone">Telefone:</label>
                    <ReactInputMask mask="(99) 99999-9999" type="text" id="telefone" name="telefone" placeholder='Digite seu telefone' value={formValues.telefone} onChange={handleTelefoneChange} required />
                    {errorMessages.telefone && <p className={styles.errorText}>{errorMessages.telefone}</p>}
                </div>
                <div className={styles.clienteGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder='Digite seu email' value={formValues.email} onChange={handleEmailChange} required />
                    {errorMessages.email && <p className={styles.errorText}>{errorMessages.email}</p>}
                </div>
                <button type="submit" className={styles.clienteContinue}>Continuar</button>
            </form>
        </div>
    );
}
