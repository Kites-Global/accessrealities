import { createVacancy } from "@/lib/admin/actions/vacancies";
import VacancyForm from "../VacancyForm";

export default function NewVacancyPage() {
  return (
    <>
      <div className="admin-topbar">
        <h1>New Vacancy</h1>
      </div>
      <div className="admin-card">
        <VacancyForm action={createVacancy} submitLabel="Create Vacancy" />
      </div>
    </>
  );
}
