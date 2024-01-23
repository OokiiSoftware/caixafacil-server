import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_informacao_pagamento_controller";

class NfeInformacaoPagamentoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfeinformacaopagamento", verifyToken, Controller.getListNfeInformacaoPagamento);

      Routes.get('/nfeinformacaopagamento/:Id', verifyToken, Controller.getNfeInformacaoPagamentoById);
  
      Routes.post('/nfeinformacaopagamento', verifyToken, Controller.insertNfeInformacaoPagamento);

      Routes.put('/nfeinformacaopagamento/:Id', verifyToken, Controller.updateNfeInformacaoPagamento);
  
      Routes.delete('/nfeinformacaopagamento/:Id', verifyToken, Controller.deleteNfeInformacaoPagamento);
    }
}
  
export default new NfeInformacaoPagamentoRoute();