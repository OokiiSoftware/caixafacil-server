import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_importacao_detalhe_controller";

class NfeImportacaoDetalheRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfeimportacaodetalhe", verifyToken, Controller.getListNfeImportacaoDetalhe);

      Routes.get('/nfeimportacaodetalhe/:Id', verifyToken, Controller.getNfeImportacaoDetalheById);
  
      Routes.post('/nfeimportacaodetalhe', verifyToken, Controller.insertNfeImportacaoDetalhe);

      Routes.put('/nfeimportacaodetalhe/:Id', verifyToken, Controller.updateNfeImportacaoDetalhe);
  
      Routes.delete('/nfeimportacaodetalhe/:Id', verifyToken, Controller.deleteNfeImportacaoDetalhe);
    }
}
  
export default new NfeImportacaoDetalheRoute();