import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
        <div className="logo-cabecalho">
            <Link href="/">
            <h1>CYCLE GUARD</h1>
            <p>A MELHOR FORMA DE ADQUIRIR SEU SEGURO</p>
            </Link>
        </div>
        <div class="nav-links">
            <nav>
                <ul>
                    <li><a href="#seguros">SEGUROS DISPONÍVEIS</a></li>
                    <span>  |  </span>
                    <li><a href="#sobre-nos">SOBRE NÓS</a></li>
                    <span>  |  </span>
                    <li><Link href="/login">LOGIN</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
