import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_detalhe_imposto_pis_st_controller";

class NfeDetalheImpostoPisStRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfedetalheimpostopisst", verifyToken, Controller.getListNfeDetalheImpostoPisSt);

      Routes.get('/nfedetalheimpostopisst/:Id', verifyToken, Controller.getNfeDetalheImpostoPisStById);
  
      Routes.post('/nfedetalheimpostopisst', verifyToken, Controller.insertNfeDetalheImpostoPisSt);

      Routes.put('/nfedetalheimpostopisst/:Id', verifyToken, Controller.updateNfeDetalheImpostoPisSt);
  
      Routes.delete('/nfedetalheimpostopisst/:Id', verifyToken, Controller.deleteNfeDetalheImpostoPisSt);
    }
}
  
export default new NfeDetalheImpostoPisStRoute();