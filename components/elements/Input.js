import { useState } from "react";

import BaseElement from "./BaseElement";

export default function Input({ data, ...rest }) {
  const [val, setVal] = useState((data && data.value) || "");

  const onChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <BaseElement
      tag="input"
      placeholder={data.placeholder}
      value={val}
      onChange={onChange}
      {...rest}
    />
  );
}
