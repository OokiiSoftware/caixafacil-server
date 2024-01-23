import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/pdv_total_tipo_pagamento_controller";

class PdvTotalTipoPagamentoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/pdvtotaltipopagamento", verifyToken, Controller.getListPdvTotalTipoPagamento);

      Routes.get('/pdvtotaltipopagamento/:Id', verifyToken, Controller.getPdvTotalTipoPagamentoById);
  
      Routes.post('/pdvtotaltipopagamento', verifyToken, Controller.insertPdvTotalTipoPagamento);

      Routes.put('/pdvtotaltipopagamento/:Id', verifyToken, Controller.updatePdvTotalTipoPagamento);
  
      Routes.delete('/pdvtotaltipopagamento/:Id', verifyToken, Controller.deletePdvTotalTipoPagamento);
    }
}
  
export default new PdvTotalTipoPagamentoRoute();