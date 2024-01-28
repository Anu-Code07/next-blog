import Link from "next/link";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blogs",
    path: "/blog    ",
  },
];

export default function Navbar() {
  return (
    <div>
      <div className="nav-logo"></div>
      <div className="nav-links">
        {links?.map((link) => {
          return (
            <Link href={link.path} key={link.path}>
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
