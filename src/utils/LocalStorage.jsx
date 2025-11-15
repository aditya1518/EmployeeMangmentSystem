const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Update Homepage UI",
        description: "Revamp the landing page layout using Tailwind CSS.",
        date: "2025-11-05",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Login Bug",
        description: "Resolve authentication issue on the login screen.",
        date: "2025-11-03",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Test API Endpoints",
        description: "Perform testing on all user-related API endpoints.",
        date: "2025-11-04",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Write Team Report",
        description: "Summarize weekly team performance and submit report.",
        date: "2025-11-06",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Ishita",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Optimize Database",
        description: "Improve query performance for employee database.",
        date: "2025-11-02",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Design Login Page",
        description:
          "Create a responsive design for login and register screens.",
        date: "2025-11-05",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare Release Notes",
        description: "Document all features for the next software release.",
        date: "2025-11-07",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Write Unit Tests",
        description: "Add unit tests for the user authentication module.",
        date: "2025-11-01",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Build Dashboard Page",
        description: "Develop admin dashboard with analytics charts.",
        date: "2025-11-04",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Mobile Layout",
        description: "Adjust CSS grid for better mobile responsiveness.",
        date: "2025-11-06",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update README File",
        description: "Add setup instructions and dependencies to README.md.",
        date: "2025-11-07",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "API Response Delay Fix",
        description: "Identify and fix delay in backend API response.",
        date: "2025-11-02",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Dark Mode Design",
        description: "Implement dark mode colors for dashboard and forms.",
        date: "2025-11-03",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "User Feedback Testing",
        description: "Collect and analyze user feedback from beta testers.",
        date: "2025-11-05",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update Project Docs",
        description: "Document new API endpoints and authentication flow.",
        date: "2025-11-07",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Deploy to Production",
        description: "Push latest build to production environment.",
        date: "2025-11-01",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Redesign Icons",
        description: "Create new set of vector icons for the app UI.",
        date: "2025-11-05",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "System Load Testing",
        description: "Test the system under heavy load to ensure stability.",
        date: "2025-11-06",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Write Deployment Guide",
        description: "Add a detailed deployment process in project docs.",
        date: "2025-11-08",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];
// localStorage.clear();


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
if (!localStorage.getItem("employees")) {
  setLocalStorage();
}

