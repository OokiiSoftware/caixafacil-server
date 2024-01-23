import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_numero_inutilizado_controller";

class NfeNumeroInutilizadoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfenumeroinutilizado", verifyToken, Controller.getListNfeNumeroInutilizado);

      Routes.get('/nfenumeroinutilizado/:Id', verifyToken, Controller.getNfeNumeroInutilizadoById);
  
      Routes.post('/nfenumeroinutilizado', verifyToken, Controller.insertNfeNumeroInutilizado);

      Routes.put('/nfenumeroinutilizado/:Id', verifyToken, Controller.updateNfeNumeroInutilizado);
  
      Routes.delete('/nfenumeroinutilizado/:Id', verifyToken, Controller.deleteNfeNumeroInutilizado);
    }
}
  
export default new NfeNumeroInutilizadoRoute();