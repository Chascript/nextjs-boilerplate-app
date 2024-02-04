import Link from 'next/link';
import Greetings from '../components/greetings';

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <Greetings firstName="world" />
    </div>
  );
}
