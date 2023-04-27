import React from "react";

import { json } from "react-router-dom";

function Sample() {

  const data = ["hello"]
  const initialData = [
    {
      "sort": 1,
      "label": "Pizza Name",
      "description": "",
      "validate": {
        "required": true,
        "immutable": false
      },
      "jsonKey": "name",
      "uiType": "Input",
      "icon": "",
      "level": 0,
      "placeholder": ""
    },
    {
      "sort": 2,
      "label": "Pizza_type Type",
      "description": "",
      "validate": {
        "required": true,
        "options": [
          {
            "label": "Naples Style Pizza",
            "value": "naples",
            "description": "",
            "icon": ""
          },
          {
            "label": "New York Style Pizza",
            "value": "newyork",
            "description": "",
            "icon": ""
          }
        ],
        "defaultValue": "naples",
        "immutable": false
      },
      "jsonKey": "type",
      "uiType": "Radio",
      "icon": "",
      "level": 1,
      "placeholder": ""
    },
    {
      "sort": 3,
      "label": "Sauce",
      "description": "",
      "validate": {
        "options": [
          {
            "label": "Tomato Sauce",
            "value": "tomatosauce",
            "description": "",
            "icon": ""
          },
          {
            "label": "Marinara Sauce",
            "value": "marinarasauce",
            "description": "",
            "icon": ""
          },
          {
            "label": "BBQ sauce",
            "value": "bbqsauce",
            "description": "",
            "icon": ""
          },
          {
            "label": "Salsa",
            "value": "salsa",
            "description": "",
            "icon": ""
          }
        ],
        "defaultValue": "Medium",
        "immutable": false
      },
      "jsonKey": "Sauce",
      "uiType": "Select",
      "icon": "",
      "level": 0,
      "placeholder": ""
    },

    {
      "sort": 4,
      "label": "Size",
      "description": "",
      "validate": {
        "options": [
          {
            "label": "Small",
            "value": "Small",
            "description": "",
            "icon": ""
          },
          {
            "label": "Medium",
            "value": "Medium",
            "description": "",
            "icon": ""
          },
          {
            "label": "Large",
            "value": "Large",
            "description": "",
            "icon": ""
          }
        ],
        "defaultValue": "Medium",
        "immutable": false
      },
      "jsonKey": "size",
      "uiType": "Select",
      "icon": "",
      "level": 0,
      "placeholder": ""
    },
    {
      "sort": 5,
      "label": "Include Seasonings",
      "description": "",
      "validate": {
        "required": true,
        "options": [
          {
            "label": "Yes",
            "value": "seasoningYes",
            "description": "",
            "icon": ""
          },
          {
            "label": "No",
            "value": "seasoningno",
            "description": "",
            "icon": ""
          }
        ],
        "defaultValue": "Yes",
        "immutable": false
      },
      "jsonKey": "Seasoning",
      "uiType": "Radio",
      "icon": "",
      "level": 1,
      "placeholder": ""
    }
  ]

  return (
    <>
      <div className="sample">
        <strong>Sample Schema</strong>
        <pre>{JSON.stringify(initialData, null, 2)}</pre>
      </div>
    </>
  )
}

export default Sample;