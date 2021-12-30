import React from 'react';
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Login from "./components/login";
import Reg from "./components/reg";
import Page404 from "./components/page404";
import "./app.css"
import MainPage from "./components/mainPage";
import AuthProvider from "./components/authProvider";
import RequireAuth from "./components/requireAuth";
import InfoPage from "./components/infoPage";
import DeletePage from "./components/deletePage";


interface AuthContextType {
    user: any;
    signin: (user: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

export let AuthContext = React.createContext<AuthContextType>(null!);


function App() {


  return (
    <div className="App">
      <AuthProvider>
         <Nav/>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="info" element={<InfoPage/>} />
                <Route path="login" element={<Login/>} />
                <Route path="reg" element={<Reg/>} />
                <Route path="/main"
                    element={
                        <RequireAuth>
                            <MainPage />
                        </RequireAuth>
                    }
                />
                <Route path="/delete"
                       element={
                           <RequireAuth>
                               <DeletePage />
                           </RequireAuth>
                       }
                />
                <Route path="*" element={<Page404/>} />
            </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
