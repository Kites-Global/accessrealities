import "../admin.css";
import Link from "next/link";
import { logout } from "@/lib/admin/actions/auth";

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <Link href="/admin/news">News &amp; Events</Link>
          <Link href="/admin/careers">Careers</Link>
          <Link href="/admin/settings">Settings</Link>
        </nav>
        <form action={logout}>
          <button type="submit" className="admin-sidebar-logout">
            Log out
          </button>
        </form>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
