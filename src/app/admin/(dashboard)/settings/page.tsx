import ChangePasswordForm from "./ChangePasswordForm";

export default function AdminSettingsPage() {
  return (
    <>
      <div className="admin-topbar">
        <h1>Settings</h1>
      </div>
      <div className="admin-card" style={{ maxWidth: "420px" }}>
        <h3 style={{ marginTop: 0 }}>Change password</h3>
        <ChangePasswordForm />
      </div>
    </>
  );
}
