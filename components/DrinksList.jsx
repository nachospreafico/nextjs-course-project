import Link from "next/link";
import Image from "next/image";

const DrinksList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink, index) => {
        return (
          <li key={index} className="text-xl font-medium">
            <Link href={`/drinks/${drink.idDrink}`}>{drink.strDrink}</Link>
            <div className="relative h-48 mb-4 ">
              {" "}
              <Image
                src={drink.strDrinkThumb}
                fill
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw"
                alt={`${drink.strDrink} drink`}
                className="rounded-md object-cover"
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default DrinksList;
