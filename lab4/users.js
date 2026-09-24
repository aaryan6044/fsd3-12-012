// we use in memory data base
let users = [
  { id: 1, name: "kash", mob: "98759xxxxx", email: "kash.example@exam.com" },
  {
    id: 2,
    name: "aakash",
    mob: "98759xxxxx",
    email: "aakash.example@exam.com",
  },
];

let nextId = 3;

export const getAlluser = () => {
    return users;

}

export const getUserById = (pid) => {
    const found = users.find((user)=> user.id == pid)
    return found;
}
export const getUsers = () => users;

export const addUser = (user) => {
  user.id = nextId++;
  users.push(user);

  return user;
};

export const updateUser = (pid,updateData) => {
    const index = user.findIndex((user)=> user.id == pid);
    if(index == -1){
        return false;
    }
    updateData.id = pid;
    users[index] = updateData;
    return updateData;
}

export const deleteUser = (pid,deleteUser) => {
    const index = user.findIndex((user)=> user.id == pid);
    if(index == -1){
        return false;

    }
    users.splice(index,1);

}