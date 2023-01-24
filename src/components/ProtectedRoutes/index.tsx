import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const ProtectedRoutes = () => {
  const { userData, setCurrentRoute } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.email) {
      const pathname = window.location.pathname;
      if (pathname !== "/") {
        setCurrentRoute(pathname);
      }
      navigate("/");
    }
  }, []);

  return <>{userData.email && <Outlet />}</>;
};

export default ProtectedRoutes;
