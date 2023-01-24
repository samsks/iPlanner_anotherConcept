import * as yup from "yup";

export const formLoginSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email invalido"),
  password: yup.string().required("Senha obrigatória"),
});

export const formRegisterSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
  password: yup
    .string()
    .required("Senha obrigatoria")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
  passwordConfirm: yup.string().oneOf([yup.ref("password")], "Confirmação de senha igual a senha"),
  profileImg: yup.string(),
});

export const formAlarmSchema = yup.object().shape({
  title: yup.string().required("Titulo obrigatório"),
  time: yup.string().required("Senha obrigatória"),
});

export const newTaskSchema = yup.object().shape({
  title: yup.string().required("Você precisa definir um titulo"),
  content: yup.string(),
});

export const editTaskSchema = yup.object().shape({
  title: yup.string().trim(),
  content: yup.string().trim(),
});

export const newListSchema = yup.object().shape({
  title: yup.string().trim(),
});

export const formAddFinanceSchema = yup.object().shape({
  FitemTitle: yup.string().required("informe a descrição"),
  fitemValue: yup.string().required("informe o valor"),
  fitemType: yup.string(),
  transactionDate: yup.string().required("informe o vencimento"),
});
