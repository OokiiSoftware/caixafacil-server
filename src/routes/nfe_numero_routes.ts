import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_numero_controller";

class NfeNumeroRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfenumero", verifyToken, Controller.getListNfeNumero);

      Routes.get('/nfenumero/:Id', verifyToken, Controller.getNfeNumeroById);
  
      Routes.post('/nfenumero', verifyToken, Controller.insertNfeNumero);

      Routes.put('/nfenumero/:Id', verifyToken, Controller.updateNfeNumero);
  
      Routes.delete('/nfenumero/:Id', verifyToken, Controller.deleteNfeNumero);
    }
}
  
export default new NfeNumeroRoute();