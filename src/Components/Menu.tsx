const items = [
  { label: "About me", href: "./" },
  { label: "Skills", href: "./" },
  { label: "Projects", href: "./" },
  { label: "Recommendations", href: "./" },
];
const Menu = () => {
  return (
    <div>
      <ul className="list-none flex gap-20">
        {items.map((item) => (
          <li key={item.href} className="list-none">
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Menu;
