import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../Store";
import { removeitem } from "../../Slice/Productslice";

const Shoping = () => {
  const { productdata } = useSelector((store) => store.product);

  const totalPrice = productdata.reduce((acc, current) => {
    let currentvalue = current.price - current.price * (current.discount / 100);
    return acc + currentvalue;
  }, 0);
  return (
    <div>
      <h2>SHOPING TABLE</h2>
      <table>
        <div>
          <th>#</th>
          <th>Product Name</th>
          <th>Org Price</th>
          <th>Discount Percentage</th>
          <th>Discounted Price</th>
          <th>Vendor</th>
          <th>Remove Cart</th>
        </div>
        {productdata.map((value) => (
          <Shopinglist value={value} key={value.id} />
        ))}
      </table>
      {productdata.length == 0 ? (
        ""
      ) : (
        <h2>TOTAL PRICE = {totalPrice.toFixed(2)}</h2>
      )}
    </div>
  );
};

export default Shoping;

const Shopinglist = ({ value }) => {
  const dispatch = useDispatch();
  const handleRemoveitem = () => {
    dispatch(removeitem(value.id));
  };
  return (
    <div>
      <td>{value.id}</td>
      <td>{value.name}</td>
      <td>{value.price}</td>
      <td>{value.discount}</td>
      <td>{value.price - value.price * (value.discount / 100)}</td>
      <td>{value.vendor}</td>
      <td className="red" onClick={handleRemoveitem}>
        Remove Cart
      </td>
    </div>
  );
};
