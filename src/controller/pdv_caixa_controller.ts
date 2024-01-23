import { Request, Response } from "express";
import PdvCaixa from "../services/pdv_caixa_service";

class PdvCaixaController {
    
    async getListPdvCaixa(req: Request, res: Response) {
        try {
            const response = await PdvCaixa.getListPdvCaixa();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getPdvCaixaById(req: Request, res: Response) {
        try {
            const response = await PdvCaixa.getPdvCaixaById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertPdvCaixa(req: Request, res: Response) {
        try {
            const response = await PdvCaixa.insertPdvCaixa(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updatePdvCaixa(req: Request, res: Response) {
        try {
            const response = await PdvCaixa.updatePdvCaixa(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deletePdvCaixa(req: Request, res: Response) {
        try {
            const response = await PdvCaixa.deletePdvCaixa(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new PdvCaixaController();