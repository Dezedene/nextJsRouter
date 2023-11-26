import Link from 'next/link'
// import ProductCard from './components/ProductCard/ProductCard'
// import UseStateComponent from './components/Hooks/UseStateComponent'
// import UseEffect from './components/Hooks/UseEffectComponent'
import UseMemoComponent from './components/Hooks/UseMemoComponent'
import UseRefComponent from './components/Hooks/UseRefComponent'

export default function Home() {
  return (
    <main>
      <Link href="/users" className='border-2 border-slate-950 p-2 mr-2'>Go to Users page</Link>
      <>
        <div className='mt-40'>
          {/* <ProductCard />*/}
          {/* <UseStateComponent />   */}
          {/* <UseEffect />  */}
          {/* <UseMemoComponent /> */}
          <UseRefComponent />
        </div>
      </>
    </main>
  )
}
