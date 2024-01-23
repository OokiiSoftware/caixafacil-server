import { Request, Response } from "express";
import TributIpi from "../services/tribut_ipi_service";

class TributIpiController {
    
    async getListTributIpi(req: Request, res: Response) {
        try {
            const response = await TributIpi.getListTributIpi();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getTributIpiById(req: Request, res: Response) {
        try {
            const response = await TributIpi.getTributIpiById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertTributIpi(req: Request, res: Response) {
        try {
            const response = await TributIpi.insertTributIpi(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateTributIpi(req: Request, res: Response) {
        try {
            const response = await TributIpi.updateTributIpi(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteTributIpi(req: Request, res: Response) {
        try {
            const response = await TributIpi.deleteTributIpi(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new TributIpiController();