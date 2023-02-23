const sendJwtToClient = (user, res,route) => {
    // Generate JWT
    const token = user.generateJwt();

    // Response
    const { JWT_COOKIE_EXPIRES_IN,NODE_ENV } = process.env;

    return res
        .status(200)
        .cookie("access_token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + parseInt(JWT_COOKIE_EXPIRES_IN) * 1000*60),
            secure: NODE_ENV === "development"  ? false : true,
        }).redirect(route);
};


const isTokenIncluded = (req) => {
    return (
        req.headers.cookie && req.headers.cookie.startsWith("access_token")
    );
};

const getAccessTokenFromHeader = (req) => {
    const cookie = req.headers.cookie;
    const access_token = cookie.split("=")[1];
    return access_token;
};

export { sendJwtToClient, isTokenIncluded,getAccessTokenFromHeader};