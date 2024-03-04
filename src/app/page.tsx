import SingleArray from "@/components/mapsPractice/SingleArray";

import {
  leaderDetails,
  studentDetail,
  teamDetail,
} from "../components/common/Helper";
import ArrayInArray from "@/components/mapsPractice/ArrayInArray";
import LeadersDetail from "@/components/mapsPractice/LeadersDetail";
import CustomInput from "@/components/common/CustomInput";
import ConsultationForm from "@/components/inputForms/ConsultationForm";

export default function Home() {
  return (
    <div>
      <SingleArray studentDetail={studentDetail} />
      <ArrayInArray teamDetail={teamDetail} />
      <LeadersDetail leaderDetails={leaderDetails} />
      <ConsultationForm />
    </div>
  );
}
