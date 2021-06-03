import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/vanilla-css">Vanilla CSS</Link>
        </li>
        <li>
          <Link href="/tailwind-css">Tailwind CSS</Link>
        </li>
        <li>
          <Link href="/material-ui">Material UI</Link>
        </li>
      </ul>
    </div>
  );
}
