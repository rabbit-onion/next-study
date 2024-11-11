export default function Nav2(props) {
  console.log(props);
  // props- 객체 형태로 전달됨. 객체 안에 배열이 담긴 상태
  // const props = {
  // nav: [navigationItem]
  // }
  console.log(props.nav);
  // const props.nav = [navigationItem]

  // map() 문법
  // 배열이름.map((item, index) => (반복코드))

  return (
    <ul className='flex gap-4'>
      {props.nav.map((item, index) => (
        // item = {title, url}
        <li key={index}>
          <a href={item.url} className='h-16 flex items-center'>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

// export default Nav2;
