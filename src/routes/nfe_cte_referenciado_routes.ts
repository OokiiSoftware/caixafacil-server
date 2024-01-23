import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_cte_referenciado_controller";

class NfeCteReferenciadoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfectereferenciado", verifyToken, Controller.getListNfeCteReferenciado);

      Routes.get('/nfectereferenciado/:Id', verifyToken, Controller.getNfeCteReferenciadoById);
  
      Routes.post('/nfectereferenciado', verifyToken, Controller.insertNfeCteReferenciado);

      Routes.put('/nfectereferenciado/:Id', verifyToken, Controller.updateNfeCteReferenciado);
  
      Routes.delete('/nfectereferenciado/:Id', verifyToken, Controller.deleteNfeCteReferenciado);
    }
}
  
export default new NfeCteReferenciadoRoute();