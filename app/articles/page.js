import Link from 'next/link'


export default function Articles() {
  return (
    <>
        <div className="flex items-center justify-center h-screen">
            <h1>Articles</h1>
            <Link href="/">
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Go to Home
                </button>
            </Link>
        </div>
    </>
  )
}
