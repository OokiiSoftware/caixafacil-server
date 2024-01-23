import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/colaborador_controller";

class ColaboradorRoute {
    allRoutes(Routes: Router) {
      Routes.get("/colaborador", verifyToken, Controller.getListColaborador);

      Routes.get('/colaborador/:Id', verifyToken, Controller.getColaboradorById);
  
      Routes.post('/colaborador', verifyToken, Controller.insertColaborador);

      Routes.put('/colaborador/:Id', verifyToken, Controller.updateColaborador);
  
      Routes.delete('/colaborador/:Id', verifyToken, Controller.deleteColaborador);
    }
}
  
export default new ColaboradorRoute();