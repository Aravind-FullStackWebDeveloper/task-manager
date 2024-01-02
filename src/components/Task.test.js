// Task.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Task from "./Task";
import userEvent from "@testing-library/user-event";

const mockTask = {
  id: 1,
  title: "Test Task",
  description: "This is a test task.",
  completed: false,
};

const mockTaskClick = jest.fn();
const mockTaskDeletion = jest.fn();
const mockTaskEdit = jest.fn();

test("renders Task component", () => {
  render(
    <Task
      task={mockTask}
      taskClick={mockTaskClick}
      taskDeletion={mockTaskDeletion}
      taskEdit={mockTaskEdit}
    />
  );
  expect(screen.getByText("Test Task")).toBeInTheDocument();
});

test("check task details", () => {
  render(
    <Task
      task={mockTask}
      taskClick={mockTaskClick}
      taskDeletion={mockTaskDeletion}
      taskEdit={mockTaskEdit}
    />
  );
  userEvent.click(screen.getByText("Test Task"));
  expect(mockTaskClick).toHaveBeenCalledWith(mockTask.id);
});

test("check task edit", () => {
  render(
    <Task
      task={mockTask}
      taskClick={mockTaskClick}
      taskDeletion={mockTaskDeletion}
      taskEdit={mockTaskEdit}
    />
  );
  userEvent.click(screen.getByRole("img", { name: /edit/i }));
  expect(mockTaskEdit).toHaveBeenCalledWith(mockTask.id);
});

test("check task deletion", () => {
  render(
    <Task
      task={mockTask}
      taskClick={mockTaskClick}
      taskDeletion={mockTaskDeletion}
      taskEdit={mockTaskEdit}
    />
  );
  userEvent.click(screen.getByRole("button", { name: /delete/i }));
  expect(mockTaskDeletion).toHaveBeenCalledWith(mockTask.id);
});
