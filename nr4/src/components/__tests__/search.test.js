import { render,screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react";
import MOCK_DATA from "../mocks/resCardMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the body componet with search", async () => {
  await act(async () => {
        render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
        )
    });
    

});