import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_duplicata_controller";

class NfeDuplicataRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfeduplicata", verifyToken, Controller.getListNfeDuplicata);

      Routes.get('/nfeduplicata/:Id', verifyToken, Controller.getNfeDuplicataById);
  
      Routes.post('/nfeduplicata', verifyToken, Controller.insertNfeDuplicata);

      Routes.put('/nfeduplicata/:Id', verifyToken, Controller.updateNfeDuplicata);
  
      Routes.delete('/nfeduplicata/:Id', verifyToken, Controller.deleteNfeDuplicata);
    }
}
  
export default new NfeDuplicataRoute();