import * as  yup from "yup";

export const LoginSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required()
}).required();


export const RegisterSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8).matches(/(?=.*[A-Z])(?=.*[a-z])/, { message: "En az bir küçük bir büyük harf olmalı" }),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Şifreler Eşleşmiyor")
}).required();