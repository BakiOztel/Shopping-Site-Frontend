import { Button, Container } from "react-bootstrap";
import { LoginRegisterPage, LoginRegisterDiv, LoginRegisterForm, LoginRegisterBox } from "../../Components/LoginRegisterComp.js";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from "../../Validation/loginValid.js";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../Redux/authSlice.js";
import { useLoginMutation } from "../../Api/authApi.js";
const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();
    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        shouldUseNativeValidation: true,
        resolver: yupResolver(LoginSchema),

    });
    const onSubmit = async (data) => {
        try {
            const userData = await login(data).unwrap();
            dispatch(setCredentials({ ...userData }))
            navigate("/");
        } catch (err) {
            setError("email", {
                type: "custom",
                message: err.data.message
            })
        }
    }
    return (
        <Container>
            <LoginRegisterPage>
                <LoginRegisterDiv>
                    <h2>Login</h2>
                    <LoginRegisterForm onSubmit={handleSubmit(onSubmit)}>
                        <LoginRegisterBox>
                            <input placeholder=" "   {...register("email", { required: "please fill" })} />
                            <label>Email</label>
                        </LoginRegisterBox>
                        <LoginRegisterBox>
                            <input placeholder=" " type="password"  {...register("password", { required: "please fill" })} />
                            <label> Password</label>
                        </LoginRegisterBox>
                        <p style={{ color: "red" }}>{errors.email?.message}</p>
                        <Button variant="outline-dark" type="submit">Login</Button>
                        <Link to="/register">
                            <Button variant="outline-dark" >Register</Button>
                        </Link>
                    </LoginRegisterForm>
                </LoginRegisterDiv>
            </LoginRegisterPage>
        </Container>
    );
}
export default LoginPage;