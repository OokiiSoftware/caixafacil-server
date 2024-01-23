import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/tribut_pis_controller";

class TributPisRoute {
    allRoutes(Routes: Router) {
      Routes.get("/tributpis", verifyToken, Controller.getListTributPis);

      Routes.get('/tributpis/:Id', verifyToken, Controller.getTributPisById);
  
      Routes.post('/tributpis', verifyToken, Controller.insertTributPis);

      Routes.put('/tributpis/:Id', verifyToken, Controller.updateTributPis);
  
      Routes.delete('/tributpis/:Id', verifyToken, Controller.deleteTributPis);
    }
}
  
export default new TributPisRoute();