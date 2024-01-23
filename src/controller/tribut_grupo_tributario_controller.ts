import { Request, Response } from "express";
import TributGrupoTributario from "../services/tribut_grupo_tributario_service";

class TributGrupoTributarioController {
    
    async getListTributGrupoTributario(req: Request, res: Response) {
        try {
            const response = await TributGrupoTributario.getListTributGrupoTributario();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getTributGrupoTributarioById(req: Request, res: Response) {
        try {
            const response = await TributGrupoTributario.getTributGrupoTributarioById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertTributGrupoTributario(req: Request, res: Response) {
        try {
            const response = await TributGrupoTributario.insertTributGrupoTributario(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateTributGrupoTributario(req: Request, res: Response) {
        try {
            const response = await TributGrupoTributario.updateTributGrupoTributario(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteTributGrupoTributario(req: Request, res: Response) {
        try {
            const response = await TributGrupoTributario.deleteTributGrupoTributario(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new TributGrupoTributarioController();