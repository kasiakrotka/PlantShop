import classes from "./InfoCard.module.css"

function InfoCard(props) {
  return (
    <div className={classes.container}>
      <img className={classes.img} src={props.img} alt={props.title}/>
      <h4>{props.title}</h4>
      <h6>{props.desc}</h6>
    </div>
  );
}

export default InfoCard;
