import { Request, Response } from "express";
import EcfImpressora from "../services/ecf_impressora_service";

class EcfImpressoraController {
    
    async getListEcfImpressora(req: Request, res: Response) {
        try {
            const response = await EcfImpressora.getListEcfImpressora();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEcfImpressoraById(req: Request, res: Response) {
        try {
            const response = await EcfImpressora.getEcfImpressoraById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEcfImpressora(req: Request, res: Response) {
        try {
            const response = await EcfImpressora.insertEcfImpressora(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEcfImpressora(req: Request, res: Response) {
        try {
            const response = await EcfImpressora.updateEcfImpressora(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEcfImpressora(req: Request, res: Response) {
        try {
            const response = await EcfImpressora.deleteEcfImpressora(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EcfImpressoraController();