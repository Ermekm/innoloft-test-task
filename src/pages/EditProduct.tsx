import { type FC, useEffect } from "react";
import { ProductDescription } from "../components/ProductDescription";
import { CompanyDescription } from "../components/CompanyDescription";
import { Video } from "../components/Video";
import { OfferDetails } from "../components/OfferDetails";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchProduct } from "../store/ActionCreators";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Button } from "../components/UI/Button";
import { Link } from "react-router-dom";

export const EditProduct: FC = () => {
  // const [product, setProduct] = useState<IProduct | null>(null);
  const dispatch = useAppDispatch();
  const { product, isLoading, error } = useAppSelector(
    (state) => state.product,
  );

  useEffect(() => {
    dispatch(fetchProduct(6781)).catch(() => {});
  }, []);

  if (error !== null) return <div>{error}</div>;
  else if (isLoading || product === null) return <div>Loading ...</div>;

  return (
    <div>edit product</div>
  );
};
