import { Request, Response } from "express";
import PdvFechamento from "../services/pdv_fechamento_service";

class PdvFechamentoController {
    
    async getListPdvFechamento(req: Request, res: Response) {
        try {
            const response = await PdvFechamento.getListPdvFechamento();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getPdvFechamentoById(req: Request, res: Response) {
        try {
            const response = await PdvFechamento.getPdvFechamentoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertPdvFechamento(req: Request, res: Response) {
        try {
            const response = await PdvFechamento.insertPdvFechamento(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updatePdvFechamento(req: Request, res: Response) {
        try {
            const response = await PdvFechamento.updatePdvFechamento(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deletePdvFechamento(req: Request, res: Response) {
        try {
            const response = await PdvFechamento.deletePdvFechamento(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new PdvFechamentoController();