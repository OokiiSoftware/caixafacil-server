import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/ecf_documentos_emitidos_controller";

class EcfDocumentosEmitidosRoute {
    allRoutes(Routes: Router) {
      Routes.get("/ecfdocumentosemitidos", verifyToken, Controller.getListEcfDocumentosEmitidos);

      Routes.get('/ecfdocumentosemitidos/:Id', verifyToken, Controller.getEcfDocumentosEmitidosById);
  
      Routes.post('/ecfdocumentosemitidos', verifyToken, Controller.insertEcfDocumentosEmitidos);

      Routes.put('/ecfdocumentosemitidos/:Id', verifyToken, Controller.updateEcfDocumentosEmitidos);
  
      Routes.delete('/ecfdocumentosemitidos/:Id', verifyToken, Controller.deleteEcfDocumentosEmitidos);
    }
}
  
export default new EcfDocumentosEmitidosRoute();