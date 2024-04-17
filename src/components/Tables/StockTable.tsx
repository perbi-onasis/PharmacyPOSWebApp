import { useEffect, useState } from "react";
import ProductEditFormModel from "../Model/ProductEditFormModel";
import deleteProduct from "../utiles/deleteProductRecords";
import { ProductProp } from "@/types/productProp";
import useFetchData from "@/hooks/useFetchData";

interface StockProductProps {
  deleteProduct: (id: any) => void;
  productItems: ProductProp[];
}

const StocksTable: React.FC<StockProductProps> = ({
  deleteProduct,
  productItems,
}) => {
  const [getProductItem, setGetProductItem] =
    useState<ProductProp[]>(productItems);
  const [updatedProductItem, setUpdatedProductItem] = useState<ProductProp>();

  useEffect(() => {
    setGetProductItem(productItems); // Set initial product items
  }, [productItems]); // Update effect when productItems change

  // pick an item to edit
  const selectItemForEdit = (item: ProductProp) => {
    setUpdatedProductItem(item);
  };

  // clear the state
  const clearState = () => {
    setUpdatedProductItem(undefined);
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submit updatedProductItems to your URL
    console.log("Submitting updated product items:", updatedProductItem);
  };

  return (
    <>
      <ProductEditFormModel
        clearState={clearState}
        product={updatedProductItem}
      />

      <div className="mt-4 flex-1 md:mt-6 2xl:mt-7.5 ">
        <div className="col-span-3 rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto ">
              {/* Table headers */}
              <thead className=" justify-center">
                {/* Header row */}
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  {/* Table header cells */}
                  {/* Product Name */}
                  <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                    Product Name
                  </th>
                  {/* Cost */}
                  <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                    Cost
                  </th>
                  {/* Selling */}
                  <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                    Selling
                  </th>
                  {/* Expiry Date */}
                  <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                    Expiry Date
                  </th>
                  {/* Quantity */}
                  <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                    Quantity
                  </th>
                  {/* Category */}
                  <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                    Category
                  </th>
                  {/* Actions */}
                  <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              {productItems && (
                <tbody className="justify-center">
                  {productItems.map((item, key) => (
                    <tr key={key}>
                      {/* Product Name */}
                      <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                        <h5 className="text-lg  capitalize text-black dark:text-white">
                          {item.name}
                        </h5>
                      </td>
                      {/* Cost */}
                      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {item.costPrice}
                        </p>
                      </td>
                      {/* Selling */}
                      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {item.sellingPrice}
                        </p>
                      </td>
                      {/* Expiry Date */}
                      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {item.expiryDate}
                        </p>
                      </td>
                      {/* Quantity */}
                      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {/* Check if quantity is zero for animation */}
                          <p
                            className={`${item.quantityInStock === 0 && " w-fit animate-pulse rounded bg-danger px-2"}`}
                          >
                            {item.quantityInStock}
                          </p>
                        </p>
                      </td>
                      {/* Category */}
                      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {item.categoryId}
                        </p>
                      </td>
                      {/* Actions */}
                      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                        <div className={`flex items-center space-x-2`}>
                          {/* Edit button */}
                          <label
                            htmlFor="my_modal_6"
                            className="btn btn-success btn-sm bg-opacity-10 text-success "
                            onClick={() => selectItemForEdit(item)}
                          >
                            Edit
                          </label>
                          {/* Delete button */}
                          <button
                            className="inline-flex rounded-full bg-danger bg-opacity-10 px-3 py-1 text-sm font-medium text-danger"
                            onClick={() => deleteProduct(item.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default StocksTable;
