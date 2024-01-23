import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_destinatario_controller";

class NfeDestinatarioRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfedestinatario", verifyToken, Controller.getListNfeDestinatario);

      Routes.get('/nfedestinatario/:Id', verifyToken, Controller.getNfeDestinatarioById);
  
      Routes.post('/nfedestinatario', verifyToken, Controller.insertNfeDestinatario);

      Routes.put('/nfedestinatario/:Id', verifyToken, Controller.updateNfeDestinatario);
  
      Routes.delete('/nfedestinatario/:Id', verifyToken, Controller.deleteNfeDestinatario);
    }
}
  
export default new NfeDestinatarioRoute();