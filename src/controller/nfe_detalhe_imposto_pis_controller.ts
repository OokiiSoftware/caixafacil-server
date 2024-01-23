import { Request, Response } from "express";
import NfeDetalheImpostoPis from "../services/nfe_detalhe_imposto_pis_service";

class NfeDetalheImpostoPisController {
    
    async getListNfeDetalheImpostoPis(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoPis.getListNfeDetalheImpostoPis();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeDetalheImpostoPisById(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoPis.getNfeDetalheImpostoPisById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeDetalheImpostoPis(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoPis.insertNfeDetalheImpostoPis(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeDetalheImpostoPis(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoPis.updateNfeDetalheImpostoPis(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeDetalheImpostoPis(req: Request, res: Response) {
        try {
            const response = await NfeDetalheImpostoPis.deleteNfeDetalheImpostoPis(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeDetalheImpostoPisController();