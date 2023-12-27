import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className='bg-orange-600 h-12 w-full flex justify-center items-center'>
        <div className='bg-white h-6 w-6 rounded mx-4'></div>
        <div className='mx-4'>Home</div>
        <div className='mx-4'>Blogs</div>
        <div className='mx-4'>About</div>
        <div className='mx-4'>Connect</div>
      </div>
      <div className='bg-orange-200 h-12 w-24 rounded-md m-4'>Explore</div>
    </main>
  )
}
