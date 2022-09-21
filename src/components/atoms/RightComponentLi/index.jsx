export default function RightComponentLi({children}){
    return (
      <li>
        <div className="flex flex-row items-center gap-4 py-1">
          {children}
        </div>
      </li>
    );
}