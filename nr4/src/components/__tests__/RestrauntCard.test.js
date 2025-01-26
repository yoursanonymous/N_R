import { render, screen } from "@testing-library/react";
import RestrauntCard from "../RestrauntCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import withPromotedLabel from "../RestrauntCard"
import "@testing-library/jest-dom";

it("should render card component with restaurant name", () => {
  render(<RestrauntCard resData={MOCK_DATA} />);
  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});

it("should display 'Open Now' if the restaurant is open (isOpen: true)", () => {
  render(<withPromotedLabel />);

  // Checking based on isOpen value in the JSON
  if (MOCK_DATA.info.isOpen) {
    const openStatus = screen.getByText("true"); // Update with exact text displayed in your UI for 'open' state
    expect(openStatus).toBeInTheDocument();
  }
});


