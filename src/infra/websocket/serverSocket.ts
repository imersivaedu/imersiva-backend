import { WebSocketServer, WebSocket } from 'ws';
import { Server } from 'http';

interface PlayerState {
  id: string;
  x: number;
  y: number;
  z: number;
  rotY: number;
}

const players: Record<string, PlayerState> = {};
const wsToIdMap = new Map<WebSocket, string>();

export function setupWebSocket(server: Server) {
  const wss = new WebSocketServer({ server });

  wss.on('connection', (ws: WebSocket) => {

    ws.on('message', (data) => {
      try {
        const state: PlayerState = JSON.parse(data.toString());

        players[state.id] = state;
        wsToIdMap.set(ws, state.id);
        console.log(' Cliente conectado');
        console.log(state)

        wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'update', player: state }));
          }
        });
      } catch (err) {
        console.error('Erro ao processar estado do jogador', err);
      }
    });

    ws.on('close', () => {
      const id = wsToIdMap.get(ws);
      if (id) {
        delete players[id];
        wsToIdMap.delete(ws);
        console.log(`Jogador ${id} desconectado`);

        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'leave', id }));
          }
        });
      }
    });

    ws.send(JSON.stringify({ type: 'hello', msg: '🎮 Conectado ao servidor!' }));
  });
}
