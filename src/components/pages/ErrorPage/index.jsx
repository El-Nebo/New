export default function ErrorPage({err}){
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="font-bold text-3xl text-red-600">{err}</div>
      </div>
    );
}