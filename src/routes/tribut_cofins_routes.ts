import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/tribut_cofins_controller";

class TributCofinsRoute {
    allRoutes(Routes: Router) {
      Routes.get("/tributcofins", verifyToken, Controller.getListTributCofins);

      Routes.get('/tributcofins/:Id', verifyToken, Controller.getTributCofinsById);
  
      Routes.post('/tributcofins', verifyToken, Controller.insertTributCofins);

      Routes.put('/tributcofins/:Id', verifyToken, Controller.updateTributCofins);
  
      Routes.delete('/tributcofins/:Id', verifyToken, Controller.deleteTributCofins);
    }
}
  
export default new TributCofinsRoute();