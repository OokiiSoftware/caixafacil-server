import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_det_especifico_medicamento_controller";

class NfeDetEspecificoMedicamentoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfedetespecificomedicamento", verifyToken, Controller.getListNfeDetEspecificoMedicamento);

      Routes.get('/nfedetespecificomedicamento/:Id', verifyToken, Controller.getNfeDetEspecificoMedicamentoById);
  
      Routes.post('/nfedetespecificomedicamento', verifyToken, Controller.insertNfeDetEspecificoMedicamento);

      Routes.put('/nfedetespecificomedicamento/:Id', verifyToken, Controller.updateNfeDetEspecificoMedicamento);
  
      Routes.delete('/nfedetespecificomedicamento/:Id', verifyToken, Controller.deleteNfeDetEspecificoMedicamento);
    }
}
  
export default new NfeDetEspecificoMedicamentoRoute();