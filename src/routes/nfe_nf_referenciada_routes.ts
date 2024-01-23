import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_nf_referenciada_controller";

class NfeNfReferenciadaRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfenfreferenciada", verifyToken, Controller.getListNfeNfReferenciada);

      Routes.get('/nfenfreferenciada/:Id', verifyToken, Controller.getNfeNfReferenciadaById);
  
      Routes.post('/nfenfreferenciada', verifyToken, Controller.insertNfeNfReferenciada);

      Routes.put('/nfenfreferenciada/:Id', verifyToken, Controller.updateNfeNfReferenciada);
  
      Routes.delete('/nfenfreferenciada/:Id', verifyToken, Controller.deleteNfeNfReferenciada);
    }
}
  
export default new NfeNfReferenciadaRoute();