import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/cliente_controller";

class ClienteRoute {
    allRoutes(Routes: Router) {
      Routes.get("/cliente", verifyToken, Controller.getListCliente);

      Routes.get('/cliente/:Id', verifyToken, Controller.getClienteById);
  
      Routes.post('/cliente', verifyToken, Controller.insertCliente);

      Routes.put('/cliente/:Id', verifyToken, Controller.updateCliente);
  
      Routes.delete('/cliente/:Id', verifyToken, Controller.deleteCliente);
    }
}
  
export default new ClienteRoute();