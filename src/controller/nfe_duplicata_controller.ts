import { Request, Response } from "express";
import NfeDuplicata from "../services/nfe_duplicata_service";

class NfeDuplicataController {
    
    async getListNfeDuplicata(req: Request, res: Response) {
        try {
            const response = await NfeDuplicata.getListNfeDuplicata();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDuplicataById(req: Request, res: Response) {
        try {
            const response = await NfeDuplicata.getNfeDuplicataById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDuplicata(req: Request, res: Response) {
        try {
            const response = await NfeDuplicata.insertNfeDuplicata(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDuplicata(req: Request, res: Response) {
        try {
            const response = await NfeDuplicata.updateNfeDuplicata(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDuplicata(req: Request, res: Response) {
        try {
            const response = await NfeDuplicata.deleteNfeDuplicata(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDuplicataController();