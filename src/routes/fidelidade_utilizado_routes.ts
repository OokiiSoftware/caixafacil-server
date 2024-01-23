import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/fidelidade_utilizado_controller";

class FidelidadeUtilizadoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/fidelidadeutilizado", verifyToken, Controller.getListFidelidadeUtilizado);

      Routes.get('/fidelidadeutilizado/:Id', verifyToken, Controller.getFidelidadeUtilizadoById);
  
      Routes.post('/fidelidadeutilizado', verifyToken, Controller.insertFidelidadeUtilizado);

      Routes.put('/fidelidadeutilizado/:Id', verifyToken, Controller.updateFidelidadeUtilizado);
  
      Routes.delete('/fidelidadeutilizado/:Id', verifyToken, Controller.deleteFidelidadeUtilizado);
    }
}
  
export default new FidelidadeUtilizadoRoute();