import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/tribut_grupo_tributario_controller";

class TributGrupoTributarioRoute {
    allRoutes(Routes: Router) {
      Routes.get("/tributgrupotributario", verifyToken, Controller.getListTributGrupoTributario);

      Routes.get('/tributgrupotributario/:Id', verifyToken, Controller.getTributGrupoTributarioById);
  
      Routes.post('/tributgrupotributario', verifyToken, Controller.insertTributGrupoTributario);

      Routes.put('/tributgrupotributario/:Id', verifyToken, Controller.updateTributGrupoTributario);
  
      Routes.delete('/tributgrupotributario/:Id', verifyToken, Controller.deleteTributGrupoTributario);
    }
}
  
export default new TributGrupoTributarioRoute();