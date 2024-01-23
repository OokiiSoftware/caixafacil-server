import { Request, Response } from "express";
import ContasPagar from "../services/contas_pagar_service";

class ContasPagarController {
    
    async getListContasPagar(req: Request, res: Response) {
        try {
            const response = await ContasPagar.getListContasPagar();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getContasPagarById(req: Request, res: Response) {
        try {
            const response = await ContasPagar.getContasPagarById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertContasPagar(req: Request, res: Response) {
        try {
            const response = await ContasPagar.insertContasPagar(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateContasPagar(req: Request, res: Response) {
        try {
            const response = await ContasPagar.updateContasPagar(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteContasPagar(req: Request, res: Response) {
        try {
            const response = await ContasPagar.deleteContasPagar(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new ContasPagarController();