import { Request, Response } from "express";
import EcfR03 from "../services/ecf_r03_service";

class EcfR03Controller {
    
    async getListEcfR03(req: Request, res: Response) {
        try {
            const response = await EcfR03.getListEcfR03();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getEcfR03ById(req: Request, res: Response) {
        try {
            const response = await EcfR03.getEcfR03ById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertEcfR03(req: Request, res: Response) {
        try {
            const response = await EcfR03.insertEcfR03(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateEcfR03(req: Request, res: Response) {
        try {
            const response = await EcfR03.updateEcfR03(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteEcfR03(req: Request, res: Response) {
        try {
            const response = await EcfR03.deleteEcfR03(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new EcfR03Controller();