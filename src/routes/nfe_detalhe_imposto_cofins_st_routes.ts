import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_detalhe_imposto_cofins_st_controller";

class NfeDetalheImpostoCofinsStRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfedetalheimpostocofinsst", verifyToken, Controller.getListNfeDetalheImpostoCofinsSt);

      Routes.get('/nfedetalheimpostocofinsst/:Id', verifyToken, Controller.getNfeDetalheImpostoCofinsStById);
  
      Routes.post('/nfedetalheimpostocofinsst', verifyToken, Controller.insertNfeDetalheImpostoCofinsSt);

      Routes.put('/nfedetalheimpostocofinsst/:Id', verifyToken, Controller.updateNfeDetalheImpostoCofinsSt);
  
      Routes.delete('/nfedetalheimpostocofinsst/:Id', verifyToken, Controller.deleteNfeDetalheImpostoCofinsSt);
    }
}
  
export default new NfeDetalheImpostoCofinsStRoute();