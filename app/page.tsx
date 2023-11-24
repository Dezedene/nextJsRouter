import Link from 'next/link';
import ProductCard from './components/ProductCard/ProductCard';
import UseStateTest from './components/Hooks/UseStateTest';

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <UseStateTest />
    </main>
  )
}
