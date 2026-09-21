import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/admin/db";

export default async function VacancyApplicationsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const vacancy = await prisma.vacancy.findUnique({
    where: { id },
    include: { applications: { orderBy: { createdAt: "desc" } } },
  });
  if (!vacancy) notFound();

  return (
    <>
      <div className="admin-topbar">
        <h1>Applicants — {vacancy.title}</h1>
        <Link href="/admin/careers" className="admin-btn admin-btn-secondary">
          Back to Careers
        </Link>
      </div>
      <div className="admin-card">
        {vacancy.applications.length === 0 ? (
          <p className="admin-empty">No applications yet.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Applied</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {vacancy.applications.map((application) => (
                <tr key={application.id}>
                  <td>{application.name}</td>
                  <td>{application.phone}</td>
                  <td>{application.email}</td>
                  <td>{application.createdAt.toLocaleDateString()}</td>
                  <td>
                    <a
                      href={application.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="admin-btn admin-btn-secondary"
                    >
                      View CV
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
