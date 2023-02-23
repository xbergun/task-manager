import jwt from "jsonwebtoken";
import { isTokenIncluded, getAccessTokenFromHeader } from "../helpers/auth/tokenHelpers.js";

const checkAccessToRoute = (req, res, next) => {
    const { JWT_SECRET } = process.env;

    if (!isTokenIncluded(req)) {
        return res.status(401).redirect("/");
    }

    const access_token = getAccessTokenFromHeader(req);

    jwt.verify(access_token, JWT_SECRET, (err, decoded) => {

        if (err) {
            return res.status(401).redirect("/");
        }
       
        req.user = {
            id: decoded.id,
            name: decoded.name,
        };
        next();
    });   
}


export default checkAccessToRoute;