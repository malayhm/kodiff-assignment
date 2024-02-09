import Container from "../elements/Container";
import Dropdown from "../elements/Dropdown";
import Image from "../elements/Image";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Text from "../elements/Text";
import Textarea from "../elements/Textarea";

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
};

const renderComponents = (components) => {
  return components.map((cData, idx) => {
    const { type, children, styles, ...rest } = cData;
    const Component = COMPONENT_MAP[type];

    const elementStyles = {
      base: {},
      hover: {},
      focus: {},
    };

    if (cData.style) {
      if (cData.style.webStyle) {
        elementStyles.base = cData.style.webStyle;
      }

      if (cData.style.actions) {
        elementStyles.hover = cData.style.actions.onHover;
        elementStyles.focus = cData.style.actions.onFocus;
      }
    }

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
  return <div className="page-content">{renderComponents(data.views)}</div>;
}
