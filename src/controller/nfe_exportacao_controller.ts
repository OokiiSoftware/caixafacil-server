import { Request, Response } from "express";
import NfeExportacao from "../services/nfe_exportacao_service";

class NfeExportacaoController {
    
    async getListNfeExportacao(req: Request, res: Response) {
        try {
            const response = await NfeExportacao.getListNfeExportacao();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeExportacaoById(req: Request, res: Response) {
        try {
            const response = await NfeExportacao.getNfeExportacaoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeExportacao(req: Request, res: Response) {
        try {
            const response = await NfeExportacao.insertNfeExportacao(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeExportacao(req: Request, res: Response) {
        try {
            const response = await NfeExportacao.updateNfeExportacao(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeExportacao(req: Request, res: Response) {
        try {
            const response = await NfeExportacao.deleteNfeExportacao(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeExportacaoController();