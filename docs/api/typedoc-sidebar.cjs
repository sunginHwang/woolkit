// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const typedocSidebar = { items: [
  {
    "type": "category",
    "label": "components",
    "items": [
      {
        "type": "category",
        "label": "Functions",
        "items": [
          {
            "type": "doc",
            "id": "api/components/functions/SwitchCase",
            "label": "SwitchCase"
          },
          {
            "type": "doc",
            "id": "api/components/functions/TestComp",
            "label": "TestComp"
          }
        ]
      }
    ],
    "link": {
      "type": "doc",
      "id": "api/components/index"
    }
  },
  {
    "type": "category",
    "label": "hooks",
    "items": [
      {
        "type": "category",
        "label": "Functions",
        "items": [
          {
            "type": "doc",
            "id": "api/hooks/functions/useMount",
            "label": "useMount"
          }
        ]
      }
    ],
    "link": {
      "type": "doc",
      "id": "api/hooks/index"
    }
  }
]};
module.exports = typedocSidebar.items;