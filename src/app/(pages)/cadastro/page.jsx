import Link from "next/link";

export default function Cadastro() {
  return (
    <body class="tela-cadastro">
        <div class="logotipo-cadastro">
            <h1 class="titulo-cadastro">Cycle Guard</h1>
        </div>
        <div class="aba-possui-conta">
            <h1 class="txt-1-cadastro">JA POSSUI CONTA? ENTRE AGORA.</h1>
            <Link href="/login"><button class="botao-entrar">ENTRAR</button></Link>
        </div>
        <div class="formulario-cadastro">
            <div class="cadastro">
                <h1 class="cadastro-texto">CADASTRAR-SE</h1>
                <form action="" class="forms">
                    <label for="name">
                        NOME
                        <input class="name" type="text" placeholder="Nome"/>
                    </label>
                    <label for="email">
                        EMAIL
                        <input class="email" type="text" placeholder="Email"/>
                    </label>
                    <label for="password">
                        SENHA
                        <input class="password" type="text" placeholder="senha"/>
                    </label>
                </form>
                <button class="botao-cadastrar-se">ENTRAR</button>
            </div>
        </div>
    </body>
  )
}
