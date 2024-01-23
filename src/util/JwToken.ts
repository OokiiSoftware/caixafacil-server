import { Response, NextFunction } from "express";
const jwt = require('jsonwebtoken');

const refreshTokens: string[] = [];

export const genarateToken = (id: number) => {
  return jwt.sign({
      userId: id,
    },
    process.env.SECRET_TOKEN, {
      expiresIn: "15m",
    }
  );
};

export const genarateRefreshToken = (id: number) => {
  const refreshToken = jwt.sign({
      userId: id,
    },
    process.env.REFRESH_TOKEN
  );
  refreshTokens.push(refreshToken);

  return refreshToken;
};

export const updateToken = (req: any, res: Response, next: NextFunction) => {
  const refreshToken = req.headers["refreshtoken"];

  if (refreshToken == null) {
      return res.status(401).json({ auth: false, message: "refreshToken vazio" });
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json({ auth: false, message: "refreshToken inválido" });
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err: Error, decoded: any) => {
    if (err) {
      return res.status(403).json({auth: false, message: "Erro ao gerar novo token: " + err,});
    }

    const index = refreshTokens.indexOf(refreshToken);
    refreshTokens.splice(index, 1);
  
    req.userId = decoded.id;
    next();
  });
}

export const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const token = req.headers["x-acess-token"];
  if (!token) {
    return res.status(401).json({ auth: false, message: "Usuario não possui token" });
  }

  jwt.verify(token, process.env.SECRET_TOKEN, (err: Error, decoded: any) => {
    if (err) {
      res.status(401).json({
        auth: false,
        message: "Sua sessão expirou faça login novamente",
      });
    } else {
      req.userId = decoded.id;
      next();
    }
  });
};

export const deleteToken = (req: any, res: Response, next: NextFunction) => {
  const refreshToken = req.headers["refreshtoken"];

  const index = refreshTokens.indexOf(refreshToken);
  refreshTokens.splice(index, 1);

  res.sendStatus(204);
}