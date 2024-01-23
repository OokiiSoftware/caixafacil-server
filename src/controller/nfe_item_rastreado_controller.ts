import { Request, Response } from "express";
import NfeItemRastreado from "../services/nfe_item_rastreado_service";

class NfeItemRastreadoController {
    
    async getListNfeItemRastreado(req: Request, res: Response) {
        try {
            const response = await NfeItemRastreado.getListNfeItemRastreado();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeItemRastreadoById(req: Request, res: Response) {
        try {
            const response = await NfeItemRastreado.getNfeItemRastreadoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeItemRastreado(req: Request, res: Response) {
        try {
            const response = await NfeItemRastreado.insertNfeItemRastreado(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeItemRastreado(req: Request, res: Response) {
        try {
            const response = await NfeItemRastreado.updateNfeItemRastreado(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeItemRastreado(req: Request, res: Response) {
        try {
            const response = await NfeItemRastreado.deleteNfeItemRastreado(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeItemRastreadoController();