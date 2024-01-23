import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/log_importacao_controller";

class LogImportacaoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/logimportacao", verifyToken, Controller.getListLogImportacao);

      Routes.get('/logimportacao/:Id', verifyToken, Controller.getLogImportacaoById);
  
      Routes.post('/logimportacao', verifyToken, Controller.insertLogImportacao);

      Routes.put('/logimportacao/:Id', verifyToken, Controller.updateLogImportacao);
  
      Routes.delete('/logimportacao/:Id', verifyToken, Controller.deleteLogImportacao);
    }
}
  
export default new LogImportacaoRoute();