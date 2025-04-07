function showSalary(users, age) {
  let filteredUsers = users.filter((user) => user.age <= age);

  let salary = filteredUsers.map((user) => `${user.name}, ${user.balance}`);

  return salary.join("\n");
}
