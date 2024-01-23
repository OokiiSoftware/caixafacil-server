import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_detalhe_imposto_cofins_controller";

class NfeDetalheImpostoCofinsRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfedetalheimpostocofins", verifyToken, Controller.getListNfeDetalheImpostoCofins);

      Routes.get('/nfedetalheimpostocofins/:Id', verifyToken, Controller.getNfeDetalheImpostoCofinsById);
  
      Routes.post('/nfedetalheimpostocofins', verifyToken, Controller.insertNfeDetalheImpostoCofins);

      Routes.put('/nfedetalheimpostocofins/:Id', verifyToken, Controller.updateNfeDetalheImpostoCofins);
  
      Routes.delete('/nfedetalheimpostocofins/:Id', verifyToken, Controller.deleteNfeDetalheImpostoCofins);
    }
}
  
export default new NfeDetalheImpostoCofinsRoute();