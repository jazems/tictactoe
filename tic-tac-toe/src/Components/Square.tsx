import o from "../images/o.png";
import x from "../images/x.png";

/* Returns which image should be inserted into the square. */
function squareContent(value: string) {
  if (value === "X") {
    return (
      <>
        <img src={x} alt="" width="75px" />
      </>
    );
  } else if (value === "O") {
    return (
      <>
        <img src={o} alt="" width="75px" />
      </>
    );
  }
  return;
}

/* Returns square tile. */
const Square = (props: any) => {
  return (
    <>
      <button className="square" onClick={props.onClick}>
        {squareContent(props.value)}
      </button>
    </>
  );
};

export default Square;
