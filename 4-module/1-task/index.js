function makeFriendsList(friends) {
  const ul = document.createElement("ul");

  let li;

  for (const friend of friends) {
    li = document.createElement("li");
    li.innerHTML = `${friend.firstName} ${friend.lastName}`;
    ul.append(li);
  }

  return ul;
}
