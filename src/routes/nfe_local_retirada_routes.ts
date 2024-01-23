import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_local_retirada_controller";

class NfeLocalRetiradaRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfelocalretirada", verifyToken, Controller.getListNfeLocalRetirada);

      Routes.get('/nfelocalretirada/:Id', verifyToken, Controller.getNfeLocalRetiradaById);
  
      Routes.post('/nfelocalretirada', verifyToken, Controller.insertNfeLocalRetirada);

      Routes.put('/nfelocalretirada/:Id', verifyToken, Controller.updateNfeLocalRetirada);
  
      Routes.delete('/nfelocalretirada/:Id', verifyToken, Controller.deleteNfeLocalRetirada);
    }
}
  
export default new NfeLocalRetiradaRoute();