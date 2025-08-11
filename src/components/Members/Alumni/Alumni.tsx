import { Member, Members } from "../Member";
import { alumni } from "@/data/members/alumni";

export function Alumni() {
  return (
    <Members members={alumni.map((member) =>
      <Member
        src={member.image}
        name={member.name}
        info={<>{member.course} - {member.graduate}</>}
        email={member.email}
        href={member.website}
        more_info={member.status}
      />
    )}/>
  );
}