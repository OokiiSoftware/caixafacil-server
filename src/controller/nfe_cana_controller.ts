import { Request, Response } from "express";
import NfeCana from "../services/nfe_cana_service";

class NfeCanaController {
    
    async getListNfeCana(req: Request, res: Response) {
        try {
            const response = await NfeCana.getListNfeCana();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeCanaById(req: Request, res: Response) {
        try {
            const response = await NfeCana.getNfeCanaById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeCana(req: Request, res: Response) {
        try {
            const response = await NfeCana.insertNfeCana(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeCana(req: Request, res: Response) {
        try {
            const response = await NfeCana.updateNfeCana(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeCana(req: Request, res: Response) {
        try {
            const response = await NfeCana.deleteNfeCana(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeCanaController();