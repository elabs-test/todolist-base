import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import store from "../redux/store";

describe("App", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("Renderiza el componente", () => {
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });


  it("Agrega item a la lista", () => {
    const input = screen.getByPlaceholderText("New item");
    fireEvent.change(input, { target: { value: "Learn testing" } });

    expect(input.value).toBe("Learn testing");
    fireEvent.click(screen.getByTestId("addButton"));

    const result = screen.getByText("Learn testing");
    expect(result).toBeInTheDocument();
  });
});
