import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/ecf_r06_controller";

class EcfR06Route {
    allRoutes(Routes: Router) {
      Routes.get("/ecfr06", verifyToken, Controller.getListEcfR06);

      Routes.get('/ecfr06/:Id', verifyToken, Controller.getEcfR06ById);
  
      Routes.post('/ecfr06', verifyToken, Controller.insertEcfR06);

      Routes.put('/ecfr06/:Id', verifyToken, Controller.updateEcfR06);
  
      Routes.delete('/ecfr06/:Id', verifyToken, Controller.deleteEcfR06);
    }
}
  
export default new EcfR06Route();