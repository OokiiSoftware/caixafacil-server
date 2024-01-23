import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_det_especifico_veiculo_controller";

class NfeDetEspecificoVeiculoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfedetespecificoveiculo", verifyToken, Controller.getListNfeDetEspecificoVeiculo);

      Routes.get('/nfedetespecificoveiculo/:Id', verifyToken, Controller.getNfeDetEspecificoVeiculoById);
  
      Routes.post('/nfedetespecificoveiculo', verifyToken, Controller.insertNfeDetEspecificoVeiculo);

      Routes.put('/nfedetespecificoveiculo/:Id', verifyToken, Controller.updateNfeDetEspecificoVeiculo);
  
      Routes.delete('/nfedetespecificoveiculo/:Id', verifyToken, Controller.deleteNfeDetEspecificoVeiculo);
    }
}
  
export default new NfeDetEspecificoVeiculoRoute();