import bcrypt from 'bcrypt'
import { EncodeToken } from "../utility/TokenUtility.js";
import UserModel from "../model/userModel.js";

export const registerService = async (req) => {
    try {
        let reqBody = req.body;
        reqBody.password = await bcrypt.hash(reqBody.password, 10);
        let existingUser = await UserModel.find({ email: reqBody.email });
        if (existingUser.length > 0) {
            return { status: false, msg: "User exist" };
        }

        let data = await UserModel.create(reqBody);
        return { status: true, data: data, msg: "Register success." };
    } catch (e) {
        return { status: false, error: e };
    }
};

export const loginService = async (req, res) => {
    try {
        let reqBody = req.body;
        let exitingUser = await UserModel.findOne({ email: reqBody.email }).lean();
        if (!exitingUser) {
            return { status: false, msg: "User not found." };
        }
        let matchPassword = await bcrypt.compare(reqBody.password, exitingUser['password']);
        if (!matchPassword) {
            return { status: false, msg: "Wrong Password" };
        }

            let token = EncodeToken(exitingUser.email);

            // Set cookie
            let options = {
                maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
                httpOnly: false, // False means allow cookies in all browsers
                sameSite: "none",
                secure: true,
                path: "/",
            };

            res.cookie("token", token, options);
            delete exitingUser.password
            return {status: true, token: token, data: exitingUser, msg: "Login success.",};

    } catch (e) {

        return { status: false, error: e.toString(), msg: "Something went wrong." };
    }
};

export const logoutService = async (req, res) => {
    try {
        res.clearCookie("token");
        return { status: true, msg: "Logout success." };
    } catch (e) {
        return { status: false, error: e };
    }
};
