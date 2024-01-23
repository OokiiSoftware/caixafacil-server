import { Request, Response } from "express";
import Colaborador from "../services/colaborador_service";

class ColaboradorController {
    
    async getListColaborador(req: Request, res: Response) {
        try {
            const response = await Colaborador.getListColaborador();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getColaboradorById(req: Request, res: Response) {
        try {
            const response = await Colaborador.getColaboradorById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertColaborador(req: Request, res: Response) {
        try {
            const response = await Colaborador.insertColaborador(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateColaborador(req: Request, res: Response) {
        try {
            const response = await Colaborador.updateColaborador(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteColaborador(req: Request, res: Response) {
        try {
            const response = await Colaborador.deleteColaborador(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new ColaboradorController();