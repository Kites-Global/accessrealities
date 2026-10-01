import { floorPlanExists } from "@/lib/admin/storage";
import { towerLabel } from "@/lib/floorPlans";
import FloorPlanUploadForm from "./FloorPlanUploadForm";

export const dynamic = "force-dynamic";

export default async function AdminFloorPlansPage() {
  const [northUploaded, southUploaded] = await Promise.all([floorPlanExists("north"), floorPlanExists("south")]);

  return (
    <>
      <div className="admin-topbar">
        <h1>Floor Plans</h1>
      </div>

      <div className="admin-card" style={{ maxWidth: "420px" }}>
        <h3 style={{ marginTop: 0 }}>{towerLabel("north")}</h3>
        <FloorPlanUploadForm tower="north" uploaded={northUploaded} />
      </div>

      <div className="admin-card" style={{ maxWidth: "420px" }}>
        <h3 style={{ marginTop: 0 }}>{towerLabel("south")}</h3>
        <FloorPlanUploadForm tower="south" uploaded={southUploaded} />
      </div>
    </>
  );
}
