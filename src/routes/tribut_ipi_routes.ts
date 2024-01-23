import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/tribut_ipi_controller";

class TributIpiRoute {
    allRoutes(Routes: Router) {
      Routes.get("/tributipi", verifyToken, Controller.getListTributIpi);

      Routes.get('/tributipi/:Id', verifyToken, Controller.getTributIpiById);
  
      Routes.post('/tributipi', verifyToken, Controller.insertTributIpi);

      Routes.put('/tributipi/:Id', verifyToken, Controller.updateTributIpi);
  
      Routes.delete('/tributipi/:Id', verifyToken, Controller.deleteTributIpi);
    }
}
  
export default new TributIpiRoute();