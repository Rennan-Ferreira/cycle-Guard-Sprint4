'use client'
import Link from "next/link";

export default function Cabecalho({ isHome1, isVistoria }) {
  const linkHref = isHome1 ? "/login" : "/dadosCliente";
  const linkText = isHome1 ? "LOGIN" : "VISTORIA";
  const sobreNosText = isVistoria ? "PORTO SEGURO" : "SOBRE NÓS";

  return (
    <header className="cabecalho">
      <div className="logo-cabecalho">
        <Link href="/">
          <h1>CYCLE GUARD</h1>
          <p>A MELHOR FORMA DE ADQUIRIR SEU SEGURO</p>
        </Link>
      </div>
      <div className="nav-links">
        <nav>
          <ul>
            <li>
              <a href="#seguros">SEGUROS DISPONÍVEIS</a>
            </li>
            <span> | </span>
            <li>
              <a href={`#${isVistoria ? "porto-seguro" : "sobre-nos"}`}>{sobreNosText}</a>
            </li>
            <span> | </span>
            <li>
              <Link href={linkHref}>{linkText}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
