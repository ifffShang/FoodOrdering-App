import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handleValidationErrors = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a string"),
    body("addressLine1")
        .isString()
        .notEmpty()
        .withMessage("AddressLine1 must be a string"),
    body("city").isString().notEmpty().withMessage("City must be a string"),
    body("country").isString().notEmpty().withMessage("Country must be a string"),
    handleValidationErrors,
];


// import {body, validationResult} from "express-validator"
// import {NextFunction, Response,Request} from "express";
// const handleValidationErrors = async (
//     req:Request,res: Response,next: NextFunction) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         // @ts-ignore
//         return res.status(400).json({errors: errors.array()})
//     }
//     next();
//
// }
//
// export const validateMyUserRequest = [
//     body("name").isString().notEmpty().withMessage("Name must be a string"),
//     body("addressLine1").isString().notEmpty().withMessage("AddressLine1 must be a string"),
//     body("city").isString().notEmpty().withMessage("City must be a string"),
//     body("Country").isString().notEmpty().withMessage("Country must be a string"),
//     handleValidationErrors,
//
// ];
