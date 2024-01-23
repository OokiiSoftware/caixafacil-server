import { Request, Response } from "express";
import EcfLogTotais from "../services/ecf_log_totais_service";

class EcfLogTotaisController {
    
    async getListEcfLogTotais(req: Request, res: Response) {
        try {
            const response = await EcfLogTotais.getListEcfLogTotais();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEcfLogTotaisById(req: Request, res: Response) {
        try {
            const response = await EcfLogTotais.getEcfLogTotaisById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEcfLogTotais(req: Request, res: Response) {
        try {
            const response = await EcfLogTotais.insertEcfLogTotais(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEcfLogTotais(req: Request, res: Response) {
        try {
            const response = await EcfLogTotais.updateEcfLogTotais(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEcfLogTotais(req: Request, res: Response) {
        try {
            const response = await EcfLogTotais.deleteEcfLogTotais(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EcfLogTotaisController();