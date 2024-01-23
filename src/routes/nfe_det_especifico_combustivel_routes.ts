import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_det_especifico_combustivel_controller";

class NfeDetEspecificoCombustivelRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfedetespecificocombustivel", verifyToken, Controller.getListNfeDetEspecificoCombustivel);

      Routes.get('/nfedetespecificocombustivel/:Id', verifyToken, Controller.getNfeDetEspecificoCombustivelById);
  
      Routes.post('/nfedetespecificocombustivel', verifyToken, Controller.insertNfeDetEspecificoCombustivel);

      Routes.put('/nfedetespecificocombustivel/:Id', verifyToken, Controller.updateNfeDetEspecificoCombustivel);
  
      Routes.delete('/nfedetespecificocombustivel/:Id', verifyToken, Controller.deleteNfeDetEspecificoCombustivel);
    }
}
  
export default new NfeDetEspecificoCombustivelRoute();