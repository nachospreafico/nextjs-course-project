import Link from "next/link";

const links = [
  {
    href: "/client",
    label: "Client",
  },
  {
    href: "/drinks",
    label: "Drinks",
  },
  {
    href: "/prisma-example",
    label: "Prisma",
  },
  {
    href: "/tasks",
    label: "Tasks",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href={"/"} className="btn btn-primary">
          Home
        </Link>
        <ul className="menu menu-horizontal md:ml-8 gap-2">
          {links.map((elem, index) => {
            return (
              <li key={index}>
                <Link href={elem.href} className="capitalize">
                  {elem.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
