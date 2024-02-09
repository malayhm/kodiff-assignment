import { useState } from "react";

import BaseElement from "./BaseElement";

const Textarea = ({ data, ...rest }) => {
  const [val, setVal] = useState((data && data.value) || "");

  const onChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <BaseElement
      tag="textarea"
      placeholder={(data && data.placeholder) || ""}
      value={val}
      rows={(rest.config && rest.config.rows) || 2}
      onChange={onChange}
      {...rest}
    >
      Textarea
    </BaseElement>
  );
};

export default Textarea;
