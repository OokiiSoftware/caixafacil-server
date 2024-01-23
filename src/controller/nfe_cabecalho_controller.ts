import { Request, Response } from "express";
import NfeCabecalho from "../services/nfe_cabecalho_service";

class NfeCabecalhoController {
    
    async getListNfeCabecalho(req: Request, res: Response) {
        try {
            const response = await NfeCabecalho.getListNfeCabecalho();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeCabecalhoById(req: Request, res: Response) {
        try {
            const response = await NfeCabecalho.getNfeCabecalhoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeCabecalho(req: Request, res: Response) {
        try {
            const response = await NfeCabecalho.insertNfeCabecalho(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeCabecalho(req: Request, res: Response) {
        try {
            const response = await NfeCabecalho.updateNfeCabecalho(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeCabecalho(req: Request, res: Response) {
        try {
            const response = await NfeCabecalho.deleteNfeCabecalho(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeCabecalhoController();