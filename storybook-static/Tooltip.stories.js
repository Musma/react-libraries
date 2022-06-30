import { c as classnames } from "./index.js";
import { useCallback } from "react";
import { B as Body3 } from "./SubTitle3.js";
import { a as jsxs, j as jsx } from "./jsx-runtime.js";
const Tooltip$1 = ({
  children,
  message,
  width,
  position
}) => {
  const getClassnames = useCallback((position2) => {
    const classnames2 = {
      left: "top-[50%] right-[100%] mr-[11px] translate-y-[-50%] after:left-[100%] after:top-[50%] after:mt-[-7px] after:border-l-[#363b40]",
      right: "top-[50%] left-[100%] ml-[11px] translate-y-[-50%] after:top-[50%] after:right-[100%] after:mt-[-7px] after:border-r-[#363b40]",
      bottom: "top-[100%] left-[50%] translate-x-[-50%] mt-[9px] w-fit after:bottom-[100%] after:left-[50%] after:ml-[-7px] after:border-b-[#363b40]",
      top: "bottom-[100%] left-[50%] translate-x-[-50%] mb-[9px] w-fit after:left-[50%] after:top-[100%] after:ml-[-7px] after:border-t-[#363b40]"
    };
    if (!position2)
      return classnames2["left"];
    return classnames2[position2];
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "group relative inline-block",
    children: [children, /* @__PURE__ */ jsx("div", {
      className: classnames("absolute z-10 inline rounded-[3px] bg-[#363b40] px-4 py-[9px] text-center text-white drop-shadow-[0_2px_8px_rgba(54,59,64,0.25)] after:absolute after:border-[7px] after:border-transparent after:content-[''] group-hover:visible", getClassnames(position)),
      style: {
        width
      },
      children: /* @__PURE__ */ jsx(Body3, {
        className: "pt-[2px] leading-[18px]",
        children: message
      })
    })]
  });
};
try {
  Tooltip$1.displayName = "Tooltip";
  Tooltip$1.__docgenInfo = { "description": "", "displayName": "Tooltip", "props": { "message": { "defaultValue": null, "description": "", "name": "message", "required": true, "type": { "name": "ReactNode" } }, "width": { "defaultValue": null, "description": "", "name": "width", "required": false, "type": { "name": "number" } }, "position": { "defaultValue": null, "description": "", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": '"left"' }, { "value": '"right"' }, { "value": '"top"' }, { "value": '"bottom"' }] } } } };
  if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
    STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"] = { docgenInfo: Tooltip$1.__docgenInfo, name: "Tooltip", path: "src/components/Tooltip/Tooltip.tsx#Tooltip" };
} catch (__react_docgen_typescript_loader_error) {
}
var Tooltip_stories = {
  parameters: {
    "storySource": {
      "source": `import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Tooltip as _Tooltip } from 'src/components/Tooltip'

export default {
  title: 'Components/Tooltip',
  component: _Tooltip,
} as ComponentMeta<typeof _Tooltip>

const Template: ComponentStory<typeof _Tooltip> = (args) => (
  <div className="ml-[20vw] mt-[10vh]">
    <_Tooltip {...args} />
  </div>
)

export const Tooltip = Template.bind({})
Tooltip.args = {
  children: 'Hover me',
  message: 'Tooltip',
  position: 'left',
}
`,
      "locationsMap": {
        "tooltip": {
          "startLoc": {
            "col": 50,
            "line": 11
          },
          "endLoc": {
            "col": 1,
            "line": 15
          },
          "startBody": {
            "col": 50,
            "line": 11
          },
          "endBody": {
            "col": 1,
            "line": 15
          }
        }
      }
    }
  },
  title: "Components/Tooltip",
  component: Tooltip$1
};
const Template = (args) => /* @__PURE__ */ jsx("div", {
  className: "ml-[20vw] mt-[10vh]",
  children: /* @__PURE__ */ jsx(Tooltip$1, {
    ...args
  })
});
const Tooltip = Template.bind({});
Tooltip.args = {
  children: "Hover me",
  message: "Tooltip",
  position: "left"
};
const __namedExportsOrder = ["Tooltip"];
export { Tooltip, __namedExportsOrder, Tooltip_stories as default };
//# sourceMappingURL=Tooltip.stories.js.map
