import React from "react";
import data from "../../Data/Data";

const createDiscountTable = (data) => {
  const discountTable = {};

  data.forEach((item) => {
    const vendor = item.vendor;
    const trade = item.tags[0]; // Get the first element of the tags array
    const discount = item.discount || 0;

    if (!discountTable[vendor]) {
      discountTable[vendor] = {};
    }

    if (!discountTable[vendor][trade]) {
      discountTable[vendor][trade] = discount;
    }
  });

  return discountTable;
};

const Discount = () => {
  const discountTable = createDiscountTable(data);
  const uniqueTrades = Array.from(new Set(data.map((item) => item.tags[0])));

  return (
    <div>
      <h2>DISCOUNT TABLE</h2>
      <table>
        <thead>
          <tr>
            <th>Vendor</th>
            {uniqueTrades.map((trade, index) => (
              <th key={index}>{trade}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(discountTable).map((vendor, index) => (
            <tr key={index}>
              <td>{vendor}</td>
              {uniqueTrades.map((trade, index) => (
                <td key={index}>{discountTable[vendor][trade] || 0}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Discount;
