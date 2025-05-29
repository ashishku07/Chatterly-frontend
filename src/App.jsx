import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/Home";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Requests from "./components/Requests";
import Connections from "./components/Connections";

import { BASE_URL } from "./utils/constants";
import { addUser } from "./utils/userSlice";

import Chat from "./components/Chat";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.get(BASE_URL + "/profile/view", {
          withCredentials: true,
        });
        dispatch(addUser(res.data)); // store user in Redux
      } catch (err) {
        console.log("User not logged in or session expired");
        dispatch(addUser(null)); // optional fallback
      }
    };

    checkLogin();
  }, [dispatch]);

  return (
    <div
      data-theme="business"
      className="min-h-screen flex flex-col bg-base-100 text-base-content"
    >
      <Router>
        <NavBar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/chat/:targetUserId" element={<Chat />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
