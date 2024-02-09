import BaseElement from "./BaseElement";

export default function Dropdown({ data, ...rest }) {
  return (
    <BaseElement tag="select" {...rest}>
      {/* TO DO: Add selection from the config */}
      {data.options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </BaseElement>
  );
}
