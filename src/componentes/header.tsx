import Image from "next/image" ;
import Logo from "/assets/Logo.svg";
import { ItemMenu } from "./ItemMenu"; 

export function Header() {
  return (
    <header className="flex items-center w-full h-20 bg-primary-orange">
      <div className="w-full max-w-[1246px] px-[15px] mx-auto">
        <div>
          <div className="flex items-center gap-14">
            <Image src={Logo} alt="Logo" />
            <ul className="flex items-center gap-12">
              <li>
                <ItemMenu name="Para você" />
              </li>
              <li>
                <ItemMenu name="Para sua empresa" />
              </li>
              <li>
                <ItemMenu name="Serviço" />
              </li>
              <li>
                <ItemMenu name="Contato" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <div
      style={{ backgroundImage: `url('/assets/bg-hero.jpg')` }}
      className="h-screen bg-cover bg-center flex items-center justify-center" // Adicionado flex para centralizar o conteúdo
    >
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao nosso site</h1>
        <p className="text-lg mb-8">Descubra nossos serviços e soluções.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Saiba mais
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}