function Nav(props) {
  console.log(props);

  // map() 문법
  // const array = [1, 2, 3]
  // array.map((item, index) => (반복 코드))

  return (
    <nav>
      <ul>
        {props.nav.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
