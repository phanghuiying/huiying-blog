import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MessageForm from "@/components/MessageForm";
import exp from "constants";

it("should render correctly with default btn disabled", () => {
  render(<MessageForm />);
  const submitBtn = screen.getByText("Submit");
  expect(submitBtn).toHaveAttribute("disabled");
});

it("should have error helper message when text field is not in intial state and is empty", () => {
  render(<MessageForm />);
  const nameInput = screen.getByTestId("name");
  fireEvent.change(nameInput, { target: { value: "test" } });
  // message should be empty
  expect(nameInput).toHaveValue("test");
  const msgError = screen.getByTestId("msg-error");
  expect(msgError).toBeInTheDocument();

  const msgInput = screen.getByTestId("message");
  fireEvent.change(nameInput, { target: { value: "" } });
  fireEvent.change(msgInput, { target: { value: "test-msg" } });
  // name should be empty
  const nameError = screen.getByTestId("name-error");
  expect(msgInput).toHaveValue("test-msg");
  expect(nameError).toBeInTheDocument();
});

it("submit btn should be disabled if any input field is empty", () => {
  render(<MessageForm />);
  const nameInput = screen.getByTestId("name");
  const submitBtn = screen.getByText("Submit");
  fireEvent.change(nameInput, { target: { value: "test" } });
  // message should be empty
  expect(submitBtn).toHaveAttribute("disabled");

  const msgInput = screen.getByTestId("message");
  fireEvent.change(nameInput, { target: { value: "" } });
  fireEvent.change(msgInput, { target: { value: "test-msg" } });
  // name should be empty
  expect(submitBtn).toHaveAttribute("disabled");
});

it("pass validation, click submit btn and its not disabled", async () => {
  render(<MessageForm />);
  const nameInput = screen.getByTestId("name");
  const msgInput = screen.getByTestId("message");
  const submitBtn = screen.getByText("Submit");
  fireEvent.change(nameInput, { target: { value: "test" } });
  fireEvent.change(msgInput, { target: { value: "test-msg" } });
  fireEvent.click(submitBtn);
  expect(submitBtn).not.toHaveAttribute("disabled");
});
