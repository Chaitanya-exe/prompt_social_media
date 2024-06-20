import Provider from "@/components/Provider";
import styles from "../styles/globals.css";
import Nav from "@/components/Nav";

export const metadata = {
    title: "Prompts for AI bots",
    description: "Discover prompts for AI chatbots to maximize their utility.",
    icon: 'assets/images/logo.svg'
}

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <Provider>

                <div className="main">
                    <div className="gradient"/>
                </div>

                <main className="app">
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default Rootlayout