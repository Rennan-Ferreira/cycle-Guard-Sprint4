This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Para rodar a aplicação que permite ao usuário fazer o reconhecimento da bicicleta para vistoria, é preciso realizar os seguintes passos:
No prompt de comando, executar o seguinte comando: cd testeDeIntegração

Em seguida, fazer as seguintes instalações:
npm install axios
pip install fastapi uvicorn
pip install fastapi
pip install opencv-python

Após as instalações serem concluidas com sucesso, rodar a aplicação também no prompt de comando:
py app.py

Caso queira testar a aplicação usando a sua webcam, altere o seguinte trecho de código no arquivo app.py:
def start_detection_route():
    global video_capture, model, detection_running
    if not detection_running:
        video_capture = cv2.VideoCapture(0) 
        model = cv2.dnn_DetectionModel(net)
        model.setInputParams(size=(416, 416), scale=1/255)
        detection_running = True
        t = threading.Thread(target=start_detection)
        t.daemon = True
        t.start()
    return {"status": "Detection started"}

obs: é necessário executar o py app.py novamente após a alteração ser feita.
=========================================================================================================================================

É necessário fazer a instalação do input-mask, pois o mesmo está sendo utilizado nos forms para validação das informações. 
Após ter feito o "npm install" no prompt de comando, execute o seguinte comando: "npm i react-input-mask".
=========================================================================================================================================

Credenciais do Banco de Dados:
User: rm552260
Password: 290404
Hostname: oracle.fiap.com.br
Port: 1521
Sid: ORCL

Para testar se as informações estão sendo inseridas no banco, fazer a seguinte consulta: SELECT * from Cliente
=========================================================================================================================================

Para validação do usuário na tela de login, entrar com as seguintes credenciais:
email: cycleGuard@fiap.com
senha": 12345678
=========================================================================================================================================

Para teste da API da disciplina Domain Driven Design, segue o repositório com o projeto e orientações de funcionamento:
https://github.com/jaisycibele/ProjetoCycleGuard.git

=========================================================================================================================================
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
