import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_prod_rural_referenciada_controller";

class NfeProdRuralReferenciadaRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfeprodruralreferenciada", verifyToken, Controller.getListNfeProdRuralReferenciada);

      Routes.get('/nfeprodruralreferenciada/:Id', verifyToken, Controller.getNfeProdRuralReferenciadaById);
  
      Routes.post('/nfeprodruralreferenciada', verifyToken, Controller.insertNfeProdRuralReferenciada);

      Routes.put('/nfeprodruralreferenciada/:Id', verifyToken, Controller.updateNfeProdRuralReferenciada);
  
      Routes.delete('/nfeprodruralreferenciada/:Id', verifyToken, Controller.deleteNfeProdRuralReferenciada);
    }
}
  
export default new NfeProdRuralReferenciadaRoute();