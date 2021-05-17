import React from "react";
import ProductList from "../components/ProductList"
import { withRouter } from "react-router-dom";
import {Data} from "../data/Data";

function Shop(props) {
  function getData(category, subCategory) {
    if(subCategory === undefined){
      return Data[category];
    }
    else{
      return Data[category][subCategory];
    }
  }

  function renderSubHeader(subCategory) {
    if (subCategory !== undefined) {
      return <h5>{subCategory.replace("-", " and ")}</h5>;
    }
    return;
  }

  const category = props.match.params.category;
  const subCategory = props.match.params.subcategory;
  const productsData = getData(category, subCategory);

  return (
    <div className="container mt-3">
      <h3 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
        {category}
      </h3>
      {renderSubHeader(props.match.params.subcategory)}
      <div className="row">
        <ProductList products={productsData}/>
      </div>
    </div>
  );
}

export default withRouter(Shop);
