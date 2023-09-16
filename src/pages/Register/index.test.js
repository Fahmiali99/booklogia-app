import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import store from "../../redux/store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import Register from "./index";

const setup = () =>
  render(
    <Provider store={store}>
      <Register />
    </Provider>
  );

describe('Testing Register', () => {
  beforeEach(setup);
  afterEach(cleanup);

  it("Success render Register component", () => {
    expect(screen.getByLabelText("input-username")).toBeInTheDocument();
    expect(screen.getByLabelText("input-email")).toBeInTheDocument();
  });

  it("Search username value should be same as user typing", () => {
    const inputUsername = screen.getByLabelText("input-username");
    userEvent.type(inputUsername, "test username");
    expect(inputUsername.value).toBe("test username");
  });

  it("Search email value should be same as user typing", () => {
    const inputEmail = screen.getByLabelText("input-email");
    userEvent.type(inputEmail, "testing@gmail.com");
    expect(inputEmail.value).toBe("testing@gmail.com");
  });
});
