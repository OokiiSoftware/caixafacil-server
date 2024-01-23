import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_fatura_controller";

class NfeFaturaRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfefatura", verifyToken, Controller.getListNfeFatura);

      Routes.get('/nfefatura/:Id', verifyToken, Controller.getNfeFaturaById);
  
      Routes.post('/nfefatura', verifyToken, Controller.insertNfeFatura);

      Routes.put('/nfefatura/:Id', verifyToken, Controller.updateNfeFatura);
  
      Routes.delete('/nfefatura/:Id', verifyToken, Controller.deleteNfeFatura);
    }
}
  
export default new NfeFaturaRoute();