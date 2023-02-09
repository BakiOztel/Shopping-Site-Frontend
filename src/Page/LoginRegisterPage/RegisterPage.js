import { Button } from "react-bootstrap";
import { LoginRegisterPage, LoginRegisterDiv, LoginRegisterBox, LoginRegisterForm } from "../../Components/LoginRegisterComp.js";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../Validation/loginValid.js";
import { useRegisterMutation } from "../../Api/authApi.js";
const RegisterPage = () => {
    const navigate = useNavigate();
    const [registerx, { isLoading }] = useRegisterMutation();
    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        shouldUseNativeValidation: true,
        resolver: yupResolver(RegisterSchema)
    });
    const onSubmit = async (data) => {
        try {
            const x = await registerx({ email: data.email, password: data.password });
            if (x.error === true) {
                setError("email", { type: "custom", message: x.message });
            } else {
                navigate("/login");
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <LoginRegisterPage>
            <LoginRegisterDiv>
                <h2>Register</h2>
                <LoginRegisterForm onSubmit={handleSubmit(onSubmit)}>
                    <LoginRegisterBox>
                        <input placeholder=" "  {...register("email", { required: "doldur lan" })} />
                        <label>Email</label>
                    </LoginRegisterBox>
                    <LoginRegisterBox>
                        <input placeholder=" " type="password"  {...register("password", { required: "doldur lan" })} />
                        <label> Password</label>
                    </LoginRegisterBox>
                    <LoginRegisterBox>
                        <input placeholder=" " type="password"  {...register("confirmPassword", { required: "doldur lan" })} />
                        <label> Confirm Password</label>
                    </LoginRegisterBox>
                    {errors.email && <p>{errors.email.message}</p>}
                    <Button type="submit" variant="outline-dark">let's start</Button>
                </LoginRegisterForm>
            </LoginRegisterDiv>
        </LoginRegisterPage>
    );
}
export default RegisterPage;