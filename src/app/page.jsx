import Cabecalho from "@/components/cabecalho/Cabecalho";
import Rodape from "@/components/rodape/Rodape";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Home() {
    const isHome1 = true;
    return (
        <>
         <Cabecalho isHome1={isHome1} />
            <section>
                <h3 id="seguros" className={styles.tituloSection}>SEGUROS PARA SUA BICICLETA</h3>

                <div className={styles.containerSeguros}>
                    <div className={styles.imgSeguros}>
                    <Link href="/login"><Image src="/img/img-pedal-essencial.png" alt="seguro essencial"  width={500} height={272} /></Link>
                    <Link href="/login"><Image src="/img/img-pedal-leve.png" alt="seguro leve"  width={500} height={272} /></Link>
                    <Link href="/login"><Image src="/img/img-pedal-elite.png" alt="seguro elite"  width={500} height={272} /></Link>
                    </div>
                    <div className={styles.titulosSeguros}>
                        <Link href="/login"><div className={styles.pedalEssencial}>
                            <h5>PEDAL ESSENCIAL</h5>
                            <p>SAIBA MAIS</p>
                        </div></Link>
                        <Link href="/login"><div className={styles.pedalLeve}>
                            <h5>PEDAL LEVE</h5>
                            <p>SAIBA MAIS</p>
                        </div></Link>
                        <Link href="/login"><div className={styles.pedalElite}>
                            <h5>PEDAL ELITE</h5>
                            <p>SAIBA MAIS</p>
                        </div></Link>
                    </div>
                </div>

                <div id="sobre-nos" className={styles.sobreHome}>
                    <h1>SOBRE NÓS</h1>
                    <p>NÓS SOMOS UMA EMPRESA DEDICADA A SIMPLIFICAR A CONTRATAÇÃO DE SEGURO DE BICICLETA, E ESTAMOS EM PARCERIA COM A PORTO SEGURO. OFERECEMOS UM SISTEMA ÁGIL E EFICIENTE PARA GARANTIR A SEGURANÇA DO MEIO DE TRANSPORTE. NOSSO OBJETIVO É TORNAR O PROCESSO DE CONTRATAÇÃO MAIS ACESSÍVEL E TRANSPARENTE, COM UM ATENDIMENTO PERSONALIZADO. TRABALHAMOS COM OS MELHORES PROFISSIONAIS DO MERCADO PARA OFERECER SOLUÇÕES PERSONALIZADAS. COMBINAMOS INOVAÇÃO E EXCELÊNCIA EM SERVIÇOS PARA PROTEGER SEU PATRIMÔNIO E PROPORCIONAR TRANQUILIDADE AO PEDALAR. CONTE CONOSCO PARA VIVER A LIBERDADE DE PEDALAR COM SEGURANÇA.</p>
                </div>
            </section>
            <Rodape />
        </>
    )
}