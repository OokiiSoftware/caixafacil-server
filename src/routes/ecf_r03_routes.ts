import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/ecf_r03_controller";

class EcfR03Route {
    allRoutes(Routes: Router) {
      Routes.get("/ecfr03", verifyToken, Controller.getListEcfR03);

      Routes.get('/ecfr03/:Id', verifyToken, Controller.getEcfR03ById);
  
      Routes.post('/ecfr03', verifyToken, Controller.insertEcfR03);

      Routes.put('/ecfr03/:Id', verifyToken, Controller.updateEcfR03);
  
      Routes.delete('/ecfr03/:Id', verifyToken, Controller.deleteEcfR03);
    }
}
  
export default new EcfR03Route();