import { Request, Response } from "express";
import ContasReceber from "../services/contas_receber_service";

class ContasReceberController {
    
    async getListContasReceber(req: Request, res: Response) {
        try {
            const response = await ContasReceber.getListContasReceber();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getContasReceberById(req: Request, res: Response) {
        try {
            const response = await ContasReceber.getContasReceberById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertContasReceber(req: Request, res: Response) {
        try {
            const response = await ContasReceber.insertContasReceber(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateContasReceber(req: Request, res: Response) {
        try {
            const response = await ContasReceber.updateContasReceber(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteContasReceber(req: Request, res: Response) {
        try {
            const response = await ContasReceber.deleteContasReceber(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new ContasReceberController();