import dynamic from 'next/dynamic'
import SocialButton from '@/components/socialButton'
import SocialImages from '@/public/socialImages'
import SuwatteWrapper from '@/components/suwatteWrapper'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <p className="py-10 md:py-0 font-header text-center text-4xl lg:text-6xl lg:leading-relaxed font-bold tracking-wide mb-10">
        Suwatte Converter
      </p>
      <div className="bg-lightbg md:max-w-3xl xl:max-w-4xl rounded-xl px-6 lg:px-10 py-6">
        <p className="text-red-500 text-left my-3">
          If your backup is not formatted properly, check devtools to see the converter's raw
          output.
        </p>
        <div className="">
          <SuwatteWrapper />
        </div>
      </div>
      <div className="inline-flex flex-col justify-center items-center mt-5">
        <Link href="/">
          <button className="border-solid border-2 text-lg border-white p-2 rounded-md cursor-pointer hover:bg-white hover:text-black duration-200 mx-2">
            Go Home
          </button>
        </Link>
        <ul className="flex items-center pt-4">
          <SocialButton
            name="github"
            url="https://github.com/Seyden"
            color="hover:text-orange-400"
            svgPath={SocialImages.Github}
          />
          <SocialButton
            name="discord"
            url="https://discordapp.com/users/197818400196657152"
            color="hover:text-blurple"
            svgPath={SocialImages.Discord}
          />
        </ul>
        <footer className="py-6 text-center max-w-screen">
          © 2024 Suwatte Converter by Seyden, Website by Brian Dashore
        </footer>
      </div>
    </div>
  )
}