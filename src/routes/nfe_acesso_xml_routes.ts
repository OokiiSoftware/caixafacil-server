import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_acesso_xml_controller";

class NfeAcessoXmlRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfeacessoxml", verifyToken, Controller.getListNfeAcessoXml);

      Routes.get('/nfeacessoxml/:Id', verifyToken, Controller.getNfeAcessoXmlById);
  
      Routes.post('/nfeacessoxml', verifyToken, Controller.insertNfeAcessoXml);

      Routes.put('/nfeacessoxml/:Id', verifyToken, Controller.updateNfeAcessoXml);
  
      Routes.delete('/nfeacessoxml/:Id', verifyToken, Controller.deleteNfeAcessoXml);
    }
}
  
export default new NfeAcessoXmlRoute();