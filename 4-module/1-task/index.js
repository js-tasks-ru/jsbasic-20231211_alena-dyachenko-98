function makeFriendsList(friends) {
  let newList = document.createElement("ul");
  for (let value of friends) {
    let newItem = document.createElement("li");
    newItem.textContent = value.firstName + " " + value.lastName;
    newList.append(newItem);
  }
  return newList;
}


