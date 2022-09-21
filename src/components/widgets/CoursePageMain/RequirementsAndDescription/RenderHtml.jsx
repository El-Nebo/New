import { useEffect, useRef } from "react"

export default function RenderHtml({data}){
    const ref = useRef(null);
    useEffect(()=>{
        ref.current.innerHTML = data;
    },)
    return <div ref={ref}></div>;
}