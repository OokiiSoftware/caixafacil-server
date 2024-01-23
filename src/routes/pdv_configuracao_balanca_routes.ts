import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/pdv_configuracao_balanca_controller";

class PdvConfiguracaoBalancaRoute {
    allRoutes(Routes: Router) {
      Routes.get("/pdvconfiguracaobalanca", verifyToken, Controller.getListPdvConfiguracaoBalanca);

      Routes.get('/pdvconfiguracaobalanca/:Id', verifyToken, Controller.getPdvConfiguracaoBalancaById);
  
      Routes.post('/pdvconfiguracaobalanca', verifyToken, Controller.insertPdvConfiguracaoBalanca);

      Routes.put('/pdvconfiguracaobalanca/:Id', verifyToken, Controller.updatePdvConfiguracaoBalanca);
  
      Routes.delete('/pdvconfiguracaobalanca/:Id', verifyToken, Controller.deletePdvConfiguracaoBalanca);
    }
}
  
export default new PdvConfiguracaoBalancaRoute();