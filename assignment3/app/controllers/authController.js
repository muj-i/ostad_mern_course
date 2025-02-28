import jwt from "jsonwebtoken";

export const generateToken = (req, res) => {
    const payload = { username: "testUser" };
    const secret = process.env.JWT_SECRET || "secretKey";
    const token = jwt.sign(payload, secret, { expiresIn: "1h" });

    res.json({ message: "Token generated successfully!", token });
};

export const postResponse = (req, res) => {
    res.send("I am post body");
};
