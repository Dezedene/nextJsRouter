import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
import UseStateTest from './components/Hooks/UseStateTest'
import UseEffect from './components/Hooks/UseEffectTest'

export default function Home() {
  return (
    <main>
      <Link href="/users">Users</Link>
      <>
        <ProductCard />
        <UseStateTest />
        <UseEffect />
      </>
    </main>
  )
}
