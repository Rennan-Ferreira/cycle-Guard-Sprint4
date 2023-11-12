import Cabecalho from '@/components/cabecalho/Cabecalho';
import Rodape from '@/components/rodape/Rodape';
import Image from 'next/image';
import Link from "next/link";
import styles from '../../../styles/Home.module.css'
export default function HomeDois() {
    const isVistoria = true;
  return (
<>
    <Cabecalho isVistoria={isVistoria}/>
    <section>
        <h3 id="seguros" className={styles.tituloSection}>SEGUROS PARA SUA BICICLETA</h3>

        <div className={styles.containerSeguros}>
            <div className={styles.imgSeguros}>
            <Link href="/login"><Image src="/img/img-pedal-essencial.png" alt="seguro essencial" width={500} height={272} /></Link>
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
        <div  className={styles.botaoVistoria}>
            <Link href="/dadosCliente"><button>REALIZAR VISTORIA ONLINE</button></Link> 
        </div>

        <div className={styles.sobreHome} id="porto-seguro">
            <h1>PORTO SEGURO</h1>
            <p>A Porto Seguro é uma empresa renomada no mercado de seguros, reconhecida pela sua qualidade e confiabilidade. Com mais de 70 anos de atuação, a empresa possui uma vasta gama de produtos que atendem às necessidades de seus clientes, desde seguros para automóveis e residências até seguros empresariais e de vida.
A empresa se destaca pela sua capacidade de inovação, sempre buscando oferecer soluções diferenciadas e personalizadas para cada cliente. Além disso, a Porto Seguro conta com uma ampla rede de atendimento, que garante um atendimento rápido e eficiente em caso de sinistros.
Ao contratar um seguro da Porto Seguro, o cliente pode ter a tranquilidade de que estará protegido em caso de imprevistos, tendo a certeza de que poderá contar com uma empresa sólida e confiável para ajudá-lo a superar qualquer adversidade.
Um dos produtos oferecidos pela Porto Seguro é o seguro de bicicleta, uma opção cada vez mais procurada por ciclistas que querem garantir a proteção do seu meio de transporte. Com esse seguro, é possível ficar protegido em caso de roubo ou furto da bicicleta, além de contar com assistência 24 horas em caso de imprevistos durante o pedal. Esse seguro é uma excelente opção para quem valoriza a segurança e a tranquilidade na hora de pedalar, garantindo a proteção do patrimônio e a assistência necessária em caso de imprevistos. Com a Porto Seguro, o ciclista pode pedalar com a certeza de que estará protegido em qualquer situação</p>
        </div>
    </section>
    <Rodape/>
    </>
  )
}
