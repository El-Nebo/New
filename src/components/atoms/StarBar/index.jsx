import Star from "../Star";
import classNames from "classnames";
const StarBar = ({count,color="#e59819",size="20", className=""}) =>{
    let bar = Array(count).fill(true).concat(Array(5-count).fill(false));
    return(
        <div className={classNames("flex flex-row",className)}>
            {bar.map((x,idx)=><Star isOn={x} key={idx} color={color} size={size}/>)}
        </div>
    );
}
export default StarBar;