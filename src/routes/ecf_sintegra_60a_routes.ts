import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/ecf_sintegra_60a_controller";

class EcfSintegra60aRoute {
    allRoutes(Routes: Router) {
      Routes.get("/ecfsintegra60a", verifyToken, Controller.getListEcfSintegra60a);

      Routes.get('/ecfsintegra60a/:Id', verifyToken, Controller.getEcfSintegra60aById);
  
      Routes.post('/ecfsintegra60a', verifyToken, Controller.insertEcfSintegra60a);

      Routes.put('/ecfsintegra60a/:Id', verifyToken, Controller.updateEcfSintegra60a);
  
      Routes.delete('/ecfsintegra60a/:Id', verifyToken, Controller.deleteEcfSintegra60a);
    }
}
  
export default new EcfSintegra60aRoute();