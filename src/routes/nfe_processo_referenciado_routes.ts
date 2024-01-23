import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_processo_referenciado_controller";

class NfeProcessoReferenciadoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfeprocessoreferenciado", verifyToken, Controller.getListNfeProcessoReferenciado);

      Routes.get('/nfeprocessoreferenciado/:Id', verifyToken, Controller.getNfeProcessoReferenciadoById);
  
      Routes.post('/nfeprocessoreferenciado', verifyToken, Controller.insertNfeProcessoReferenciado);

      Routes.put('/nfeprocessoreferenciado/:Id', verifyToken, Controller.updateNfeProcessoReferenciado);
  
      Routes.delete('/nfeprocessoreferenciado/:Id', verifyToken, Controller.deleteNfeProcessoReferenciado);
    }
}
  
export default new NfeProcessoReferenciadoRoute();