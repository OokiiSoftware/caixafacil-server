import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_responsavel_tecnico_controller";

class NfeResponsavelTecnicoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nferesponsaveltecnico", verifyToken, Controller.getListNfeResponsavelTecnico);

      Routes.get('/nferesponsaveltecnico/:Id', verifyToken, Controller.getNfeResponsavelTecnicoById);
  
      Routes.post('/nferesponsaveltecnico', verifyToken, Controller.insertNfeResponsavelTecnico);

      Routes.put('/nferesponsaveltecnico/:Id', verifyToken, Controller.updateNfeResponsavelTecnico);
  
      Routes.delete('/nferesponsaveltecnico/:Id', verifyToken, Controller.deleteNfeResponsavelTecnico);
    }
}
  
export default new NfeResponsavelTecnicoRoute();