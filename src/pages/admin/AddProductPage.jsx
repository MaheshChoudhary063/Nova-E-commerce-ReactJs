import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";
import Layout from "../../components/layout/Layout";

const categoryList = [
  {
    name: "fashion",
  },
  {
    name: "shirt",
  },
  {
    name: "jacket",
  },
  {
    name: "mobile",
  },
  {
    name: "laptop",
  },
  {
    name: "shoes",
  },
  {
    name: "home",
  },
  {
    name: "books",
  },
];

const AddProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Add Product Function
  const addProductFunction = async () => {
    if (
      product.title == "" ||
      product.price == "" ||
      product.productImageUrl == "" ||
      product.category == "" ||
      product.description == ""
    ) {
      return toast.error("all fields are required");
    }

    setLoading(true);
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, product);
      toast.success("Add product successfully");
      navigate("/admin-dashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Add product failed");
    }
  };
  return (
    <Layout>
      <div>
        <div className="flex justify-center items-center h-screen">
          {loading && <Loader />}
         
          <div className="login_Form bg-gray-500 px-8 py-6 border border-black rounded-xl shadow-md">
           
            <div className="mb-5">
              <h2 className="text-center text-2xl font-bold text-black ">
                Add Product
              </h2>
            </div>

         
            <div className="mb-3">
              <input
                type="text"
                name="title"
                value={product.title}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    title: e.target.value,
                  });
                }}
                placeholder="Product Title"
                className="bg-gray-500 border text-black border-black px-2 py-2 w-96 rounded-md outline-none placeholder-black"
              />
            </div>

           
            <div className="mb-3">
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    price: e.target.value,
                  });
                }}
                placeholder="Product Price"
                className="bg-gray-500 border text-black border-black px-2 py-2 w-96 rounded-md outline-none placeholder-black"
              />
            </div>

          
            <div className="mb-3">
              <input
                type="text"
                name="productImageUrl"
                value={product.productImageUrl}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    productImageUrl: e.target.value,
                  });
                }}
                placeholder="Product Image Url"
                className="bg-gray-500 border text-black border-black px-2 py-2 w-96 rounded-md outline-none placeholder-black"
              />
            </div>

           
            <div className="mb-3">
              <select
                value={product.category}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    category: e.target.value,
                  });
                }}
                className="w-full px-1 py-2 text-black bg-gray-500 border border-black rounded-md outline-none  "
              >
                <option disabled>Select Product Category</option>
                {categoryList.map((value, index) => {
                  const { name } = value;
                  return (
                    <option
                      className=" first-letter:uppercase"
                      key={index}
                      value={name}
                    >
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>

         
            <div className="mb-3">
              <textarea
                value={product.description}
                onChange={(e) => {
                  setProduct({
                    ...product,
                    description: e.target.value,
                  });
                }}
                name="description"
                placeholder="Product Description"
                rows="5"
                className=" w-full px-2 py-1 text-black bg-gray-500 border border-black rounded-md outline-none placeholder-black "
              ></textarea>
            </div>

          
            <div className="mb-3">
              <button
                onClick={addProductFunction}
                type="button"
                className="bg-gray-900 hover:bg-gray-800 w-full text-white text-center py-2 font-bold rounded-md "
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddProductPage;
