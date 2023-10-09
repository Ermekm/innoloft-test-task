import { type FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/UI/Button";

const Main: FC = () => {
  const productId = "6781";
  return (
    <div className="py-[10px]">
      <Link to={`/product/${productId}/`}>
        <Button className="bg-primary text-white">View Product</Button>
      </Link>
    </div>
  );
};

export default Main;
