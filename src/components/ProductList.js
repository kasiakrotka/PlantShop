import ProductCard from "./ProductCard";

function ProductList(props) {
  return (
    <ul className="list-unstyled">
      {props.products.map((product, index) => {
        return (
          <li style={{'display': 'inline-block'}} key={index}>
            <ProductCard data={product} />
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;
