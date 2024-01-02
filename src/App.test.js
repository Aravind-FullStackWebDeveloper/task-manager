import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "./App";

// Mock axios.get
jest.mock("axios");

describe("App component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing", () => {
    render(<App />);
  });

  test("initial state of tasks", () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText(/Task/i).length).toBe(2);
  });

  test("fetches tasks from API", async () => {
    axios.get.mockResolvedValueOnce({
      data: [
        {
          id: 3,
          title: "New Task",
          completed: false,
        },
      ],
    });
    const { getByText } = render(<App />);
    await waitFor(() => expect(getByText("New Task")).toBeInTheDocument());
  });

  test("handles task click", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText("Task Name"));
    expect(getByText("Task Name").classList.contains("completed")).toBeTruthy();
  });

  test("handles task addition", () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = screen.getByPlaceholderText("Add a task...");
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(getByText("Add Task"));
    expect(getByText("New Task")).toBeInTheDocument();
  });

  test("handles task deletion", () => {
    const { getByText, queryByText } = render(<App />);
    fireEvent.click(getByText("Delete"));
    expect(queryByText("Task Name")).not.toBeInTheDocument();
  });

  test("handles task update", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    fireEvent.click(getByText("Edit"));
    const input = getByPlaceholderText("Edit task...");
    fireEvent.change(input, { target: { value: "Updated Task" } });
    fireEvent.click(getByText("Update"));
    expect(getByText("Updated Task")).toBeInTheDocument();
  });
});
