import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/ecf_relatorio_gerencial_controller";

class EcfRelatorioGerencialRoute {
    allRoutes(Routes: Router) {
      Routes.get("/ecfrelatoriogerencial", verifyToken, Controller.getListEcfRelatorioGerencial);

      Routes.get('/ecfrelatoriogerencial/:Id', verifyToken, Controller.getEcfRelatorioGerencialById);
  
      Routes.post('/ecfrelatoriogerencial', verifyToken, Controller.insertEcfRelatorioGerencial);

      Routes.put('/ecfrelatoriogerencial/:Id', verifyToken, Controller.updateEcfRelatorioGerencial);
  
      Routes.delete('/ecfrelatoriogerencial/:Id', verifyToken, Controller.deleteEcfRelatorioGerencial);
    }
}
  
export default new EcfRelatorioGerencialRoute();