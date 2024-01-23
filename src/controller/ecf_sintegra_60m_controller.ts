import { Request, Response } from "express";
import EcfSintegra60m from "../services/ecf_sintegra_60m_service";

class EcfSintegra60mController {
    
    async getListEcfSintegra60m(req: Request, res: Response) {
        try {
            const response = await EcfSintegra60m.getListEcfSintegra60m();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEcfSintegra60mById(req: Request, res: Response) {
        try {
            const response = await EcfSintegra60m.getEcfSintegra60mById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEcfSintegra60m(req: Request, res: Response) {
        try {
            const response = await EcfSintegra60m.insertEcfSintegra60m(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEcfSintegra60m(req: Request, res: Response) {
        try {
            const response = await EcfSintegra60m.updateEcfSintegra60m(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEcfSintegra60m(req: Request, res: Response) {
        try {
            const response = await EcfSintegra60m.deleteEcfSintegra60m(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EcfSintegra60mController();