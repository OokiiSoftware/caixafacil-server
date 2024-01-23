import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_declaracao_importacao_controller";

class NfeDeclaracaoImportacaoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfedeclaracaoimportacao", verifyToken, Controller.getListNfeDeclaracaoImportacao);

      Routes.get('/nfedeclaracaoimportacao/:Id', verifyToken, Controller.getNfeDeclaracaoImportacaoById);
  
      Routes.post('/nfedeclaracaoimportacao', verifyToken, Controller.insertNfeDeclaracaoImportacao);

      Routes.put('/nfedeclaracaoimportacao/:Id', verifyToken, Controller.updateNfeDeclaracaoImportacao);
  
      Routes.delete('/nfedeclaracaoimportacao/:Id', verifyToken, Controller.deleteNfeDeclaracaoImportacao);
    }
}
  
export default new NfeDeclaracaoImportacaoRoute();