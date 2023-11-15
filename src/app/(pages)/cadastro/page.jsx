"use client"
import Link from 'next/link';
import styles from '../../../styles/cadastro.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Cadastro() {
  const [formData, setFormData] = useState({
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

  const navigate = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const requestBody = {
        nome: formData.nome,
        email: formData.email,
        senha: formData.senha,
        telefone: formData.telefone,
        cpf: formData.cpf,
        idade: formData.idade,
        cep: formData.cep,
        endereco: formData.endereco,
        estado: formData.estado,
        complemento: formData.complemento,
        numero: formData.numero,
      };

      const apiResponse = await fetch('http://localhost:8080/ProjetoCycleGuard/rest/Cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (apiResponse.ok) {
        console.log('Requisição enviada com sucesso!');
        navigate.push('/homeDois');
      } else {
        console.error('Erro na chamada da API Java:', apiResponse.statusText);
        console.log('Corpo da resposta:', await apiResponse.text());

        try {
          const errorDetails = await apiResponse.json();
          console.error('Detalhes do erro:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro:', jsonError.message);
        }
      }
    } catch (error) {
      console.error('Erro ao conectar com a API Java:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const numericValue = value.replace(/\D/g, '');

    const formattedCPF = numericValue.padStart(11, '0');

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'cpf' ? parseInt(formattedCPF, 10) : value,
    }));
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
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
            <label htmlFor="email">EMAIL:</label>
            <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required />
            <label htmlFor="senha">SENHA:</label>
            <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} required />
            <label htmlFor="telefone">TELEFONE:</label>
            <input type="text" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required />
            <label htmlFor="cpf">CPF:</label>
            <input mask="999.999.999-99" type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} required />
          </div>
          <div className={styles.column}>
            <label htmlFor="idade">IDADE:</label>
            <input type="text" id="idade" name="idade" value={formData.idade} onChange={handleChange} required />
           <label htmlFor="cep">CEP:</label>
            <input mask="99999-999" type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange} required />
             <label htmlFor="estado">ESTADO:</label>
            <input type="text" id="estado" name="estado" value={formData.estado} onChange={handleChange} required />
            <div className={styles.column}>
            <label htmlFor="endereco">ENDEREÇO</label>
              <input type="text" id="endereco" name="endereco" required value={formData.endereco} onChange={handleChange} />
            </div>
            <label htmlFor="complemento">COMPLEMENTO:</label>
            <input type="text" id="complemento" name="complemento" value={formData.complemento} onChange={handleChange} />
            <label htmlFor="numero">NÚMERO:</label>
            <input type="text" id="numero" name="numero" value={formData.numero} onChange={handleChange} />
          </div>
        </div>
        <div className={styles.cadastroBotao}>
          <button type="submit" disabled={loading} className={styles.cadastro}>
          {loading ? 'Aguarde...' : 'CADASTRAR'}
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}