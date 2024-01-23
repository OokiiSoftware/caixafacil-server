import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/empresa_segmento_controller";

class EmpresaSegmentoRoute {
    allRoutes(Routes: Router) {
      Routes.get("/empresasegmento", verifyToken, Controller.getListEmpresaSegmento);

      Routes.get('/empresasegmento/:Id', verifyToken, Controller.getEmpresaSegmentoById);
  
      Routes.post('/empresasegmento', verifyToken, Controller.insertEmpresaSegmento);

      Routes.put('/empresasegmento/:Id', verifyToken, Controller.updateEmpresaSegmento);
  
      Routes.delete('/empresasegmento/:Id', verifyToken, Controller.deleteEmpresaSegmento);
    }
}
  
export default new EmpresaSegmentoRoute();