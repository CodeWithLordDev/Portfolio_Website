An employee management system built using React and local storage to authenticate users. Admins can assign tasks to employees, and employees can view and complete tasks.

## ***Features***
- Admin authentication
- Task assignment
- Employee task management
- Local storage authentication

## ***Technologies Used***
- React
- Local Storage

## ***Setup for React Employee Management***
1. Create a React app
   ```bash

    npx create-react-app employee-management
   
   ```
- Example for local storage-based task assignment:

```bash

  const assignTask = (task, employee) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ task, employee });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

```