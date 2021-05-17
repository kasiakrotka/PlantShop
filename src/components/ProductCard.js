function ProductCard(props) {
  return (
    <div className="card border-success mb-3" style={{ width: "18rem" }}>
      <img
        className="card-img-top p-3"
        src={props.data.img}
        alt={props.data.name}
      />
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <p className="card-subtitle mb-2 text-muted">{props.data.prices[0]}</p>
      </div>
    </div>
  );
}

export default ProductCard;
