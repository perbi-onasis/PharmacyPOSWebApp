import axios from "axios";

const apiUrl = "http://localhost:8053/products";


// Function to delete a product by ID
const deleteProduct = async (productId: any) => {
  try {
    const response = await axios.delete(`${apiUrl}/${productId}`);
    console.log("Product deleted successfully:", response);
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

export default deleteProduct;
