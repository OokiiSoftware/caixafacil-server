import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_local_entrega_controller";

class NfeLocalEntregaRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfelocalentrega", verifyToken, Controller.getListNfeLocalEntrega);

      Routes.get('/nfelocalentrega/:Id', verifyToken, Controller.getNfeLocalEntregaById);
  
      Routes.post('/nfelocalentrega', verifyToken, Controller.insertNfeLocalEntrega);

      Routes.put('/nfelocalentrega/:Id', verifyToken, Controller.updateNfeLocalEntrega);
  
      Routes.delete('/nfelocalentrega/:Id', verifyToken, Controller.deleteNfeLocalEntrega);
    }
}
  
export default new NfeLocalEntregaRoute();