"use client";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import styles from '../../../styles/cadastro.module.css'

export default function Cadastro() {
  const navigate = useRouter();

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

    // Remover caracteres não numéricos
    const numericValue = value.replace(/\D/g, '');

    // Formatando o CPF com 11 dígitos
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
          <label htmlFor="nome">NOME</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu Nome" required value={formData.nome} onChange={handleChange} />
          <label htmlFor="email">EMAIL</label>
          <input type="text" id="email" name="email" placeholder="Digite seu Email" required value={formData.email} onChange={handleChange} />
          <label htmlFor="senha">SENHA</label>
          <input type="password" id="senha" name="senha" placeholder="Digite seu Senha" required value={formData.senha} onChange={handleChange} />
          <label htmlFor="telefone">TELEFONE</label>
          <input type="text" id="telefone" name="telefone" placeholder="Digite seu Telefone" required value={formData.telefone} onChange={handleChange} />
          <label htmlFor="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF" required value={formData.cpf} onChange={handleChange} />
          
        </div>
        <div className={styles.column}>
          <label htmlFor="idade">IDADE</label>
          <input type="text" id="idade" name="idade" placeholder="Digite seu Idade" required value={formData.idade} onChange={handleChange} />
          <label htmlFor="cep">CEP</label>
          <input type="text" id="cep" name="cep" placeholder="Digite seu CEP" required value={formData.cep} onChange={handleChange} />
          <label htmlFor="estado">ESTADO</label>
          <input type="text" id="estado" name="estado" placeholder="Digite seu Estado" required value={formData.estado} onChange={handleChange} />
          <label htmlFor="complemento">COMPLEMENTO</label>
          <input type="text" id="complemento" name="complemento" placeholder="Digite seu Complemento" required value={formData.complemento} onChange={handleChange} />
          <label htmlFor="numero">NÚMERO</label>
          <input type="text" id="numero" name="numero" placeholder="Digite seu Número" required value={formData.numero} onChange={handleChange} />
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
