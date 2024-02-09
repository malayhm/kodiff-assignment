import BaseElement from "./BaseElement";

const Link = ({ children, data, ...rest }) => {
  return (
    <BaseElement tag="a" {...rest} href={(data && data.url) || "#"}>
      {children}
    </BaseElement>
  );
};

export default Link;
