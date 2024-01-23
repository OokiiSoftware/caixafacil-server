import { Request, Response } from "express";
import NfeNfReferenciada from "../services/nfe_nf_referenciada_service";

class NfeNfReferenciadaController {
    
    async getListNfeNfReferenciada(req: Request, res: Response) {
        try {
            const response = await NfeNfReferenciada.getListNfeNfReferenciada();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeNfReferenciadaById(req: Request, res: Response) {
        try {
            const response = await NfeNfReferenciada.getNfeNfReferenciadaById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeNfReferenciada(req: Request, res: Response) {
        try {
            const response = await NfeNfReferenciada.insertNfeNfReferenciada(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeNfReferenciada(req: Request, res: Response) {
        try {
            const response = await NfeNfReferenciada.updateNfeNfReferenciada(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeNfReferenciada(req: Request, res: Response) {
        try {
            const response = await NfeNfReferenciada.deleteNfeNfReferenciada(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeNfReferenciadaController();