import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/pdv_operador_controller";

class PdvOperadorRoute {
    allRoutes(Routes: Router) {
      Routes.get("/pdvoperador", verifyToken, Controller.getListPdvOperador);

      Routes.get('/pdvoperador/:Id', verifyToken, Controller.getPdvOperadorById);
  
      Routes.post('/pdvoperador', verifyToken, Controller.insertPdvOperador);

      Routes.put('/pdvoperador/:Id', verifyToken, Controller.updatePdvOperador);
  
      Routes.delete('/pdvoperador/:Id', verifyToken, Controller.deletePdvOperador);
    }
}
  
export default new PdvOperadorRoute();