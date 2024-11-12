import "./App.css";
import React, { useState, useEffect } from "react";
import AddUserForm from "./Components/UserForm";
import UserList from "./Components/UserList";
import axios from "axios";

// Type definition for User
interface User {
  id: number;
  name: string;
  email: string;
  dob: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        console.log(response);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const addUser = (user: User) => {
    async function addUserData() {
      await axios.post("http://localhost:3001/users", user, {
        headers: { "Content-Type": "application/json" },
      });
    }
    setUsers((prevUsers) => [...prevUsers, user]);
    addUserData();
  };

  const updateUser = (updatedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user,
      ),
    );
  };

  const deleteUser = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    async function deleteUserData() {
      await axios.delete(`http://localhost:3001/users/${id}`);
    }
    deleteUserData();
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-blue-600 text-center mb-6">
        User Registration
      </h1>

      <AddUserForm onAddUser={addUser} />
      {users.length == 0 ? (
        <div>No Users</div>
      ) : (
        <UserList
          users={users}
          onUpdateUser={updateUser}
          onDeleteUser={deleteUser}
        />
      )}
    </div>
  );
};

export default App;
