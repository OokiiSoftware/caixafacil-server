import { Request, Response } from "express";
import NfeReferenciada from "../services/nfe_referenciada_service";

class NfeReferenciadaController {
    
    async getListNfeReferenciada(req: Request, res: Response) {
        try {
            const response = await NfeReferenciada.getListNfeReferenciada();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeReferenciadaById(req: Request, res: Response) {
        try {
            const response = await NfeReferenciada.getNfeReferenciadaById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeReferenciada(req: Request, res: Response) {
        try {
            const response = await NfeReferenciada.insertNfeReferenciada(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeReferenciada(req: Request, res: Response) {
        try {
            const response = await NfeReferenciada.updateNfeReferenciada(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeReferenciada(req: Request, res: Response) {
        try {
            const response = await NfeReferenciada.deleteNfeReferenciada(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeReferenciadaController();