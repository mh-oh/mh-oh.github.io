import { Member, Members } from "../Member";
import { faculty } from "@/data/members/faculty";

export function Faculty() {
  return (
    <Members members={faculty.map((member) =>
      <Member
        src={member.image}
        name={member.name}
        info={member.role}
        email={member.email}
        href={member.website}
      />
    )}/>
  );
}