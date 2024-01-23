import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/pdv_sangria_controller";

class PdvSangriaRoute {
    allRoutes(Routes: Router) {
      Routes.get("/pdvsangria", verifyToken, Controller.getListPdvSangria);

      Routes.get('/pdvsangria/:Id', verifyToken, Controller.getPdvSangriaById);
  
      Routes.post('/pdvsangria', verifyToken, Controller.insertPdvSangria);

      Routes.put('/pdvsangria/:Id', verifyToken, Controller.updatePdvSangria);
  
      Routes.delete('/pdvsangria/:Id', verifyToken, Controller.deletePdvSangria);
    }
}
  
export default new PdvSangriaRoute();