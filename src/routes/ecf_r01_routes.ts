import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/ecf_r01_controller";

class EcfR01Route {
    allRoutes(Routes: Router) {
      Routes.get("/ecfr01", verifyToken, Controller.getListEcfR01);

      Routes.get('/ecfr01/:Id', verifyToken, Controller.getEcfR01ById);
  
      Routes.post('/ecfr01', verifyToken, Controller.insertEcfR01);

      Routes.put('/ecfr01/:Id', verifyToken, Controller.updateEcfR01);
  
      Routes.delete('/ecfr01/:Id', verifyToken, Controller.deleteEcfR01);
    }
}
  
export default new EcfR01Route();