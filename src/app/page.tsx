import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Landing Page Itau</h1>
      <p>Criacao de Landing Page Projeto</p>
      <Image
        src="/assets/logo.svg" 
        alt="Next.js Logo"
        width={200}
        height={200}
      />
    </div>
  );
}