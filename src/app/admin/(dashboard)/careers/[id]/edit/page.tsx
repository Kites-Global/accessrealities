import { notFound } from "next/navigation";
import { prisma } from "@/lib/admin/db";
import { updateVacancy } from "@/lib/admin/actions/vacancies";
import VacancyForm from "../../VacancyForm";

export default async function EditVacancyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const vacancy = await prisma.vacancy.findUnique({ where: { id } });
  if (!vacancy) notFound();

  return (
    <>
      <div className="admin-topbar">
        <h1>Edit Vacancy</h1>
      </div>
      <div className="admin-card">
        <VacancyForm
          action={updateVacancy.bind(null, vacancy.id)}
          defaultValues={{
            title: vacancy.title,
            location: vacancy.location,
            description: vacancy.description,
            isOpen: vacancy.isOpen,
          }}
          submitLabel="Save Changes"
        />
      </div>
    </>
  );
}
