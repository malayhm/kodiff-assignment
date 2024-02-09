import BaseElement from "./BaseElement";

const Button = ({ data, ...rest }) => {
  return (
    <BaseElement tag="button" {...rest}>
      {" "}
      {(data && data.title) || ""}{" "}
    </BaseElement>
  );
};

export default Button;
