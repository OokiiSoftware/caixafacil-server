import { Request, Response } from "express";
import EcfR02 from "../services/ecf_r02_service";

class EcfR02Controller {
    
    async getListEcfR02(req: Request, res: Response) {
        try {
            const response = await EcfR02.getListEcfR02();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEcfR02ById(req: Request, res: Response) {
        try {
            const response = await EcfR02.getEcfR02ById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEcfR02(req: Request, res: Response) {
        try {
            const response = await EcfR02.insertEcfR02(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEcfR02(req: Request, res: Response) {
        try {
            const response = await EcfR02.updateEcfR02(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEcfR02(req: Request, res: Response) {
        try {
            const response = await EcfR02.deleteEcfR02(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EcfR02Controller();