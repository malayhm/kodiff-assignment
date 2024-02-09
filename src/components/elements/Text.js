import BaseElement from "./BaseElement";

export default function Text({ data, ...rest }) {
  return (
    <BaseElement tag="div" {...rest}>
      {(data && data.value) || ""}
    </BaseElement>
  );
}
