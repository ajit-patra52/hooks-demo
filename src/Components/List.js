const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

function List() {
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
  return (
    <>
      <h3>List Components</h3>
      <ol>{listItems}</ol>
      <hr />
      <table style={{ border: "2px solid red" }}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
          </tr>
        </thead>
        <tbody>
          {products.map((pr) => (
            <tr key={pr.id}>
              <td>{pr.id}</td>
              <td>{pr.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
