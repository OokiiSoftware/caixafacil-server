import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_cana_deducoes_safra_controller";

class NfeCanaDeducoesSafraRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfecanadeducoessafra", verifyToken, Controller.getListNfeCanaDeducoesSafra);

      Routes.get('/nfecanadeducoessafra/:Id', verifyToken, Controller.getNfeCanaDeducoesSafraById);
  
      Routes.post('/nfecanadeducoessafra', verifyToken, Controller.insertNfeCanaDeducoesSafra);

      Routes.put('/nfecanadeducoessafra/:Id', verifyToken, Controller.updateNfeCanaDeducoesSafra);
  
      Routes.delete('/nfecanadeducoessafra/:Id', verifyToken, Controller.deleteNfeCanaDeducoesSafra);
    }
}
  
export default new NfeCanaDeducoesSafraRoute();