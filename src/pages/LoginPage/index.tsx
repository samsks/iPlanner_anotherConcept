import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import InputComponent from "../../components/InputComponent";
import { iDataLogin, AuthContext } from "../../contexts/AuthContext";
import { formLoginSchema } from "../../validation";
import { StyledPageContainer } from "./style";
import group from "../../assets/icons/group.svg";
import { StyledButton } from "../../styles/button";

const Login = () => {
  const { loginError, handleLogin } = useContext(AuthContext);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataLogin>({
    resolver: yupResolver(formLoginSchema),
  });

  const onLoginFunction = (dataForm: iDataLogin) => {
    handleLogin(dataForm, () => {
      reset();
    });
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
      <StyledPageContainer>
        <div className="formLoginDiv">
          <div className="containerFormLoginDiv">
            <div className="divLogo">
              <img id="iplannerIconLogo" src={group} alt="IPlanner Logo" />
            </div>
            <div className="divPadding">
              <form className="formlogin" onSubmit={handleSubmit(onLoginFunction)}>
                <div className="inputsArea">
                  <InputComponent
                    type="email"
                    placeholder="e-mail"
                    register={() => register("email")}
                    helperText={errors.email?.message || (loginError?.toLowerCase().includes("usuário") && loginError)}
                  />
                  <InputComponent
                    type="password"
                    placeholder="senha"
                    register={() => register("password")}
                    helperText={errors.password?.message || (loginError?.toLowerCase().includes("senha") && loginError)}
                  />
                </div>
                <p className="text-3">ainda não possui uma conta ?</p>
                <Link className="text-3-blue" to={"/register"}>
                  cadastre-se aqui
                </Link>
                <StyledButton type="submit" className="button-submit">
                  entrar
                </StyledButton>
              </form>
            </div>
          </div>
        </div>
      </StyledPageContainer>
    </motion.div>
  );
};

export default Login;
