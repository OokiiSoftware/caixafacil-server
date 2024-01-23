import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_det_especifico_armamento_controller";

class NfeDetEspecificoArmamentoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfedetespecificoarmamento", verifyToken, Controller.getListNfeDetEspecificoArmamento);

      Routes.get('/nfedetespecificoarmamento/:Id', verifyToken, Controller.getNfeDetEspecificoArmamentoById);
  
      Routes.post('/nfedetespecificoarmamento', verifyToken, Controller.insertNfeDetEspecificoArmamento);

      Routes.put('/nfedetespecificoarmamento/:Id', verifyToken, Controller.updateNfeDetEspecificoArmamento);
  
      Routes.delete('/nfedetespecificoarmamento/:Id', verifyToken, Controller.deleteNfeDetEspecificoArmamento);
    }
}
  
export default new NfeDetEspecificoArmamentoRoute();