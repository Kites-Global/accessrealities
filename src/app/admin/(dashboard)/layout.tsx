import "../admin.css";
import "../../(site)/globals.css"
import Link from "next/link";
import { logout } from "@/lib/admin/actions/auth";
import { Geist, Geist_Mono, Roboto } from 'next/font/google';


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


const roboto = Roboto(
    {
        variable: "--Roboto",
        subsets: ["latin"],
    }
)

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}>
      <body>
        <div className="admin-shell">
          <aside className="admin-sidebar">
            <h2>Admin Panel</h2>
            <nav>
              <Link href="/admin/news">News &amp; Events</Link>
              <Link href="/admin/careers">Careers</Link>
              <Link href="/admin/floor-plans">Floor Plans</Link>
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
      </body >
    </html>
  );
}
