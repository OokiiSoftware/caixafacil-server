import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfce_plano_pagamento_controller";

class NfcePlanoPagamentoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfceplanopagamento", verifyToken, Controller.getListNfcePlanoPagamento);

      Routes.get('/nfceplanopagamento/:Id', verifyToken, Controller.getNfcePlanoPagamentoById);
  
      Routes.post('/nfceplanopagamento', verifyToken, Controller.insertNfcePlanoPagamento);

      Routes.put('/nfceplanopagamento/:Id', verifyToken, Controller.updateNfcePlanoPagamento);
  
      Routes.delete('/nfceplanopagamento/:Id', verifyToken, Controller.deleteNfcePlanoPagamento);
    }
}
  
export default new NfcePlanoPagamentoRoute();