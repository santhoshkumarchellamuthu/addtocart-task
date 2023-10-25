import React from "react";
import data from "../../Data/Data";
import { useDispatch } from "react-redux";
import { addtodata } from "../../Slice/Productslice";

const Product = () => {
  return (
    <div>
      <h2>PRODUCT TABLE</h2>
      <table>
        <div>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Tags</th>
          <th>Vendor</th>
          <th>Cart</th>
        </div>
        {data.map((value) => (
          <Productlist value={value} key={value.id} />
        ))}
      </table>
    </div>
  );
};

export default Product;

const Productlist = ({ value }) => {
  const addtocart = () => {
    dispatch(addtodata(value));
  };
  const dispatch = useDispatch();
  return (
    <div>
      <td>{value.id}</td>
      <td>{value.name}</td>
      <td>{value.price}</td>
      <td>
        {value.tags[0]},{value.tags[1]}
      </td>
      <td>{value.vendor}</td>
      <td className="green" onClick={addtocart}>
        Add to Cart
      </td>
    </div>
  );
};
