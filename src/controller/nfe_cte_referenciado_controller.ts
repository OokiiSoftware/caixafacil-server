import { Request, Response } from "express";
import NfeCteReferenciado from "../services/nfe_cte_referenciado_service";

class NfeCteReferenciadoController {
    
    async getListNfeCteReferenciado(req: Request, res: Response) {
        try {
            const response = await NfeCteReferenciado.getListNfeCteReferenciado();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeCteReferenciadoById(req: Request, res: Response) {
        try {
            const response = await NfeCteReferenciado.getNfeCteReferenciadoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeCteReferenciado(req: Request, res: Response) {
        try {
            const response = await NfeCteReferenciado.insertNfeCteReferenciado(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeCteReferenciado(req: Request, res: Response) {
        try {
            const response = await NfeCteReferenciado.updateNfeCteReferenciado(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeCteReferenciado(req: Request, res: Response) {
        try {
            const response = await NfeCteReferenciado.deleteNfeCteReferenciado(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeCteReferenciadoController();