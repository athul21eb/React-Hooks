import PropTypes from "prop-types";
import "./zq1.css";
function Cards(props) {
  return (
    <div>
      {props.data.map((element) => (
        <div className="Card" key={element.i}>
          <h1 className="Heading">{element.name.toUpperCase()}</h1>
          <p className="Email">{`Email : ${element.email}`}</p>
        </div>
      ))}
    </div>
  );
}

Cards.defaultProps = {
  data: [{ id: 1, name: "athul", email: "athul.eb@gmail.com" }],
};

Cards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
    })
  ),
};

export default Cards;
