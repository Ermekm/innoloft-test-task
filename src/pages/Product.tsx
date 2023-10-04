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

export const Product: FC = () => {
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
    <div className="pb-[20px] p-[10px] xl:p-[0]">
      <div className="flex my-[20px] gap-[20px] flex-col justify-between md:flex-row">
        <Breadcrumbs />
        <div>
          <Link to={`/product/edit/${product.id}`}>
            <Button>Edit</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col md:flex-row">
          <ProductDescription
            name={product.name}
            description={product.description}
            picture={product.picture}
          />
          <div className="w-[100%] md:w-[380px] flex-none flex gap-[10px] flex-col px-[10px] py-[20px] md:px-[20px]">
            <div className="font-semibold">Offered By</div>
            <CompanyDescription user={product.user} company={product.company} />
          </div>
        </div>

        {/* video start */}
        <div className="px-[10px] py-[20px] md:px-[20px]">
          <h4 className="font-semibold text-[16px] mb-[20px]">Video</h4>
          <Video src={product.video} />
        </div>
        {/* video end */}

        {/* offer start */}
        <div className="md:px-[20px] md:py-[30px] px-[10px] py-[20px]">
          <h4 className="text-[16px] font-semibold text-accent-t mb-[20px]">
            Offer details
          </h4>
          <OfferDetails
            categories={product.categories}
            businessModels={product.businessModels}
            trl={product.trl}
            costs={product.investmentEffort}
          />
        </div>
        {/* offer end */}
      </div>
    </div>
  );
};
