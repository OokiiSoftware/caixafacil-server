import { Request, Response } from "express";
import NfeAcessoXml from "../services/nfe_acesso_xml_service";

class NfeAcessoXmlController {
    
    async getListNfeAcessoXml(req: Request, res: Response) {
        try {
            const response = await NfeAcessoXml.getListNfeAcessoXml();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfeAcessoXmlById(req: Request, res: Response) {
        try {
            const response = await NfeAcessoXml.getNfeAcessoXmlById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfeAcessoXml(req: Request, res: Response) {
        try {
            const response = await NfeAcessoXml.insertNfeAcessoXml(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfeAcessoXml(req: Request, res: Response) {
        try {
            const response = await NfeAcessoXml.updateNfeAcessoXml(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfeAcessoXml(req: Request, res: Response) {
        try {
            const response = await NfeAcessoXml.deleteNfeAcessoXml(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfeAcessoXmlController();