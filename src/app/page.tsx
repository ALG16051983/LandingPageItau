import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Case Study</h1>
      <p>This is a simple case study example using Next.js.</p>
      <Image
        src="/next.svg" 
        alt="Next.js Logo"
        width={200}
        height={200}
      />
    </div>
  );
}