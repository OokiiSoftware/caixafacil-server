import { Request, Response } from "express";
import NfeCanaDeducoesSafra from "../services/nfe_cana_deducoes_safra_service";

class NfeCanaDeducoesSafraController {
    
    async getListNfeCanaDeducoesSafra(req: Request, res: Response) {
        try {
            const response = await NfeCanaDeducoesSafra.getListNfeCanaDeducoesSafra();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeCanaDeducoesSafraById(req: Request, res: Response) {
        try {
            const response = await NfeCanaDeducoesSafra.getNfeCanaDeducoesSafraById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeCanaDeducoesSafra(req: Request, res: Response) {
        try {
            const response = await NfeCanaDeducoesSafra.insertNfeCanaDeducoesSafra(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeCanaDeducoesSafra(req: Request, res: Response) {
        try {
            const response = await NfeCanaDeducoesSafra.updateNfeCanaDeducoesSafra(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeCanaDeducoesSafra(req: Request, res: Response) {
        try {
            const response = await NfeCanaDeducoesSafra.deleteNfeCanaDeducoesSafra(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeCanaDeducoesSafraController();