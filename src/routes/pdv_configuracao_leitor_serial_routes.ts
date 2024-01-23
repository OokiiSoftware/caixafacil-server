import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/pdv_configuracao_leitor_serial_controller";

class PdvConfiguracaoLeitorSerialRoute {
    allRoutes(Routes: Router) {
      Routes.get("/pdvconfiguracaoleitorserial", verifyToken, Controller.getListPdvConfiguracaoLeitorSerial);

      Routes.get('/pdvconfiguracaoleitorserial/:Id', verifyToken, Controller.getPdvConfiguracaoLeitorSerialById);
  
      Routes.post('/pdvconfiguracaoleitorserial', verifyToken, Controller.insertPdvConfiguracaoLeitorSerial);

      Routes.put('/pdvconfiguracaoleitorserial/:Id', verifyToken, Controller.updatePdvConfiguracaoLeitorSerial);
  
      Routes.delete('/pdvconfiguracaoleitorserial/:Id', verifyToken, Controller.deletePdvConfiguracaoLeitorSerial);
    }
}
  
export default new PdvConfiguracaoLeitorSerialRoute();