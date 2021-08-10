const Button = (props: object | any) => {
  return (
    <button title={props.command}>
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
