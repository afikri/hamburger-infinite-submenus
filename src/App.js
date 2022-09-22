import React from 'react'
import styled from "styled-components";
import "./App.css";
import MultiMenu from "./MultiMenu";

const App = () => {
  return (
    <Wrapper>
      <MultiMenu menus={menus} />
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  background: #ccc;
  width: 300px;
`;

const menus = [
  {
    label: "Menu 1"
  },
  {
    label: "Menu 2",
    submenu: [
      {
        label: "Sub Menu 1"
      },
      {
        label: "Sub Menu 2"
      }
    ]
  },
  {
    label: "Menu 3",
    submenu: [
      {
        label: "Sub Menu 1",
        submenu: [
          {
            label: "Boom 1"
          },
          {
            label: "Boom 2"
          }
        ]
      },
      {
        label: "Sub Menu 2",
        submenu: [
          {
            label: "Deep 1"
          },
          {
            label: "Deep 2",
            submenu: [
              {
                label: "Lorem 1"
              },
              {
                label: "Lorem 2",
                submenu: [
                  {
                    label: "Super Deep"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "Sub Menu 3"
      },
      {
        label: "Sub Menu 4",
        submenu: [
          {
            label: "Last 1"
          },
          {
            label: "Last 2"
          },
          {
            label: "Last 3"
          }
        ]
      }
    ]
  },
  {
    label: "Menu 4"
  }
];


export default App




