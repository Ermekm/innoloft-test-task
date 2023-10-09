import { type FC, useEffect, useState, type ChangeEvent } from "react";
import { CompanyDescription } from "../components/CompanyDescription";
import { Button } from "../components/UI/Button";
import { Link } from "react-router-dom";
import patent from "../assets/icons/patent.svg";
import { Editor } from "../components/Editor/Editor";
import { Input } from "../components/UI/Input";
import { EditOfferDetails } from "../components/EditOfferDetails";
import {
  type ITrl,
  type IBusinessModel,
  type ICategory,
  type IProduct,
} from "../types/Product";
import ProductService from "../api/services/ProductService";

export const EditProduct: FC = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchProduct();
  }, []);

  function fetchProduct(): void {
    setIsLoading(true);
    ProductService.getOne(6781)
      .then((res) => {
        setProduct(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>): void {
    setProduct((prev) => {
      const productCopy = Object.assign({}, prev);
      productCopy.name = e.target.value;
      return productCopy;
    });
  }

  function handleVideoChange(e: ChangeEvent<HTMLInputElement>): void {
    setProduct((prev) => {
      const productCopy = Object.assign({}, prev);
      productCopy.video = e.target.value;
      return productCopy;
    });
  }

  function handleDescriptionChange(description: string): void {
    setProduct((prev) => {
      const productCopy = Object.assign({}, prev);
      productCopy.description = description;
      return productCopy;
    });
  }

  function handleCategoryChange(categories: ICategory[]): void {
    setProduct((prev) => {
      const productCopy = Object.assign({}, prev);
      productCopy.categories = categories;
      return productCopy;
    });
  }

  function handleBusinessModelsChange(businessModels: IBusinessModel[]): void {
    setProduct((prev) => {
      const productCopy = Object.assign({}, prev);
      productCopy.businessModels = businessModels;
      return productCopy;
    });
  }
  function handleActiveTrlChange(trl: ITrl | null): void {
    setProduct((prev) => {
      const productCopy = Object.assign({}, prev);
      productCopy.trl = trl;
      return productCopy;
    });
  }
  function handleCostsChange(cost: string): void {
    setProduct((prev) => {
      const productCopy = Object.assign({}, prev);
      productCopy.investmentEffort = cost;
      return productCopy;
    });
  }

  function updateProduct(): void {
    console.log(product)
    if (product !== null) {
      ProductService.update(product)
        .then((res) => {
          console.log(res);
        })
        .catch(() => {});
    }
  }

  if (error !== null) return <div>{error}</div>;
  else if (isLoading || product === null) return <div>Loading ...</div>;

  return (
    <div className="pb-[20px] p-[10px] xl:p-[0]">
      <div className="flex my-[20px] gap-[20px] flex-col justify-between md:flex-row">
        <div>Offer title</div>
        <div>
          <Link to={`/product/${product.id}`}>
            <Button className="bg-primary text-white">View Offer</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col md:flex-row">
          <div>
            {/* image start */}
            <div className="relative rounded-tl-md overflow-hidden">
              <div className="">
                <img
                  className="w-[100%]"
                  src={product.picture}
                  alt="product_img "
                />
              </div>
              <div className="flex absolute top-0 left-0  rounded-br-md overflow-hidden">
                <div className="bg-primary w-[40px] flex justify-center items-center">
                  <img src={patent} alt="" />
                </div>
                <div className="bg-white text-[16px] text-accent-t font-semibold px-[10px] py-[8px]">
                  {product.type.name}
                </div>
              </div>
            </div>
            {/* image end */}

            {/* text-start  */}
            <div className="px-[10px] py-[20px] md:px-[20px]">
              <h4 className="text-accent-t font-semibold pb-[10px]">
                <Input value={product.name} onChange={handleNameChange} />
              </h4>
              <Editor
                content={product.description}
                onContentChange={handleDescriptionChange}
              />
            </div>
            {/* text-end */}
          </div>
          <div className="w-[100%] md:w-[380px] flex-none flex gap-[10px] flex-col px-[10px] py-[20px] md:px-[20px]">
            <div className="font-semibold">Offered By</div>
            <CompanyDescription
              user={product.user}
              company={product.company}
              hideMap={true}
            />
          </div>
        </div>

        {/* video start */}
        <div className="px-[10px] py-[20px] md:px-[20px]">
          <h4 className="font-semibold text-[16px] mb-[20px]">Video</h4>
          <Input
            placeholder="Add a youtube or vimoe link"
            value={product.video}
            onChange={handleVideoChange}
          />
        </div>
        {/* video end */}

        {/* offer start */}
        <div className="md:px-[20px] md:py-[30px] px-[10px] py-[20px]">
          <h4 className="text-[16px] font-semibold text-accent-t mb-[20px]">
            Offer details
          </h4>
          <EditOfferDetails
            categories={product.categories}
            businessModels={product.businessModels}
            activeTrlId={product.trl?.id ?? null}
            costs={product.investmentEffort}
            onCategoriesChange={handleCategoryChange}
            onBusinessModelsChange={handleBusinessModelsChange}
            onActiveTrlChange={handleActiveTrlChange}
            onCostsChange={handleCostsChange}
          />
        </div>
        {/* offer end */}
        <Button onClick={updateProduct} className="bg-primary text-white">
          Save
        </Button>
        <Link to={`/product/6781/`}>
          <Button className="w-[100%]">Cancel</Button>
        </Link>
      </div>
    </div>
  );
};
