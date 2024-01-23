import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_configuracao_controller";

class NfeConfiguracaoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfeconfiguracao", verifyToken, Controller.getListNfeConfiguracao);

      Routes.get('/nfeconfiguracao/:Id', verifyToken, Controller.getNfeConfiguracaoById);
  
      Routes.post('/nfeconfiguracao', verifyToken, Controller.insertNfeConfiguracao);

      Routes.put('/nfeconfiguracao/:Id', verifyToken, Controller.updateNfeConfiguracao);
  
      Routes.delete('/nfeconfiguracao/:Id', verifyToken, Controller.deleteNfeConfiguracao);
    }
}
  
export default new NfeConfiguracaoRoute();