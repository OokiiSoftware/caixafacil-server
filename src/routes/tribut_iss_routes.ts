import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/tribut_iss_controller";

class TributIssRoute {
    allRoutes(Routes: Router) {
      Routes.get("/tributiss", verifyToken, Controller.getListTributIss);

      Routes.get('/tributiss/:Id', verifyToken, Controller.getTributIssById);
  
      Routes.post('/tributiss', verifyToken, Controller.insertTributIss);

      Routes.put('/tributiss/:Id', verifyToken, Controller.updateTributIss);
  
      Routes.delete('/tributiss/:Id', verifyToken, Controller.deleteTributIss);
    }
}
  
export default new TributIssRoute();