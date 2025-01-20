import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("Should clear the search bar after the search button has been clicked.", async () => {
    const user = userEvent.setup();
    render(<SearchBar onSearch={() => {}} />);
    const input = await screen.findByTestId("searchBar");
    const btn = await screen.findByTestId("searchButton");
    await user.type(input, "dogs");
    expect(input).toHaveValue("dogs");
    await user.click(btn);
    expect(input).toHaveValue("");
  });

  it("should called the onSearch function with the value the user searches for.", async () => {
    const user = userEvent.setup();
    const mockSearch = vi.fn(() => {});
    render(<SearchBar onSearch={mockSearch} />);
    const input = await screen.findByTestId("searchBar");
    const btn = await screen.findByTestId("searchButton");
    await user.type(input, "skyrim");
    await user.click(btn);
    expect(mockSearch).toHaveBeenCalled();
    console.log(mockSearch.mock.calls);
    expect(mockSearch.mock.calls[0][0]).toBe("skyrim");
  });
});
