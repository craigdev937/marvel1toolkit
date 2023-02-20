import { render, screen } from "@testing-library/react";
import { App } from "../app/App";

it("should have Hello World", () => {
    render(<App />);
    const message = screen.queryByText("Hello World")
    expect(message).toBeDefined();
});


