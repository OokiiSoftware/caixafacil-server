import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/ecf_r07_controller";

class EcfR07Route {
    allRoutes(Routes: Router) {
      Routes.get("/ecfr07", verifyToken, Controller.getListEcfR07);

      Routes.get('/ecfr07/:Id', verifyToken, Controller.getEcfR07ById);
  
      Routes.post('/ecfr07', verifyToken, Controller.insertEcfR07);

      Routes.put('/ecfr07/:Id', verifyToken, Controller.updateEcfR07);
  
      Routes.delete('/ecfr07/:Id', verifyToken, Controller.deleteEcfR07);
    }
}
  
export default new EcfR07Route();