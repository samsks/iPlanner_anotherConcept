import axios from "axios";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import apiPlanner from "../services/apiPlanner";
import { loadTranslation } from "../services/translateApiResponse";

interface iUserData {
  id: string;
  name: string;
  email: string;
  profileImg: string;
  birthDate: string;
}

export interface iDataLogin {
  email: string;
  password: string;
}

export interface iDataLoginResponseApi {
  accessToken: string;
  user: iUserData;
}

export interface iDataRegister {
  name: string;
  email: string;
  birthDate: string;
  password: string;
  passwordConfirm: string;
  profileImg?: string;
}

interface iAuthContext {
  userData: iUserData;
  setUserData: Dispatch<SetStateAction<iUserData>>;
  currentRoute: string;
  setCurrentRoute: Dispatch<SetStateAction<string>>;
  loginError: string;
  setLoginError: Dispatch<SetStateAction<string>>;
  registerError: string;
  setRegisterError: Dispatch<SetStateAction<string>>;
  handleLogin: (dataForm: iDataLogin, callback: () => void) => Promise<void>;
  handleRegister: (dataForm: iDataRegister, callback: () => void) => Promise<void>;
  logout: () => void;
}

interface iAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as iAuthContext);

const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [userData, setUserData] = useState({} as iUserData);
  const [currentRoute, setCurrentRoute] = useState("");
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();

  const DefaultImageUrl =
    "https://img2.gratispng.com/20180331/eow/kisspng-computer-icons-user-clip-art-user-5abf13db298934.2968784715224718991702.jpg";

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@PROJECTIPLANNER:TOKEN");
      const userId = localStorage.getItem("@PROJECTIPLANNER:USERID");
      if (token && userId) {
        try {
          apiPlanner.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await apiPlanner.get(`/users/${userId}`);
          setUserData(data);
          navigate("/dashboard/home", { replace: true });
        } catch (error) {
          console.error(error);
          localStorage.removeItem("@PROJECTIPLANNER:TOKEN");
          localStorage.removeItem("@PROJECTIPLANNER:USERID");
          setUserData({} as iUserData);
          navigate("/");
        }
      }
    })();
  }, []);

  const handleLogin = async (dataForm: iDataLogin, callback: () => void) => {
    try {
      const { data } = await apiPlanner.post<iDataLoginResponseApi>("/login", dataForm);
      const { accessToken, user } = data;
      localStorage.setItem("@PROJECTIPLANNER:TOKEN", accessToken);
      localStorage.setItem("@PROJECTIPLANNER:USERID", user.id);
      apiPlanner.defaults.headers.common.authorization = `Bearer ${accessToken}`;
      setUserData(user);

      if (callback) {
        callback();
      }

      const myScreen = window.visualViewport?.width as number;
      toast.success(`Bem vindo(a) ${user.name}!`, {
        position: myScreen > 1023 ? "top-right" : "top-center",
        autoClose: 3000,
      });
      setLoginError("");
      navigate(!currentRoute ? "/dashboard/home" : currentRoute, {
        replace: true,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
        const message = error.response?.data;
        const translatedData = await loadTranslation(message);
        setLoginError(translatedData);
        const myScreen = window.visualViewport?.width as number;
        toast.error(translatedData, {
          position: myScreen > 1023 ? "top-right" : "top-center",
          autoClose: 3000,
        });
        setUserData({} as iUserData);
      }
    }
  };

  const handleRegister = async (dataForm: iDataRegister, callback: () => void) => {
    console.log(dataForm);
    let dataNewUser: iDataRegister = dataForm;
    if (!dataForm.profileImg) {
      dataForm.profileImg = DefaultImageUrl;
      console.log(dataForm);
    }

    try {
      await apiPlanner.post("/signup", dataNewUser);
      if (callback) {
        callback();
      }
      const myScreen = window.visualViewport?.width as number;
      toast.success("Conta criada com sucesso!", {
        position: myScreen > 1023 ? "top-right" : "top-center",
        autoClose: 3500,
      });
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data;
        const translatedData = await loadTranslation(message);
        setRegisterError(translatedData);
        const myScreen = window.visualViewport?.width as number;
        toast.error(translatedData, {
          position: myScreen > 1023 ? "top-right" : "top-center",
          autoClose: 3000,
        });
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("@PROJECTIPLANNER:TOKEN");
    localStorage.removeItem("@PROJECTIPLANNER:USERID");
    const myScreen = window.visualViewport?.width as number;
    toast.success("Logout realizado com sucesso", {
      position: myScreen > 1023 ? "top-right" : "top-center",
      autoClose: 3000,
    });
    setUserData({} as iUserData);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        currentRoute,
        setCurrentRoute,
        loginError,
        setLoginError,
        registerError,
        setRegisterError,
        handleLogin,
        handleRegister,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
