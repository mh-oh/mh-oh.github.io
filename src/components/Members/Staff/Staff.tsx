import { Member, Members } from "../Member";
import { staff } from "@/data/members/staff";

export function Staff() {
  return (
    <Members members={staff.map((member) =>
      <Member
        src={member.image}
        name={member.name}
        info={member.role}
        email={member.email}
      />
    )}/>
  );
}