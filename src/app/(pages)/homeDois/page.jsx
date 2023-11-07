import Image from 'next/image';
import Link from "next/link";

export default function HomeDois() {
  return (
        <section>
            <h3 className="titulo-section-home">SEGUROS PARA SUA BICICLETA</h3>

            <div className="container-seguros-home">
                <div className="img-seguros-home">
                <Image src="/img/img-pedal-essencial.png" width={272} height={448} alt="seguro essencial"/>
                <Image src="/img/img-pedal-leve.png" width={272} height={448} alt="seguro leve" />
                <Image src="/img/img-pedal-elite.png" width={272} height={448} alt="seguro elite" />
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
            <div  className="botao-vistoria-home">
                <Link href="/dadosCliente"><button>
                    REALIZAR VISTORIA ONLINE
                </button></Link> 
            </div>

            <div className="sobre-home">
                <h1>PORTO SEGURO</h1>
                <p> A Porto Seguro é uma empresa renomada no mercado de seguros, reconhecida pela sua qualidade e confiabilidade. Com mais de 70 anos de atuação, a empresa possui uma vasta gama de produtos que atendem às necessidades de seus clientes, desde seguros para automóveis e residências até seguros empresariais e de vida.
                    A empresa se destaca pela sua capacidade de inovação, sempre buscando oferecer soluções diferenciadas e personalizadas para cada cliente. Além disso, a Porto Seguro conta com uma ampla rede de atendimento, que garante um atendimento rápido e eficiente em caso de sinistros.
                    Ao contratar um seguro da Porto Seguro, o cliente pode ter a tranquilidade de que estará protegido em caso de imprevistos, tendo a certeza de que poderá contar com uma empresa sólida e confiável para ajudá-lo a superar qualquer adversidade.
                    Um dos produtos oferecidos pela Porto Seguro é o seguro de bicicleta, uma opção cada vez mais procurada por ciclistas que querem garantir a proteção do seu meio de transporte. Com esse seguro, é possível ficar protegido em caso de roubo ou furto da bicicleta, além de contar com assistência 24 horas em caso de imprevistos durante o pedal. Esse seguro é uma excelente opção para quem valoriza a segurança e a tranquilidade na hora de pedalar, garantindo a proteção do patrimônio e a assistência necessária em caso de imprevistos. Com a Porto Seguro, o ciclista pode pedalar com a certeza de que estará protegido em qualquer situação</p>
            </div>
        </section>
  )
}
