interface Props {
  onClick: any;
  value: string;
}

/* Returns square tile */
const Square = (props: Props) => {
  return (
    <div>
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
};

export default Square;
