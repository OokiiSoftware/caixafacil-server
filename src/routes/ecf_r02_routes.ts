import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/ecf_r02_controller";

class EcfR02Route {
    allRoutes(Routes: Router) {
      Routes.get("/ecfr02", verifyToken, Controller.getListEcfR02);

      Routes.get('/ecfr02/:Id', verifyToken, Controller.getEcfR02ById);
  
      Routes.post('/ecfr02', verifyToken, Controller.insertEcfR02);

      Routes.put('/ecfr02/:Id', verifyToken, Controller.updateEcfR02);
  
      Routes.delete('/ecfr02/:Id', verifyToken, Controller.deleteEcfR02);
    }
}
  
export default new EcfR02Route();