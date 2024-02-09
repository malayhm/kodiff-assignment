import Container from "../elements/Container";
import Dropdown from "../elements/Dropdown";
import Image from "../elements/Image";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Text from "../elements/Text";
import Textarea from "../elements/Textarea";
import Link from "../elements/Link";

// This approach can allow having different primitive element for every version
const COMPONENT_MAP = {
  container: Container,
  dropdown: Dropdown,
  input: Input,
  text: Text,
  textarea: Textarea,
  button: Button,
  image: Image,
  textfield: Input,
  link: Link,
};

const renderComponents = (components) => {
  return components.map((cData, idx) => {
    const { type, children, ...rest } = cData;
    const Component = COMPONENT_MAP[type];

    const elementStyles = {
      base: (cData.style && cData.style.base) || {},
      hover: (cData.style && cData.style.hover) || {},
      focus: (cData.style && cData.style.focus) || {},
    };

    // Delete the style from the json so that it will not conflict with the actual style
    delete rest.style;

    return (
      <Component key={idx} styles={elementStyles} {...rest}>
        {cData.children && renderComponents(cData.children)}
      </Component>
    );
  });
};

export default function Page({ data }) {
  return (
    <div className="page-content" style={data.globalStyles}>
      {renderComponents(data.elements)}
    </div>
  );
}
