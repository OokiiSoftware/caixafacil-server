import { Router } from "express";
import { verifyToken } from "../util/JwToken";
import Controller from "../controller/nfe_cana_fornecimento_diario_controller";

class NfeCanaFornecimentoDiarioRoute {
    allRoutes(Routes: Router) {
      Routes.get("/nfecanafornecimentodiario", verifyToken, Controller.getListNfeCanaFornecimentoDiario);

      Routes.get('/nfecanafornecimentodiario/:Id', verifyToken, Controller.getNfeCanaFornecimentoDiarioById);
  
      Routes.post('/nfecanafornecimentodiario', verifyToken, Controller.insertNfeCanaFornecimentoDiario);

      Routes.put('/nfecanafornecimentodiario/:Id', verifyToken, Controller.updateNfeCanaFornecimentoDiario);
  
      Routes.delete('/nfecanafornecimentodiario/:Id', verifyToken, Controller.deleteNfeCanaFornecimentoDiario);
    }
}
  
export default new NfeCanaFornecimentoDiarioRoute();