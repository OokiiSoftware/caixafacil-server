import { Request, Response } from "express";
import NfeCanaFornecimentoDiario from "../services/nfe_cana_fornecimento_diario_service";

class NfeCanaFornecimentoDiarioController {
    
    async getListNfeCanaFornecimentoDiario(req: Request, res: Response) {
        try {
            const response = await NfeCanaFornecimentoDiario.getListNfeCanaFornecimentoDiario();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeCanaFornecimentoDiarioById(req: Request, res: Response) {
        try {
            const response = await NfeCanaFornecimentoDiario.getNfeCanaFornecimentoDiarioById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeCanaFornecimentoDiario(req: Request, res: Response) {
        try {
            const response = await NfeCanaFornecimentoDiario.insertNfeCanaFornecimentoDiario(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeCanaFornecimentoDiario(req: Request, res: Response) {
        try {
            const response = await NfeCanaFornecimentoDiario.updateNfeCanaFornecimentoDiario(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeCanaFornecimentoDiario(req: Request, res: Response) {
        try {
            const response = await NfeCanaFornecimentoDiario.deleteNfeCanaFornecimentoDiario(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeCanaFornecimentoDiarioController();