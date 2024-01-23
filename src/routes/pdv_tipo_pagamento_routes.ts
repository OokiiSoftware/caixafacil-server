import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/pdv_tipo_pagamento_controller";

class PdvTipoPagamentoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/pdvtipopagamento", verifyToken, Controller.getListPdvTipoPagamento);

      Routes.get('/pdvtipopagamento/:Id', verifyToken, Controller.getPdvTipoPagamentoById);
  
      Routes.post('/pdvtipopagamento', verifyToken, Controller.insertPdvTipoPagamento);

      Routes.put('/pdvtipopagamento/:Id', verifyToken, Controller.updatePdvTipoPagamento);
  
      Routes.delete('/pdvtipopagamento/:Id', verifyToken, Controller.deletePdvTipoPagamento);
    }
}
  
export default new PdvTipoPagamentoRoute();