import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/tribut_operacao_fiscal_controller";

class TributOperacaoFiscalRoute {
    allRoutes(Routes: Router) {
      Routes.get("/tributoperacaofiscal", verifyToken, Controller.getListTributOperacaoFiscal);

      Routes.get('/tributoperacaofiscal/:Id', verifyToken, Controller.getTributOperacaoFiscalById);
  
      Routes.post('/tributoperacaofiscal', verifyToken, Controller.insertTributOperacaoFiscal);

      Routes.put('/tributoperacaofiscal/:Id', verifyToken, Controller.updateTributOperacaoFiscal);
  
      Routes.delete('/tributoperacaofiscal/:Id', verifyToken, Controller.deleteTributOperacaoFiscal);
    }
}
  
export default new TributOperacaoFiscalRoute();