import { Request, Response } from "express";
import NfeProdRuralReferenciada from "../services/nfe_prod_rural_referenciada_service";

class NfeProdRuralReferenciadaController {
    
    async getListNfeProdRuralReferenciada(req: Request, res: Response) {
        try {
            const response = await NfeProdRuralReferenciada.getListNfeProdRuralReferenciada();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeProdRuralReferenciadaById(req: Request, res: Response) {
        try {
            const response = await NfeProdRuralReferenciada.getNfeProdRuralReferenciadaById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeProdRuralReferenciada(req: Request, res: Response) {
        try {
            const response = await NfeProdRuralReferenciada.insertNfeProdRuralReferenciada(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeProdRuralReferenciada(req: Request, res: Response) {
        try {
            const response = await NfeProdRuralReferenciada.updateNfeProdRuralReferenciada(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeProdRuralReferenciada(req: Request, res: Response) {
        try {
            const response = await NfeProdRuralReferenciada.deleteNfeProdRuralReferenciada(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeProdRuralReferenciadaController();