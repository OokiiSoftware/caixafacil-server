import { Request, Response } from "express";
import NfeFatura from "../services/nfe_fatura_service";

class NfeFaturaController {
    
    async getListNfeFatura(req: Request, res: Response) {
        try {
            const response = await NfeFatura.getListNfeFatura();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeFaturaById(req: Request, res: Response) {
        try {
            const response = await NfeFatura.getNfeFaturaById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeFatura(req: Request, res: Response) {
        try {
            const response = await NfeFatura.insertNfeFatura(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeFatura(req: Request, res: Response) {
        try {
            const response = await NfeFatura.updateNfeFatura(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeFatura(req: Request, res: Response) {
        try {
            const response = await NfeFatura.deleteNfeFatura(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeFaturaController();