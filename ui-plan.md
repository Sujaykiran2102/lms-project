# UI Component Plan for LMS Project

This document outlines the UI structure, component hierarchy, and design system for the Learning Management System.

## 1. Layout Components

These components define the main structure of the application's pages.

-   **`DashboardLayout`**: The primary wrapper for all authenticated user pages. It will include a persistent sidebar for navigation and a main content area.
-   **`Navbar`**: The top navigation bar, present on most pages. It will contain the app logo, user profile/actions, and primary navigation links.
-   **`Sidebar`**: A vertical navigation component used within the `DashboardLayout`. It will contain links to different sections of the dashboard like 'My Courses', 'Profile', and 'Settings'.
-   **`Footer`**: The application footer, containing copyright information and secondary links.

## 2. Reusable UI (Atomic) Components

These are general-purpose, reusable components that will be used throughout the application to ensure consistency. They will be located in the `components/ui` directory.

-   **`Button`**: A versatile button component with variants for different actions (e.g., primary, secondary, destructive) and sizes.
-   **`Input`**: A styled input field for forms, including a label and support for different types (text, password, email).
-   **`Card`**: A flexible container for displaying content in a structured way (e.g., `CourseCard`).

## 3. Page-Specific Components

These components are tailored for specific pages but are still designed for reusability where possible.

-   **`CourseCard`**: A card specifically for displaying course information on the dashboard. Includes title, description, and progress.
-   **`LoginForm`**: A dedicated component for the user login form, built using the reusable `Input` and `Button` components.

## 4. Folder Structure

The frontend components will be organized as follows to maintain clarity and scalability.

components/
├── layout/         # For major page structure components
│   ├── Navbar.js
│   ├── Sidebar.js
│   └── Footer.js
├── ui/             # For generic, reusable UI elements
│   ├── Button.js
│   ├── Input.js
│   └── Card.js
└── CourseCard.js   # Example of a more specific component