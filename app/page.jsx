import Feed from "@/components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden"/>
        <span className="text-center orange_gradient">AI powered Prompts</span>
      </h1>
      <p className="desc text-center">Promtopia is an open source & AI powered prompt generating tool to maximize the use of the AI tools available to us today. People like you can generate creative prompts to solve or tackle complex issues and make the work easier.</p>
      <Feed />
    </section>
  )
}

export default Home