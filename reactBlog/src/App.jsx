import { useState } from "react";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
// import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.userAcitve()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout());
        }
      })
      .finally(setLoading(false));
  }, []);

  return !loading ? (
    <>
      <div className="bg-gray-800 w-screen h-screen flex flex-col items-center justify-center text-white">
        <div className="flex flex-col items-center">
          <Header />
          <main>
            <h1>
              hello
            </h1>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : null;
}

export default App;
