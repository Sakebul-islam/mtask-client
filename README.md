# MTask Client

A task management web app built with React and Vite, with Firebase sign-in and a drag-and-drop board for To-do, In-progress and Completed tasks.

The backend lives in a separate repo: [mtask-server](https://github.com/Sakebul-islam/mtask-server) (Express and MongoDB).

## Features

- Sign up and log in with email and password, Google or GitHub (Firebase Authentication).
- Registration sets the user's display name and photo URL.
- Private routes. The dashboard and profile pages redirect to login when you are signed out.
- Add a task with a title, deadline, priority (Low, High, Immediate) and description.
- Kanban-style board with three columns: todo, progress and completed.
- Drag a task card to another column to change its status (`react-beautiful-dnd`).
- Update a task on its own page, or delete it after a confirmation dialog (SweetAlert2).
- Tasks are loaded per user email with TanStack Query.
- Toast messages for sign-in, sign-up and new tasks (`react-hot-toast`).
- Public pages: Home, Why MTask, FAQ and a profile page.
- Custom 404 error page.

## Tech stack

- React 18 with Vite 5
- React Router 6
- Tailwind CSS 3 and Material Tailwind
- Firebase Authentication
- TanStack Query 5
- Axios
- React Hook Form
- `react-beautiful-dnd`
- SweetAlert2 and `react-hot-toast`
- React Icons and Heroicons
- ESLint 8

Backend ([mtask-server](https://github.com/Sakebul-islam/mtask-server)): Node.js, Express 4, MongoDB driver 6, CORS, dotenv. Deployed on Vercel.

## Getting started

### 1. Clone and install

```bash
git clone https://github.com/Sakebul-islam/mtask-client.git
cd mtask-client
npm install
```

### 2. Configuration

- Firebase settings are in `src/Firebase/firebase.config.js`. Replace them with your own Firebase project to use your own auth.
- The API base URL is set in `src/Hooks/useAxiosPublic.jsx`. Point it at your running mtask-server.

The server reads these environment variable names: `DB_USER`, `BD_KEY` (MongoDB credentials) and `PORT`.

### 3. Run

```bash
npm start
```

Vite prints the local URL (usually `http://localhost:5173`).

### Other scripts

```bash
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Project structure

```
mtask-client/
├── public/
└── src/
    ├── assets/           # images and banner
    ├── components/shared # logo
    ├── Firebase/         # Firebase app and auth setup
    ├── Hooks/            # Axios instance
    ├── Layout/           # Root and Dashboard layouts
    ├── Pages/
    │   ├── Dashboard/    # ToDo board, add task, update task
    │   ├── Home/  Login/  Register/  Profile/
    │   ├── WhyTasky/  FAQ/  Navbar/  Footer/  Error/
    ├── Providers/        # AuthProvider (Firebase auth context)
    ├── Routes/           # PrivateRoute
    └── main.jsx          # router setup
```

## Author

Built by [Sakebul Islam](https://sakebul.com) · [LinkedIn](https://www.linkedin.com/in/sakebul-islam)
