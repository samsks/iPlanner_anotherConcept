import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { StyledButton } from "../../styles/button";
import { motion } from "framer-motion";
import InputComponent from "../../components/InputComponent";
import { StyledPageContainer, Title } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { formRegisterSchema } from "../../validation";
import { useContext } from "react";
import { iDataRegister, AuthContext } from "../../contexts/AuthContext";

const RegisterPage = () => {
  const { registerError, handleRegister } = useContext(AuthContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataRegister>({
    resolver: yupResolver(formRegisterSchema),
    mode: "onChange",
  });

  const onSubmitFunction = (dataForm: iDataRegister) => {
    handleRegister(dataForm, () => {
      reset();
    });
  };

  return (
    <motion.div key="mRegister" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
      <StyledPageContainer>
        <div className="formRegisterDiv">
          <div className="divPadding">
            <div className="divButtonReturn">
              <Link className="buttonReturn" to={"/"}>
                voltar
              </Link>
            </div>
            <Title>Realizar seu Cadastro</Title>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <div className="inputsArea">
                <InputComponent placeholder="nome" register={() => register("name")} helperText={errors.name?.message} type="text" />
                <InputComponent
                  placeholder="e-mail"
                  register={() => register("email")}
                  helperText={errors.email?.message || (registerError?.toLowerCase().includes("email") && registerError)}
                  type="email"
                />
                <InputComponent
                  register={() => register("profileImg")}
                  helperText={errors.profileImg?.message}
                  type="text"
                  placeholder="url da sua imagem de perfil"
                />
                <InputComponent placeholder="senha" register={() => register("password")} helperText={errors.password?.message} type="password" />
                <InputComponent
                  placeholder="confirmar senha"
                  register={() => register("passwordConfirm")}
                  helperText={errors.passwordConfirm?.message}
                  type="password"
                />
              </div>
              <p className="text-3">já possui uma conta?</p>
              <Link to="/" className="text-3-blue">
                faça login
              </Link>
              <StyledButton className="button-submit" type="submit">
                registrar
              </StyledButton>
            </form>
          </div>
        </div>
      </StyledPageContainer>
    </motion.div>
  );
};

export default RegisterPage;
