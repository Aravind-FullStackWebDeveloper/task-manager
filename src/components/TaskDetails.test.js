import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TaskDetails from "./TaskDetails";

describe("TaskDetails component", () => {
  const task = {
    id: 1,
    title: "Task 1",
    description: "Description 1",
    completed: false,
  };
  const mockTaskDelete = jest.fn();
  const mockTaskToggle = jest.fn();

  beforeEach(() => {
    mockTaskDelete.mockClear();
    mockTaskToggle.mockClear();
  });

  test("renders task details correctly", () => {
    const { getByText } = render(
      <TaskDetails
        task={task}
        onDelete={mockTaskDelete}
        onToggle={mockTaskToggle}
      />
    );
    expect(getByText("Task 1")).toBeInTheDocument();
    expect(getByText("Description 1")).toBeInTheDocument();
  });

  test("handles delete task correctly", () => {
    const { getByText } = render(
      <TaskDetails
        task={task}
        onDelete={mockTaskDelete}
        onToggle={mockTaskToggle}
      />
    );
    fireEvent.click(getByText("Delete"));
    expect(mockTaskDelete).toHaveBeenCalledTimes(1);
  });

  test("handles toggle task completion correctly", () => {
    const { getByText } = render(
      <TaskDetails
        task={task}
        onDelete={mockTaskDelete}
        onToggle={mockTaskToggle}
      />
    );
    fireEvent.click(getByText("Mark as complete"));
    expect(mockTaskToggle).toHaveBeenCalledTimes(1);
    // Add more specific assertions here, if needed
  });
});
