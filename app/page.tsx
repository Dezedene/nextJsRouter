import Link from 'next/link'
// import ProductCard from './components/ProductCard/ProductCard'
// import UseStateTest from './components/Hooks/UseStateTest'
import UseEffect from './components/Hooks/UseEffectTest'
import UseMemoTest from './components/Hooks/UseMemoTest'

export default function Home() {
  return (
    <main>
      <Link href="/users" className='border-2 border-slate-950 p-2 mr-2'>Go to Users page</Link>
      <>
        <div className='mt-40'>
          {/* <ProductCard />
          <UseStateTest />  */}
          <UseEffect /> 
          <UseMemoTest />
        </div>
      </>
    </main>
  )
}
