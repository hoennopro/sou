import React, { useState, useMemo } from "react";

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "huhu", age: 22 },
    { id: 2, name: "hihi", age: 17 },
    { id: 3, name: "haha", age: 20 },
    { id: 4, name: "hehe", age: 15 },
    { id: 5, name: "hoho", age: 19 },
  ]);

  const adultUsers = useMemo(() => {
    return users.filter((user) => user.age > 18);
  }, [users]);

  return (
    <div>
      <h2>Danh sách người dùng trên 18 tuổi:</h2>
      <ul>
        {adultUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
