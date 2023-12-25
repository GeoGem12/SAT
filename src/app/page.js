import Menu from '@/components/Menu'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full flex flex-row '>
      <Menu />
      <div className='w-full flex flex-col'>
        <p className='text-2xl font-bold text-center'>Bienvenido, George</p>
      </div>
    </div>
  )
}
