import http from 'http';
import { app } from './app'; // << importar o app configurado com rotas
import { setupWebSocket } from '../infra/websocket/serverSocket';

const server = http.createServer(app);

setupWebSocket(server); 

const port = process.env.PORT ?? 3000;
server.listen(port, () => {
  console.log(`🚀 Servidor HTTP+WS rodando em http://localhost:${port}`);
});
