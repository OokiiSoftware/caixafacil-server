import { Request, Response } from "express";
import TributOperacaoFiscal from "../services/tribut_operacao_fiscal_service";

class TributOperacaoFiscalController {
    
    async getListTributOperacaoFiscal(req: Request, res: Response) {
        try {
            const response = await TributOperacaoFiscal.getListTributOperacaoFiscal();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getTributOperacaoFiscalById(req: Request, res: Response) {
        try {
            const response = await TributOperacaoFiscal.getTributOperacaoFiscalById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertTributOperacaoFiscal(req: Request, res: Response) {
        try {
            const response = await TributOperacaoFiscal.insertTributOperacaoFiscal(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateTributOperacaoFiscal(req: Request, res: Response) {
        try {
            const response = await TributOperacaoFiscal.updateTributOperacaoFiscal(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteTributOperacaoFiscal(req: Request, res: Response) {
        try {
            const response = await TributOperacaoFiscal.deleteTributOperacaoFiscal(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new TributOperacaoFiscalController();