export default function InstructorList({ children }) {
  return (
    <li>
      <div className="flex flex-row items-center gap-3 py-1 text-sm text-[#1c1d1f]">{children}</div>
    </li>
  );
}
