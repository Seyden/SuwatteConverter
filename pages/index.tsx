import Link from 'next/link'

import SocialButton from '@/components/socialButton'
import SocialImages from '@/public/socialImages'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <p className="py-10 md:py-0 font-header text-center text-4xl lg:text-6xl lg:leading-relaxed font-bold tracking-wide mb-10">
        Manga Backup Converter
      </p>
      <div className="flex flex-col bg-lightbg md:max-w-3xl xl:max-w-4xl rounded-xl px-6 lg:px-10 relative items-center justify-content-center">
        <p className="text-2xl md:max-w-3xl xl:max-w-4xl rounded-xl px-6 lg:px-10 py-6">
          Convert my backup to
        </p>
        <div className="flex-row pb-4">
          <Link href="/suwatte">
            <button className="border-solid border-2 text-lg border-white p-2 rounded-md cursor-pointer hover:bg-white hover:text-black duration-200 mx-2">
              Suwatte
            </button>
          </Link>
        </div>
      </div>
      <div className="inline-flex flex-col justify-center items-center mt-10">
        <ul className="flex items-center">
          <SocialButton
            name="discord"
            url="https://discordapp.com/users/197818400196657152"
            color="hover:text-blurple"
            svgPath={SocialImages.Discord}
          />
        </ul>
        <footer className="py-6 text-center max-w-screen">© 2024 Suwatte Converter by Seyden, Website by Brian Dashore</footer>
      </div>
    </div>
  )
}