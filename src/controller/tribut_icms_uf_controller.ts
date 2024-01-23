import { Request, Response } from "express";
import TributIcmsUf from "../services/tribut_icms_uf_service";

class TributIcmsUfController {
    
    async getListTributIcmsUf(req: Request, res: Response) {
        try {
            const response = await TributIcmsUf.getListTributIcmsUf();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getTributIcmsUfById(req: Request, res: Response) {
        try {
            const response = await TributIcmsUf.getTributIcmsUfById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertTributIcmsUf(req: Request, res: Response) {
        try {
            const response = await TributIcmsUf.insertTributIcmsUf(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateTributIcmsUf(req: Request, res: Response) {
        try {
            const response = await TributIcmsUf.updateTributIcmsUf(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteTributIcmsUf(req: Request, res: Response) {
        try {
            const response = await TributIcmsUf.deleteTributIcmsUf(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new TributIcmsUfController();