import "./App.css";
import React, { useState, useEffect } from "react";
import AddUserForm from "./Components/UserForm";
import UserList from "./Components/UserList";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  dob: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingStatus, setEditingStatus] = useState<boolean>(false);
  const [currentUser, setCureentUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://ini8labsassignment.onrender.com/users",
        );
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const addUser = (user: User) => {
    async function addUserData() {
      await axios.post("https://ini8labsassignment.onrender.com/users", user, {
        headers: { "Content-Type": "application/json" },
      });
    }
    setUsers((prevUsers) => [...prevUsers, user]);
    addUserData();
  };

  const updateUser = (modifiedUser: User) => {
    console.log(modifiedUser);
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === modifiedUser.id ? modifiedUser : user,
      ),
    );
    async function updateUserData() {
      await axios.put(
        `https://ini8labsassignment.onrender.com/users/${modifiedUser.id}`,
        modifiedUser,
        { headers: { "Content-Type": "application/json" } },
      );
    }
    setCureentUser(null);
    setEditingStatus(false);
    updateUserData();
  };
  const editingUser = (updatedUser: User) => {
    console.log(updatedUser);
    setCureentUser(updatedUser);

    setEditingStatus(true);
  };
  const deleteUser = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    async function deleteUserData() {
      await axios.delete(`https://ini8labsassignment.onrender.com/users/${id}`);
    }
    deleteUserData();
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-blue-600 text-center mb-6">
        User Registration"
      </h1>

      {!editingStatus ? (
        <AddUserForm onAddUser={addUser} />
      ) : (
        <AddUserForm
          onAddUser={addUser}
          editUser={currentUser}
          editUserFunc={updateUser}
        />
      )}

      {users.length == 0 ? (
        ""
      ) : (
        <UserList
          users={users}
          onUpdateUser={editingUser}
          onDeleteUser={deleteUser}
        />
      )}
    </div>
  );
};

export default App;
