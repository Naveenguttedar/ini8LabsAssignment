
# User Registration Application

This is a user registration application built with **React** and **TypeScript** for the frontend, styled using **Tailwind CSS**, and using **Fastify** and **LowDB** for the backend. The application provides a simple interface to manage users, allowing them to view a list of registered users, add a new user, update user information, and delete users from the list.

---

## File Structure

```plaintext
project-root/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── UserList.tsx       # Displays list of users
│   │   │   ├── UserForm.tsx       # Form for adding and edition a user
│   │   │   ├── UserTable.tsx      # Displays user information in a table
│   │   │  
│   │   ├── App.tsx                # Main application entry point
│   │   └── index.tsx              # React entry point
│   └── public/
│       └── index.html             # Main HTML file
├── backend/
│   ├── server.js                  # Fastify server setup with routes
│   ├── db.json                    # JSON database file for LowDB (automatically created in server)
├── package.json                   # Dependencies and scripts
└── README.md                      # Project documentation
```

---

## Technologies Used

### Frontend

- **React**: A JavaScript library for building dynamic, responsive user interfaces.
- **TypeScript**: Adds static type definitions to JavaScript, improving code reliability and maintainability.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development. Tailwind is used for styling components with responsive design utilities and predefined classes, allowing for quick and visually consistent designs.

### Backend

- **Fastify**: A lightweight and fast web framework for Node.js. Fastify is used here to create a REST API for handling user data with endpoints to get, add, update, and delete users.
- **LowDB**: A small, local JSON-based database. LowDB is used to persist user data, which makes it suitable for lightweight and local data storage needs.

---

## Features of Each Technology

- **React**: Enables the creation of a component-based UI where each part of the interface (e.g., user list, add user form) is encapsulated in its own component for easy reuse and maintainability.
- **Tailwind CSS**: Provides utility classes that streamline styling and layout, making the app responsive and visually cohesive with minimal CSS writing.
- **Fastify**: Known for its low overhead, Fastify allows the app to have a fast, efficient backend server that supports both JSON requests and structured route handling.
- **LowDB**: A lightweight and flexible database solution. By storing data in a JSON file, LowDB allows for easy storage, retrieval, and modification of data in a structured format, suitable for small applications.

---

## Installation and Setup

### Prerequisites

Ensure you have **Node.js** installed on your machine. You can use **npm** or **yarn** for managing dependencies.

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Naveenguttedar/ini8LabsAssignment.git
   cd user-registration-app
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Run Backend (Fastify Server)**:

   Navigate to the backend folder and start the server.

   ```bash
   cd backend
   node server.js
   ```

   The backend server will start at \`http://localhost:3001\`.

4. **Run Frontend (React App)**:

   In a new terminal, navigate to the frontend folder and start the React development server.

   ```bash
   cd frontend
   yarn start
   ```

   The frontend will be available at \`http://localhost:3000\`.

---

## Project Features

1. **View Users**: The app displays a list of registered users with their information, fetched from the backend.
2. **Add New User**: Users can add a new entry by filling out a form with Name, Email, and Date of Birth fields.
3. **Update User**: An "Edit" button on each user card opens a modal allowing users to edit and save updated information.
4. **Delete User**: The "Delete" button removes a user from the list after confirmation.

---

## Data Flow

### Frontend (React + Axios)

The frontend communicates with the backend using \`axios\` to fetch and send data. \`useEffect\` and \`useState\` manage the data lifecycle, including fetching the user list and updating the UI in response to CRUD operations.

### Backend (Fastify + LowDB)

The backend API handles the following routes:

- **GET /api/users**: Fetches the list of users.
- **POST /api/users**: Adds a new user.
- **PUT /api/users/:id**: Updates an existing user’s details.
- **DELETE /api/users/:id**: Deletes a user by ID.

LowDB is used to store data in a \`db.json\` file, providing a persistent JSON-based database for handling user data.

---

## License

This project is open-source and available under the MIT License.
