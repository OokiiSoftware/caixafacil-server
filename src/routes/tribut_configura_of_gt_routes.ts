import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/tribut_configura_of_gt_controller";

class TributConfiguraOfGtRoute {
    allRoutes(Routes: Router) {
      Routes.get("/tributconfiguraofgt", verifyToken, Controller.getListTributConfiguraOfGt);

      Routes.get('/tributconfiguraofgt/:Id', verifyToken, Controller.getTributConfiguraOfGtById);
  
      Routes.post('/tributconfiguraofgt', verifyToken, Controller.insertTributConfiguraOfGt);

      Routes.put('/tributconfiguraofgt/:Id', verifyToken, Controller.updateTributConfiguraOfGt);
  
      Routes.delete('/tributconfiguraofgt/:Id', verifyToken, Controller.deleteTributConfiguraOfGt);
    }
}
  
export default new TributConfiguraOfGtRoute();