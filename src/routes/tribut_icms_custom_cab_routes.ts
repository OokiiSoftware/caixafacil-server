import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/tribut_icms_custom_cab_controller";

class TributIcmsCustomCabRoute {
    allRoutes(Routes: Router) {
      Routes.get("/tributicmscustomcab", verifyToken, Controller.getListTributIcmsCustomCab);

      Routes.get('/tributicmscustomcab/:Id', verifyToken, Controller.getTributIcmsCustomCabById);
  
      Routes.post('/tributicmscustomcab', verifyToken, Controller.insertTributIcmsCustomCab);

      Routes.put('/tributicmscustomcab/:Id', verifyToken, Controller.updateTributIcmsCustomCab);
  
      Routes.delete('/tributicmscustomcab/:Id', verifyToken, Controller.deleteTributIcmsCustomCab);
    }
}
  
export default new TributIcmsCustomCabRoute();