import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_detalhe_imposto_pis_controller";

class NfeDetalheImpostoPisRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfedetalheimpostopis", verifyToken, Controller.getListNfeDetalheImpostoPis);

      Routes.get('/nfedetalheimpostopis/:Id', verifyToken, Controller.getNfeDetalheImpostoPisById);
  
      Routes.post('/nfedetalheimpostopis', verifyToken, Controller.insertNfeDetalheImpostoPis);

      Routes.put('/nfedetalheimpostopis/:Id', verifyToken, Controller.updateNfeDetalheImpostoPis);
  
      Routes.delete('/nfedetalheimpostopis/:Id', verifyToken, Controller.deleteNfeDetalheImpostoPis);
    }
}
  
export default new NfeDetalheImpostoPisRoute();