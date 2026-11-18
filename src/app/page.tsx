'use client'
import useSWR from 'swr'

export default function Home() {

  const fetcher = (url: string) => fetch(url).then(res => res.json())

  const { data, error, isLoading } = useSWR(`https://dummyjson.com/products/search?q=phone`, fetcher)


  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {JSON.stringify(data)}
    </div>
  );
}
