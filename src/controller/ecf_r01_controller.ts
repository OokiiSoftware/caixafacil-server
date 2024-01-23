import { Request, Response } from "express";
import EcfR01 from "../services/ecf_r01_service";

class EcfR01Controller {
    
    async getListEcfR01(req: Request, res: Response) {
        try {
            const response = await EcfR01.getListEcfR01();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEcfR01ById(req: Request, res: Response) {
        try {
            const response = await EcfR01.getEcfR01ById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEcfR01(req: Request, res: Response) {
        try {
            const response = await EcfR01.insertEcfR01(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEcfR01(req: Request, res: Response) {
        try {
            const response = await EcfR01.updateEcfR01(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEcfR01(req: Request, res: Response) {
        try {
            const response = await EcfR01.deleteEcfR01(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EcfR01Controller();