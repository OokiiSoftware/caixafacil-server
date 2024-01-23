import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_exportacao_controller";

class NfeExportacaoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfeexportacao", verifyToken, Controller.getListNfeExportacao);

      Routes.get('/nfeexportacao/:Id', verifyToken, Controller.getNfeExportacaoById);
  
      Routes.post('/nfeexportacao', verifyToken, Controller.insertNfeExportacao);

      Routes.put('/nfeexportacao/:Id', verifyToken, Controller.updateNfeExportacao);
  
      Routes.delete('/nfeexportacao/:Id', verifyToken, Controller.deleteNfeExportacao);
    }
}
  
export default new NfeExportacaoRoute();