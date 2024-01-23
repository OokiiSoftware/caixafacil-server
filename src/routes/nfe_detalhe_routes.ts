import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_detalhe_controller";

class NfeDetalheRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfedetalhe", verifyToken, Controller.getListNfeDetalhe);

      Routes.get('/nfedetalhe/:Id', verifyToken, Controller.getNfeDetalheById);
  
      Routes.post('/nfedetalhe', verifyToken, Controller.insertNfeDetalhe);

      Routes.put('/nfedetalhe/:Id', verifyToken, Controller.updateNfeDetalhe);
  
      Routes.delete('/nfedetalhe/:Id', verifyToken, Controller.deleteNfeDetalhe);
    }
}
  
export default new NfeDetalheRoute();