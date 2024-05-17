import React, { useMemo, memo } from "react";

const UserItem = memo(({ user }) => {
  console.log(`Rendering UserItem ${user.id}`);
  return (
    <div>
      <h3>{user.userName}</h3>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </div>
  );
});

const UserList = ({ users }) => {
  console.log("Rendering UserList");

  const userList = useMemo(() => {
    return users.map((user) => <UserItem key={user.id} user={user} />);
  }, [users]);

  return (
    <div>
      <h2>User List</h2>
      {userList}
    </div>
  );
};

export default UserList;
