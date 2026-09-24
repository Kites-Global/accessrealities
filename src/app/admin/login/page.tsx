import "../admin.css";
import LoginForm from "./LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="admin-login-wrap">
      <div className="admin-login-card">
        <h1>Admin sign in</h1>
        <LoginForm />
      </div>
    </div>
  );
}
