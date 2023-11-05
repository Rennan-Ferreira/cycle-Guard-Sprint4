import React from 'react'

export default function DadosBicicleta() {
  return (
    <div className="bike-data-form">
    <div className="header">
        <Link href='/dadosCliente'>
        <button className="back-button">&#8592; Voltar</button>
        </Link>
    </div>
    <form>
        <div className="form-section">
            <div className='title'>
                <h2>DADOS DA BICICLETA</h2>
            </div>
            <div className="form-group">
                <label htmlFor="marca">Marca:</label>
                <input type="text" id="marca" name="marca" required />
            </div>
            <div className="form-group">
                <label htmlFor="modelo">Modelo:</label>
                <input type="text" id="modelo" name="modelo" required />
            </div>
            <div className="form-group">
                <label htmlFor="anoFabricacao">Ano de Fabricação:</label>
                <input type="text" id="anoFabricacao" name="anoFabricacao" required />
            </div>
            <div className="form-group">
                <label htmlFor="numeroSerie">Número de Série:</label>
                <input type="text" id="numeroSerie" name="numeroSerie" required />
            </div>
            <div className="form-group">
                <label htmlFor="material">Material:</label>
                <input type="text" id="material" name="material" required />
            </div>
        </div>
        <div className="form-section">
            <div className="form-group">
                <label htmlFor="valorMercado">Valor de Mercado:</label>
                <input type="text" id="valorMercado" name="valorMercado" required />
            </div>
            <div className="form-group">
                <label htmlFor="cor">Cor:</label>
                <input type="text" id="cor" name="cor" required />
            </div>
            <div className="form-group">
                <label htmlFor="notaFiscal">Anexar Nota Fiscal:</label>
                <input type="file" id="notaFiscal" name="notaFiscal" />
            </div>
        </div>
        <Link to='/cameraPage'>
        <button type="submit">Continuar</button>
        </Link>
    </form>
</div>
  )
}
