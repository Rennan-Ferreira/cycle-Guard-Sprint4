"use client"
import Link from 'next/link';
import styles from '../../../styles/cadastro.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ReactInputMask from 'react-input-mask';

export default function Cadastro() {
  const [formValues, setFormValues] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
    cpf: '',
    idade: '',
    cep: '',
    endereco: '',
    estado: '',
    complemento: '',
    numero: '',
  });

  const [errorMessages, setErrorMessages] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
    cpf: '',
    idade: '',
    cep: '',
    endereco: '',
    estado: '',
    complemento: '',
    numero: '',
  });

  const router = useRouter();

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevData) => ({ ...prevData, [name]: value }));
    setErrorMessages({ ...errorMessages, [name]: '' });


    if (name === 'nome') {
      if (value.length < 3 || /\d/.test(value)) {
        setErrorMessages({ ...errorMessages, [name]: 'Nome inválido' });
      }
    }

    if (name === 'email') {
      if (!value.includes('@') || !value.includes('.com')) {
        setErrorMessages({ ...errorMessages, [name]: 'Email inválido. Deve conter "@" e ".com"' });
      }
    }

    if (name === 'senha') {
      if (value.length < 8) {
        setErrorMessages({ ...errorMessages, [name]: 'Senha deve ter pelo menos 8 caracteres' });
      }
    }
  

    if (name === 'telefone') {
      if (!value.match(/^\(\d{2}\)\s\d{5}-\d{4}$/)) {
        setErrorMessages({ ...errorMessages, [name]: 'Telefone inválido. Use o formato (XX) XXXXX-XXXX' });
      }
    }

    if (name === 'cpf') {
      if (!value.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
        setErrorMessages({ ...errorMessages, [name]: 'CPF inválido. Use o formato XXX.XXX.XXX-XX' });
      }
    }

    if (name === 'endereco') {
      if (value.length < 3) {
        setErrorMessages({ ...errorMessages, [name]: 'Endereço deve ter pelo menos 3 caracteres' });
      }
    }

    if (name === 'estado') {
      if (!value.match(/^[A-Za-z]{2}$/)) {
        setErrorMessages({ ...errorMessages, [name]: 'Estado inválido. Use duas letras' });
      }
    }

    if (name === 'numero') {
      if (!value.match(/^\d{0,5}$/)) {
        setErrorMessages({ ...errorMessages, [name]: 'Número inválido. No máximo 5 dígitos' });
      }
    }
 
  if (name === 'cep') {
    if (!value.match(/^\d{5}-\d{3}$/)) {
      setErrorMessages({ ...errorMessages, [name]: 'CEP inválido. Use o formato XXXXX-XXX' });
    }
  }
  if (name === 'idade') {
    if (!/^\d+$/.test(value) || parseInt(value, 10) < 18) {
      setErrorMessages({ ...errorMessages, [name]: 'Idade inválida. Restrição: maior de idade' });
    } else {
      setErrorMessages({ ...errorMessages, [name]: '' }); 
    }
  }
 
   
  };

  return (
    <div className={styles.cadastroForm}>
      <div className={styles.cadastroHeader}>
        <Link href="/login">
          <button className={styles.cadastroBack}>&#8592; Voltar</button>
        </Link>
      </div>
      <div className={styles.cadastroContainer}>
      <form onSubmit={handleSubmit} className={styles.forms} action="">
        <div className={styles.cadastroTitle}>
          <h2 className={styles.title}>INSIRA OS SEUS DADOS PARA REALIZAR O CADASTRO</h2>
        </div>
        <div className={styles.cadastroGroup}>
          <div className={styles.column}>
            <label htmlFor="nome">NOME:</label>
            <input type="text" id="nome" name="nome" value={formValues.nome} onChange={handleChange} required />
            {errorMessages.nome && <p className={styles.errorText}>{errorMessages.nome}</p>}
            <label htmlFor="email">EMAIL:</label>
            <input type="text" id="email" name="email" value={formValues.email} onChange={handleChange} required />
            {errorMessages.email && <p className={styles.errorText}>{errorMessages.email}</p>}
            <label htmlFor="senha">SENHA:</label>
            <input type="password" id="senha" name="senha" value={formValues.senha} onChange={handleChange} required />
            {errorMessages.senha && <p className={styles.errorText}>{errorMessages.senha}</p>}
            <label htmlFor="telefone">TELEFONE:</label>
            <ReactInputMask mask="(99) 99999-9999" type="text" id="telefone" name="telefone" value={formValues.telefone} onChange={handleChange} required />
            {errorMessages.telefone && <p className={styles.errorText}>{errorMessages.telefone}</p>}
            <label htmlFor="cpf">CPF:</label>
            <ReactInputMask mask="999.999.999-99" type="text" id="cpf" name="cpf" value={formValues.cpf} onChange={handleChange} required />
            {errorMessages.cpf && <p className={styles.errorText}>{errorMessages.cpf}</p>}
          </div>
          <div className={styles.column}>
            <label htmlFor="idade">IDADE:</label>
            <input type="text" id="idade" name="idade" value={formValues.idade} onChange={handleChange} required />
            {errorMessages.idade && <p className={styles.errorText}>{errorMessages.idade}</p>}
           <label htmlFor="cep">CEP:</label>
            <ReactInputMask mask="99999-999" type="text" id="cep" name="cep" value={formValues.cep} onChange={handleChange} required />
            {errorMessages.cep && <p className={styles.errorText}>{errorMessages.cep}</p>}
             <label htmlFor="estado">ESTADO:</label>
            <input type="text" id="estado" name="estado" value={formValues.estado} onChange={handleChange} required />
            {errorMessages.estado && <p className={styles.errorText}>{errorMessages.estado}</p>}
            <label htmlFor="complemento">COMPLEMENTO:</label>
            <input type="text" id="complemento" name="complemento" value={formValues.complemento} onChange={handleChange} />
            <label htmlFor="numero">NÚMERO:</label>
            <input type="text" id="numero" name="numero" value={formValues.numero} onChange={handleChange} />
            {errorMessages.numero && <p className={styles.errorText}>{errorMessages.numero}</p>}
          </div>
        </div>
        <div className={styles.cadastroBotao}>
          <button type="submit" className={styles.cadastro}>
            Cadastrar
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}