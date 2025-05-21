import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div
      data-theme="business"
      className="min-h-screen flex flex-col bg-base-100 text-base-content"
    >
      <Router>
        <NavBar />

        {/* This will grow to fill the space between navbar and footer */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/connections" element={<Connections />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
      </Router>
    </div>
  );
}

export function TestComponent() {
  return (
    <div className="p-4 bg-primary text-primary-content">
      This is a test component with the "business" theme.
    </div>
  );
}

export default App;
