import BaseElement from "./BaseElement";

export default function Image({ data, ...rest }) {
  return <BaseElement tag="img" src={data && data.src} {...rest} alt="" />;
}
