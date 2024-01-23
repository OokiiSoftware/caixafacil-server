import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_referenciada_controller";

class NfeReferenciadaRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfereferenciada", verifyToken, Controller.getListNfeReferenciada);

      Routes.get('/nfereferenciada/:Id', verifyToken, Controller.getNfeReferenciadaById);
  
      Routes.post('/nfereferenciada', verifyToken, Controller.insertNfeReferenciada);

      Routes.put('/nfereferenciada/:Id', verifyToken, Controller.updateNfeReferenciada);
  
      Routes.delete('/nfereferenciada/:Id', verifyToken, Controller.deleteNfeReferenciada);
    }
}
  
export default new NfeReferenciadaRoute();