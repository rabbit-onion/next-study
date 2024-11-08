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
      <Section title='섹션2' desc='설명2'>
        dddd
      </Section>
      <Section title='섹션3' desc='설명3'>
        dddddddddd
      </Section>
    </>
  );
}
