import styles from '../../styles/Rodape.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Rodape() {
    return (
        <footer>
            <div className="footer-container">
                <div className="column">
                    <h4>Cycle Guard</h4>
                    <p>Criada em 2023</p>
                    <p>São Paulo - Brasil</p>
                </div>
                <div className="column">
                    <h4>Redes Sociais</h4>
                    <ul className="redes-sociais">
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook}  style={{ height: "40px" }} className="facebook-icon" /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram} style={{ height: "40px" }} className="instagram-icon" /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} style={{ height: "40px" }} className="twitter-icon" /></a></li>
                    </ul>
                </div>
                <div className="column">
                    <h5>Atendimento 100% online</h5>
                    <p>Conheça nossos serviços de vistoria de bicicletas online. Garantimos um processo rápido e seguro para você obter o seguro da sua bicicleta.</p>
                </div>
            </div>
            <div className="bloco-azul"></div>
        </footer>
    );
}