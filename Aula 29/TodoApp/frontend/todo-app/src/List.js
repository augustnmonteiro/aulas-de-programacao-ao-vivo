function List() {

  let nome = "Lista de tarefas";

  let todos = [
    {title: "Todo #1", description: "###"},
    {title: "Todo #2", description: "###"},
    {title: "Todo #3", description: "###"},
    {title: "Todo #4", description: "###"},
    {title: "Todo #5", description: "###"},
  ];
  
  return (
    <ul>
      {todos.map((item) => {
        return <li>{item.title}</li>
      })}
    </ul>
  );
}

export default List;
