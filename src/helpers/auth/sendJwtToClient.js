const sendJwtToClient = (user, res) => {
    // Generate JWT
    const token = user.generateJwt();

    // Response
    const { JWT_COOKIE_EXPIRES_IN,NODE_ENV } = process.env;

    return res
        .status(200)
        .cookie("access_token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + parseInt(JWT_COOKIE_EXPIRES_IN) * 1000),
            secure: NODE_ENV === "development" ? false : true,
        }).redirect("/");
};


export default sendJwtToClient;