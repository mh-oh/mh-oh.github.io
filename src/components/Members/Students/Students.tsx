import { Member, Members } from "../Member";
import { students } from "@/data/members/students";

function Students({ course }) {
  const filtered = students.filter((stud) => stud.course == course);
  return (
    <Members members={filtered.map((member) =>
      <Member
        src={member.image}
        name={member.name}
        info={<>{member.course}, {member.enrollment}</>}
        email={member.email}
        href={member.website}
        more_info={member.interest}
      />
    )}/>
  );
}

export function PhD() {
  return (
    <Students course={"Ph.D."} />
  );
}

export function MS() {
  return (
    <Students course={"M.S."} />
  );
}

export function Combined() {
  return (
    <Students course={"M.S./Ph.D."} />
  );
}