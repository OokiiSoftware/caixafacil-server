import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_emitente_controller";

class NfeEmitenteRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfeemitente", verifyToken, Controller.getListNfeEmitente);

      Routes.get('/nfeemitente/:Id', verifyToken, Controller.getNfeEmitenteById);
  
      Routes.post('/nfeemitente', verifyToken, Controller.insertNfeEmitente);

      Routes.put('/nfeemitente/:Id', verifyToken, Controller.updateNfeEmitente);
  
      Routes.delete('/nfeemitente/:Id', verifyToken, Controller.deleteNfeEmitente);
    }
}
  
export default new NfeEmitenteRoute();