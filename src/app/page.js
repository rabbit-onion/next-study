import Comment from '@/components/comment/Comment';
import Section from '@/components/layout/Section';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Section title='섹션1' desc='설명1'>
        <ul>
          <li>news1</li>
          <li>news2</li>
          <li>news3</li>
        </ul>
      </Section>
      <Section title='코멘트' desc='나의 글에 코멘트 달린 목록'>
        <Comment />
      </Section>
      <Section title='섹션3' desc='설명3'>
        dddddddddd
      </Section>
    </>
  );
}
