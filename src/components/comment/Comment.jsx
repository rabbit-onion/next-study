'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const user1 = {
  name: 'Neytiri',
  avatarUrl: '/neytiri.jpeg',
};

const user2 = {
  name: 'Jake',
  avatarUrl: '/jake.webp',
};

const arrComment = [
  {
    cont: '코멘트1',
    date: '2024.11.11',
    user: user1,
  },
  {
    cont: '코멘트2',
    date: '2024.11.12',
    user: user2,
  },
  {
    cont: '코멘트3',
    date: '2024.11.13',
    user: user1,
  },
];

const CommentItem = ({ cont, date, user }) => {
  // const { cont, date, user } = props;

  // const props = {
  //   cont: "코멘트1",
  //   date: "2024.11.11"
  //   user: {
  //      name: "Neytiri", avatarUrl: "/neytiri.jpeg"
  //   }
  // };
  // console.log(props);

  return (
    <CommentItemStyled>
      <UserInfo user={user} />
      <strong>{cont}</strong>
      <span>{date}</span>
    </CommentItemStyled>
  );
};

const CommentItemStyled = styled.div`
  color: red;
`;

const Comment = () => {
  return (
    <div className='flex flex-col gap-10'>
      {/* <CommentItem cont='코멘트1' date='2024.11.11' />
      <CommentItem cont='코멘트2' date='2024.11.12' />
      <CommentItem cont='코멘트3' date='2024.11.13' /> */}
      {arrComment.map((item, index) => (
        <CommentItem key={index} cont={item.cont} date={item.date} user={item.user} />
      ))}
    </div>
  );
};

const UserInfo = ({ user }) => {
  // const {user} = props;

  // console.log(props);
  return (
    <>
      <UserInfoStyled>
        <Image src={user.avatarUrl} alt={user.name} width='100' height={100} />
      </UserInfoStyled>
      <UserNameStyled>{user.name}</UserNameStyled>
    </>
  );
};

const UserInfoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  img {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const UserNameStyled = styled.em`
  color: blue;
  text-decoration: none;
`;

export default Comment;
