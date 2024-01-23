import { Request, Response } from "express";
import PdvMovimento from "../services/pdv_movimento_service";

class PdvMovimentoController {
    
    async getListPdvMovimento(req: Request, res: Response) {
        try {
            const response = await PdvMovimento.getListPdvMovimento();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getPdvMovimentoById(req: Request, res: Response) {
        try {
            const response = await PdvMovimento.getPdvMovimentoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertPdvMovimento(req: Request, res: Response) {
        try {
            const response = await PdvMovimento.insertPdvMovimento(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updatePdvMovimento(req: Request, res: Response) {
        try {
            const response = await PdvMovimento.updatePdvMovimento(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deletePdvMovimento(req: Request, res: Response) {
        try {
            const response = await PdvMovimento.deletePdvMovimento(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new PdvMovimentoController();