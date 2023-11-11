import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    // Retorna a lista de usuários apenas para fins de teste
    const file = await fs.readFile(process.cwd() + "/src/app/api/base/db.json", "utf8");
    const lista = JSON.parse(file);
    return NextResponse.json(lista);
}

const handleLogin = async (email, senha) => {
    try {
        const file = await fs.readFile(process.cwd() + "/src/app/api/base/db.json", "utf8");
        const dados = JSON.parse(file);

        const user = dados.usuarios.find((user) => user.email === email && user.senha === senha);

        if (user) {
            console.log(`Login bem-sucedido para o usuário: ${user.email}`);
            return { status: true, user };
        } else {
            console.log(`Falha no login para o e-mail: ${email}`);
            return { status: false, message: "Credenciais inválidas." };
        }
    } catch (error) {
        console.error("Erro durante o login:", error);
        throw new Error("Erro interno durante o login.");
    }
};

// Criando a função POST para realizar o login de usuários
export async function POST(request, response) {
    const { info, email, senha } = await request.json();

    switch (info) {
        case "login":
            const user = await handleLogin(email, senha);
            if (user.status) {
                // Aqui, você pode adicionar informações adicionais ao objeto de resposta se necessário
                return NextResponse.json({ "status": true, "user": user.user });
            } else {
                // Retornando uma resposta com status 401 (Unauthorized) para indicar falha no login
                return NextResponse.json({ "status": false, "message": user.message }, { status: 401 });
            }
        default:
            // Retornando uma resposta com status 400 (Bad Request) para indicar uma solicitação inválida
            return NextResponse.json({ status: false, message: "Solicitação inválida." }, { status: 400 });
    }
}
