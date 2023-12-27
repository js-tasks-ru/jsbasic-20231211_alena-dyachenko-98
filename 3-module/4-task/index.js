function showSalary(users, age) {
  let arr = [];
  for (let value of users) {
    if (value.age <= age) {
      arr.push(value.name + ', ' + value.balance);
    }
  }
  return arr.join('\n');
}
