import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeScreen from "@/screens/HomeScreen";

it("page renders correctly with MessageForm submit button disabled", () => {
  render(<HomeScreen />);
  const submitBtn = screen.getByText("Submit");
  expect(submitBtn).toHaveAttribute("disabled");
});

it("links to socials are correct", () => {
  render(<HomeScreen />);
  const linkedinLink = screen.getByRole("linkedin");
  expect(linkedinLink).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/phang-hui-ying-ba3567a6/"
  );
  const githubLink = screen.getByRole("github");
  expect(githubLink).toHaveAttribute("href", "https://github.com/phanghuiying");
});

it("emoji btn clicked should be same as what is displayed", () => {
  render(<HomeScreen />);
  const emojiBtn1 = screen.getByText("😣");
  const emojiBtn2 = screen.getByText("🙁");
  const emojiBtn3 = screen.getByText("🙂");
  const emojiBtn4 = screen.getByText("😄");

  fireEvent.click(emojiBtn1);
  expect(emojiBtn1).toHaveClass("active");
  fireEvent.click(emojiBtn2);
  expect(emojiBtn2).toHaveClass("active");
  fireEvent.click(emojiBtn3);
  expect(emojiBtn3).toHaveClass("active");
  fireEvent.click(emojiBtn4);
  expect(emojiBtn4).toHaveClass("active");
});
