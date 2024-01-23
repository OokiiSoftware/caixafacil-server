import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/ecf_recebimento_nao_fiscal_controller";

class EcfRecebimentoNaoFiscalRoute {
    allRoutes(Routes: Router) {
      Routes.get("/ecfrecebimentonaofiscal", verifyToken, Controller.getListEcfRecebimentoNaoFiscal);

      Routes.get('/ecfrecebimentonaofiscal/:Id', verifyToken, Controller.getEcfRecebimentoNaoFiscalById);
  
      Routes.post('/ecfrecebimentonaofiscal', verifyToken, Controller.insertEcfRecebimentoNaoFiscal);

      Routes.put('/ecfrecebimentonaofiscal/:Id', verifyToken, Controller.updateEcfRecebimentoNaoFiscal);
  
      Routes.delete('/ecfrecebimentonaofiscal/:Id', verifyToken, Controller.deleteEcfRecebimentoNaoFiscal);
    }
}
  
export default new EcfRecebimentoNaoFiscalRoute();