import Link from "next/link";

const HomePage = () => {
  return (
    <main>
      <header>
        <h1 className="text-5xl mb-8 font-bold">My first NextJS App</h1>
        <Link href={"/client"} className="btn btn-accent p-2 w-fit">
          Let's get started!
        </Link>
      </header>
    </main>
  );
};

export default HomePage;
