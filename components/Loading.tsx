import Ornament from "./ui/Ornament";
import "/public/css/loading.css";
const Loading = () => {
  return (
    <div className="loading">
      <span id="loading_orn">
        <Ornament width={200} height={200} />
      </span>
    </div>
  );
};
export default Loading;
