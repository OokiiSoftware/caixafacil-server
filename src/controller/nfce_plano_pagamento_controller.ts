import { Request, Response } from "express";
import NfcePlanoPagamento from "../services/nfce_plano_pagamento_service";

class NfcePlanoPagamentoController {
    
    async getListNfcePlanoPagamento(req: Request, res: Response) {
        try {
            const response = await NfcePlanoPagamento.getListNfcePlanoPagamento();

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getNfcePlanoPagamentoById(req: Request, res: Response) {
        try {
            const response = await NfcePlanoPagamento.getNfcePlanoPagamentoById(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async insertNfcePlanoPagamento(req: Request, res: Response) {
        try {
            const response = await NfcePlanoPagamento.insertNfcePlanoPagamento(req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async updateNfcePlanoPagamento(req: Request, res: Response) {
        try {
            const response = await NfcePlanoPagamento.updateNfcePlanoPagamento(Number(req.params.Id), req.body);

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async deleteNfcePlanoPagamento(req: Request, res: Response) {
        try {
            const response = await NfcePlanoPagamento.deleteNfcePlanoPagamento(Number(req.params.Id));

            res.status(response ? 200 : 500).json(response);
        } catch(e) {
            res.status(500).json(e);
        }
    }

}

export default new NfcePlanoPagamentoController();