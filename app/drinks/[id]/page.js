import Link from "next/link";
import Image from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`);
  if (!response.ok) {
    throw new Error("Failed fetching the drink!");
  }
  return response.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Back to Drinks
      </Link>
      <Image
        src={imgSrc}
        alt={`${title} drink`}
        height={300}
        width={300}
        className="w-48 h-48 rounded-lg mb-4"
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;
