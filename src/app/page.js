import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 py-4">
        <Header />
      </div>
    </main>
  );
}
