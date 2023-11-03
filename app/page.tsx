import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col p-6'>
      <div className='flex h-20 shrink-0 items-end rounded-lg bg-blue-600 p-4 md:h-52'>
        <div
          className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent "
        />
      </div>
    </main>
  )
}
