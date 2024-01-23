import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/pdv_configuracao_controller";

class PdvConfiguracaoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/pdvconfiguracao", verifyToken, Controller.getListPdvConfiguracao);

      Routes.get('/pdvconfiguracao/:Id', verifyToken, Controller.getPdvConfiguracaoById);
  
      Routes.post('/pdvconfiguracao', verifyToken, Controller.insertPdvConfiguracao);

      Routes.put('/pdvconfiguracao/:Id', verifyToken, Controller.updatePdvConfiguracao);
  
      Routes.delete('/pdvconfiguracao/:Id', verifyToken, Controller.deletePdvConfiguracao);
    }
}
  
export default new PdvConfiguracaoRoute();