import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();

  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();

      navigate("/login");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">
          Welcome, {currentUser?.displayName || currentUser?.email || "User"}!
        </h1>

        <p className="home-subtitle">
          You have successfully logged in to your account.
        </p>

        <div className="user-info-card">
          <h2 className="user-info-title">Account Information</h2>

          <div className="user-info-item">
            <span className="user-info-label">Email:</span>
            <span className="user-info-value">{currentUser?.email}</span>
          </div>

          <div className="user-info-item">
            <span className="user-info-label">User ID:</span>
            <span className="user-info-value">{currentUser?.uid}</span>
          </div>

          {currentUser?.displayName && (
            <div className="user-info-item">
              <span className="user-info-label">Display Name:</span>
              <span className="user-info-value">
                {currentUser?.displayName}
              </span>
            </div>
          )}
        </div>

        <button onClick={handleLogout} className="logout-button">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Home;
