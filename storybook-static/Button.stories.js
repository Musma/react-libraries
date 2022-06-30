import { c as classnames } from "./index.js";
import { useCallback } from "react";
import { B as Body3 } from "./SubTitle3.js";
import { j as jsx } from "./jsx-runtime.js";
const Button$1 = ({
  label,
  size = "L",
  buttonClassName,
  contentClassName,
  variant = "contained",
  ...rest
}) => {
  const getButtonClassName = useCallback(({
    variant: variant2,
    size: size2
  }) => {
    const sizeOption = {
      L: "w-[200px]",
      M: "w-[144px]",
      S: "w-[92px]",
      XS: "w-[52px]"
    };
    const variantOption = {
      outlined: `bg-white border border-[#036DB7] active:bg-white hover:bg-[#F2F8FB]`,
      contained: `bg-[#036DB7] active:bg-[#025A96] hover:bg-[#036DB7]/90`
    };
    return `${sizeOption[size2]} ${variantOption[variant2]}`;
  }, []);
  const getContentClassName = useCallback((variant2) => {
    return variant2 === "contained" ? "text-white" : "text-[#036DB7]";
  }, []);
  return /* @__PURE__ */ jsx("button", {
    className: classnames(`h-[34px] rounded-md active:shadow-[inset_-1px_2px_2px_rgba(0,0,0,0.25)] ${buttonClassName}`, getButtonClassName({
      variant,
      size
    })),
    ...rest,
    children: /* @__PURE__ */ jsx(Body3, {
      className: getContentClassName(variant),
      children: label
    })
  });
};
try {
  Button$1.displayName = "Button";
  Button$1.__docgenInfo = { "description": "", "displayName": "Button", "props": { "label": { "defaultValue": null, "description": "", "name": "label", "required": true, "type": { "name": "string" } }, "size": { "defaultValue": { value: "L" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": '"L"' }, { "value": '"M"' }, { "value": '"S"' }, { "value": '"XS"' }] } }, "buttonClassName": { "defaultValue": null, "description": "", "name": "buttonClassName", "required": false, "type": { "name": "string" } }, "contentClassName": { "defaultValue": null, "description": "", "name": "contentClassName", "required": false, "type": { "name": "string" } }, "variant": { "defaultValue": { value: "contained" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": '"outlined"' }, { "value": '"contained"' }] } } } };
  if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
    STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"] = { docgenInfo: Button$1.__docgenInfo, name: "Button", path: "src/components/Button/Button.tsx#Button" };
} catch (__react_docgen_typescript_loader_error) {
}
var Button_stories = {
  parameters: {
    "storySource": {
      "source": "import { ComponentStory, ComponentMeta } from '@storybook/react'\nimport React from 'react'\n\nimport { Button as _Button } from 'src/components/Button'\n\nexport default {\n  title: 'Components/Button',\n  component: _Button,\n} as ComponentMeta<typeof _Button>\n\nconst Template: ComponentStory<typeof _Button> = (args) => <_Button {...args} />\nexport const Button = Template.bind({})\nButton.args = {\n  label: 'Button',\n}\n",
      "locationsMap": {
        "button": {
          "startLoc": {
            "col": 49,
            "line": 11
          },
          "endLoc": {
            "col": 80,
            "line": 11
          },
          "startBody": {
            "col": 49,
            "line": 11
          },
          "endBody": {
            "col": 80,
            "line": 11
          }
        }
      }
    }
  },
  title: "Components/Button",
  component: Button$1
};
const Template = (args) => /* @__PURE__ */ jsx(Button$1, {
  ...args
});
const Button = Template.bind({});
Button.args = {
  label: "Button"
};
const __namedExportsOrder = ["Button"];
export { Button, __namedExportsOrder, Button_stories as default };
//# sourceMappingURL=Button.stories.js.map
