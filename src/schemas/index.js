import * as Yup from "yup";

export const SignUpSchemas=Yup.object({
    username:Yup.string().min(2).max(20).required("Name is required field"),
    email:Yup.string().email().required("Email is required field"),
    password:Yup.string().min(6).required("password is required field"),
    confirm_password:Yup.string().min(6).required().oneOf([Yup.ref("password"),null],"password must match")
})

