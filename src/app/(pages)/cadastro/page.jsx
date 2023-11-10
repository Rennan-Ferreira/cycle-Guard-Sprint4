"use client";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import React, { useState } from 'react';

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
    <div className="cliente-data-form">
      <div className="cliente-data-header">
        <Link href="/home">
          <button className="cliente-back-button">&#8592; Voltar</button>
        </Link>
      </div>

      <div className="cliente-form-container">
        <form onSubmit={handleSubmit} className="forms" action="">
          <div className="cliente-title">
            <h2>INSIRA OS SEUS DADOS PARA REALIZAR O CADASTRO</h2>
          </div>
          <div className="cliente-form-group">
            <label htmlFor="nome">
              NOME
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                required
                value={formData.nome}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="cliente-form-group">
            <label htmlFor="email">
              EMAIL
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="cliente-form-group">
            <label htmlFor="senha">
              SENHA
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                required
                value={formData.senha}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="cliente-form-group">
            <label htmlFor="telefone">
              TELEFONE
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="Telefone"
                required
                value={formData.telefone}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="cliente-form-group">
            <label htmlFor="cpf">
              CPF
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="CPF"
                required
                value={formData.cpf}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="cliente-form-group">
            <label htmlFor="idade">
              IDADE
              <input
                type="text"
                id="idade"
                name="idade"
                placeholder="Idade"
                required
                value={formData.idade}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="cliente-form-group">
            <label htmlFor="cep">
              CEP
              <input
                type="text"
                id="cep"
                name="cep"
                placeholder="CEP"
                required
                value={formData.cep}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="cliente-form-group">
            <label htmlFor="endereco">
              ENDEREÇO
              <input
                type="text"
                id="endereco"
                name="endereco"
                placeholder="Endereço"
                required
                value={formData.endereco}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="cliente-form-group">
            <label htmlFor="estado">
              ESTADO
              <input
                type="text"
                id="estado"
                name="estado"
                placeholder="Estado"
                required
                value={formData.estado}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="cliente-form-group">
            <label htmlFor="complemento">
              COMPLEMENTO
              <input
                type="text"
                id="complemento"
                name="complemento"
                placeholder="Complemento"
                required
                value={formData.complemento}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="cliente-form-group">
            <label htmlFor="numero">
              NÚMERO
              <input
                type="text"
                id="numero"
                name="numero"
                placeholder="Número"
                required
                value={formData.numero}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="div-botao-cadastro">
            <button type="submit" disabled={loading} className="cliente-cadastro">
              {loading ? 'Aguarde...' : 'CADASTRAR'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
