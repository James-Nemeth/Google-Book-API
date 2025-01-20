import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FetchBook from "./FetchBook.jsx";

describe("FetchBook", () => {
  it("should show loading component when searching for a book", async () => {
    render(<FetchBook query="bible" />);
    const loading = await screen.findByTestId("loader");
    expect(loading).toBeInTheDocument;
  });

  it("should display a message when no books are found", async () => {
    render(<FetchBook query="aksdlasdfsa" />);
    const noResults = await screen.findByText(/No books found/i);
    expect(noResults).toBeInTheDocument();
  });

  it("should show a message when no query is provided", () => {
    render(<FetchBook query="" />);
    const idleMessage = screen.getByText(/Please enter a Book Title/i);
    expect(idleMessage).toBeInTheDocument();
  });
});
