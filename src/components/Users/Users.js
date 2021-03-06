import "./Users.css";

function Users(props) {
  const users = [
    {
      "userId": 1,
      "id": 1,
      "title": "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "Qui est esse",
      "body": "Est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "Ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "Et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
  ];

  const user = users.map((user) => {
    return (
      <div className="card">
        <h3>{user.title}</h3>
        <p>{user.body}</p>
      </div>
    )
  })

  return (
    <div className="board">
      {user}
    </div>
  );
}

export default Users;