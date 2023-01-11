import './App.css';

function Header({ title }) {
  return <h1>{title}</h1>
}

function Nav({ data }) {
  const lis = []
  for(let i=0; i<data.length; i++) {
    lis.push(<li key={data[i].id}>
      <a 
      href={"/read/"+data[i].id}>
        {data[i].title}
      </a>
    </li>)
  }
  return <ul>
    {lis}
  </ul>
}

function Article({ title, body }) {
  return <div>
    <h2>{title}</h2>
    {body}
  </div>
}

function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
  ]
  return (
    <div className="App">
      <Header title="React!"></Header>
      <Nav data={topics}></Nav>
      <Article title="Welcome" body="Hello, React"></Article>
      <Article title="Bye" body="Goodbye, React"></Article>
    </div>
  );
}

export default App;
