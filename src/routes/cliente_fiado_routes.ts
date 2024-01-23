import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/cliente_fiado_controller";

class ClienteFiadoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/clientefiado", verifyToken, Controller.getListClienteFiado);

      Routes.get('/clientefiado/:Id', verifyToken, Controller.getClienteFiadoById);
  
      Routes.post('/clientefiado', verifyToken, Controller.insertClienteFiado);

      Routes.put('/clientefiado/:Id', verifyToken, Controller.updateClienteFiado);
  
      Routes.delete('/clientefiado/:Id', verifyToken, Controller.deleteClienteFiado);
    }
}
  
export default new ClienteFiadoRoute();