import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_cupom_fiscal_referenciado_controller";

class NfeCupomFiscalReferenciadoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfecupomfiscalreferenciado", verifyToken, Controller.getListNfeCupomFiscalReferenciado);

      Routes.get('/nfecupomfiscalreferenciado/:Id', verifyToken, Controller.getNfeCupomFiscalReferenciadoById);
  
      Routes.post('/nfecupomfiscalreferenciado', verifyToken, Controller.insertNfeCupomFiscalReferenciado);

      Routes.put('/nfecupomfiscalreferenciado/:Id', verifyToken, Controller.updateNfeCupomFiscalReferenciado);
  
      Routes.delete('/nfecupomfiscalreferenciado/:Id', verifyToken, Controller.deleteNfeCupomFiscalReferenciado);
    }
}
  
export default new NfeCupomFiscalReferenciadoRoute();