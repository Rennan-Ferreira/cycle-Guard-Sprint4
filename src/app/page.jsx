import Image from "next/image";

export default function Home() {
  return (
    <>
                  <section>
                <h3 className="titulo-section-home">SEGUROS PARA SUA BICICLETA</h3>

                <div className="container-seguros-home">
                    <div className="img-seguros-home">
                        <img src="/img/img-pedal-essencial.png" alt="seguro essencial"/>
                        <img src="/img/img-pedal-leve.png" alt="seguro leve" />
                        <img src="/img/img-pedal-elite.png" alt="seguro elite" />
                    </div>
                    <div className="titulos-seguros-home">
                        <div className="pedal-essencial-home">
                            <h5>PEDAL ESSENCIAL</h5>
                            <p>SAIBA MAIS</p>
                        </div>
                        <div className="pedal-leve-home">
                            <h5>PEDAL LEVE</h5>
                            <p>SAIBA MAIS</p>
                        </div>
                        <div className="pedal-elite-home">
                            <h5>PEDAL ELITE</h5>
                            <p>SAIBA MAIS</p>
                        </div>
                    </div>
                </div>

                <div className="sobre-home">
                    <h1>SOBRE NÓS</h1>
                    <p>NÓS SOMOS UMA EMPRESA DEDICADA A SIMPLIFICAR A CONTRATAÇÃO DE SEGURO DE BICICLETA, E ESTAMOS EM PARCERIA COM A PORTO SEGURO. OFERECEMOS UM SISTEMA ÁGIL E EFICIENTE PARA GARANTIR A SEGURANÇA DO MEIO DE TRANSPORTE. NOSSO OBJETIVO É TORNAR O PROCESSO DE CONTRATAÇÃO MAIS ACESSÍVEL E TRANSPARENTE, COM UM ATENDIMENTO PERSONALIZADO. TRABALHAMOS COM OS MELHORES PROFISSIONAIS DO MERCADO PARA OFERECER SOLUÇÕES PERSONALIZADAS. COMBINAMOS INOVAÇÃO E EXCELÊNCIA EM SERVIÇOS PARA PROTEGER SEU PATRIMÔNIO E PROPORCIONAR TRANQUILIDADE AO PEDALAR. CONTE CONOSCO PARA VIVER A LIBERDADE DE PEDALAR COM SEGURANÇA.</p>
                </div>
            </section>
    </>
    )
}