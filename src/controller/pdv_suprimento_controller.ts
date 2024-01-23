import { Request, Response } from "express";
import PdvSuprimento from "../services/pdv_suprimento_service";

class PdvSuprimentoController {
    
    async getListPdvSuprimento(req: Request, res: Response) {
        try {
            const response = await PdvSuprimento.getListPdvSuprimento();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getPdvSuprimentoById(req: Request, res: Response) {
        try {
            const response = await PdvSuprimento.getPdvSuprimentoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertPdvSuprimento(req: Request, res: Response) {
        try {
            const response = await PdvSuprimento.insertPdvSuprimento(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updatePdvSuprimento(req: Request, res: Response) {
        try {
            const response = await PdvSuprimento.updatePdvSuprimento(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deletePdvSuprimento(req: Request, res: Response) {
        try {
            const response = await PdvSuprimento.deletePdvSuprimento(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new PdvSuprimentoController();