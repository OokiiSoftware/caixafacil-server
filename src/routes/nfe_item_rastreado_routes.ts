import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_item_rastreado_controller";

class NfeItemRastreadoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfeitemrastreado", verifyToken, Controller.getListNfeItemRastreado);

      Routes.get('/nfeitemrastreado/:Id', verifyToken, Controller.getNfeItemRastreadoById);
  
      Routes.post('/nfeitemrastreado', verifyToken, Controller.insertNfeItemRastreado);

      Routes.put('/nfeitemrastreado/:Id', verifyToken, Controller.updateNfeItemRastreado);
  
      Routes.delete('/nfeitemrastreado/:Id', verifyToken, Controller.deleteNfeItemRastreado);
    }
}
  
export default new NfeItemRastreadoRoute();