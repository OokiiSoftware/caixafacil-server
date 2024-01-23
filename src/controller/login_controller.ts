import { Request, Response } from "express";
import { genarateToken, genarateRefreshToken } from "../util/JwToken";

class LoginController {
    async login(req: Request, res: Response) {
        try {
            const user = req.body.userId;
            const token = genarateToken(user);
            const refreshtoken = genarateRefreshToken(user);

            res.status(200).json({
                'assessToken': token,
                'refreshToken': refreshtoken,
            });
        } catch(e) {
            res.sendStatus(401);
        }
    }
    
    async logout(req: Request, res: Response) {
        try {
            res.sendStatus(204);
        } catch(e) {
            res.sendStatus(401);
        }
    }
}

export default new LoginController();