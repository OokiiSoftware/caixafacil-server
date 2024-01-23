import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/contador_controller";

class ContadorRoute {
    allRoutes(Routes: Router) {
      Routes.get("/contador", verifyToken, Controller.getListContador);

      Routes.get('/contador/:Id', verifyToken, Controller.getContadorById);
  
      Routes.post('/contador', verifyToken, Controller.insertContador);

      Routes.put('/contador/:Id', verifyToken, Controller.updateContador);
  
      Routes.delete('/contador/:Id', verifyToken, Controller.deleteContador);
    }
}
  
export default new ContadorRoute();