import { Request, Response } from "express";
import EcfRecebimentoNaoFiscal from "../services/ecf_recebimento_nao_fiscal_service";

class EcfRecebimentoNaoFiscalController {
    
    async getListEcfRecebimentoNaoFiscal(req: Request, res: Response) {
        try {
            const response = await EcfRecebimentoNaoFiscal.getListEcfRecebimentoNaoFiscal();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEcfRecebimentoNaoFiscalById(req: Request, res: Response) {
        try {
            const response = await EcfRecebimentoNaoFiscal.getEcfRecebimentoNaoFiscalById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEcfRecebimentoNaoFiscal(req: Request, res: Response) {
        try {
            const response = await EcfRecebimentoNaoFiscal.insertEcfRecebimentoNaoFiscal(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEcfRecebimentoNaoFiscal(req: Request, res: Response) {
        try {
            const response = await EcfRecebimentoNaoFiscal.updateEcfRecebimentoNaoFiscal(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEcfRecebimentoNaoFiscal(req: Request, res: Response) {
        try {
            const response = await EcfRecebimentoNaoFiscal.deleteEcfRecebimentoNaoFiscal(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EcfRecebimentoNaoFiscalController();