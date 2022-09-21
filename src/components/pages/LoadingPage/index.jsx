import { Oval } from "react-loader-spinner";
export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <Oval
        height={250}
        width={250}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
      <span className="text-4xl font-bold font-mono text-[#4fa94d]">
        Fetching Data...
      </span>
    </div>
  );
}
