import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_cabecalho_controller";

class NfeCabecalhoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfecabecalho", verifyToken, Controller.getListNfeCabecalho);

      Routes.get('/nfecabecalho/:Id', verifyToken, Controller.getNfeCabecalhoById);
  
      Routes.post('/nfecabecalho', verifyToken, Controller.insertNfeCabecalho);

      Routes.put('/nfecabecalho/:Id', verifyToken, Controller.updateNfeCabecalho);
  
      Routes.delete('/nfecabecalho/:Id', verifyToken, Controller.deleteNfeCabecalho);
    }
}
  
export default new NfeCabecalhoRoute();