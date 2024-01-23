import { Request, Response } from "express";
import EcfSintegra60a from "../services/ecf_sintegra_60a_service";

class EcfSintegra60aController {
    
    async getListEcfSintegra60a(req: Request, res: Response) {
        try {
            const response = await EcfSintegra60a.getListEcfSintegra60a();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEcfSintegra60aById(req: Request, res: Response) {
        try {
            const response = await EcfSintegra60a.getEcfSintegra60aById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEcfSintegra60a(req: Request, res: Response) {
        try {
            const response = await EcfSintegra60a.insertEcfSintegra60a(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEcfSintegra60a(req: Request, res: Response) {
        try {
            const response = await EcfSintegra60a.updateEcfSintegra60a(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEcfSintegra60a(req: Request, res: Response) {
        try {
            const response = await EcfSintegra60a.deleteEcfSintegra60a(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EcfSintegra60aController();