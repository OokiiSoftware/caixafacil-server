import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/fidelidade_historico_controller";

class FidelidadeHistoricoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/fidelidadehistorico", verifyToken, Controller.getListFidelidadeHistorico);

      Routes.get('/fidelidadehistorico/:Id', verifyToken, Controller.getFidelidadeHistoricoById);
  
      Routes.post('/fidelidadehistorico', verifyToken, Controller.insertFidelidadeHistorico);

      Routes.put('/fidelidadehistorico/:Id', verifyToken, Controller.updateFidelidadeHistorico);
  
      Routes.delete('/fidelidadehistorico/:Id', verifyToken, Controller.deleteFidelidadeHistorico);
    }
}
  
export default new FidelidadeHistoricoRoute();