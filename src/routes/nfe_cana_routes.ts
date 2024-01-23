import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_cana_controller";

class NfeCanaRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfecana", verifyToken, Controller.getListNfeCana);

      Routes.get('/nfecana/:Id', verifyToken, Controller.getNfeCanaById);
  
      Routes.post('/nfecana', verifyToken, Controller.insertNfeCana);

      Routes.put('/nfecana/:Id', verifyToken, Controller.updateNfeCana);
  
      Routes.delete('/nfecana/:Id', verifyToken, Controller.deleteNfeCana);
    }
}
  
export default new NfeCanaRoute();