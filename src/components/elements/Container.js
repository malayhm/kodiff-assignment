import BaseElement from "./BaseElement";

export default function Container({ children, ...rest }) {
  return (
    <BaseElement tag="div" {...rest} className="container">
      {children}
    </BaseElement>
  );
}
