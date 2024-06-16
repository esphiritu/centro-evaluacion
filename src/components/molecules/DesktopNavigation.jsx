export default function DesktopNavigation({ links }) {
  return (
    <nav className="desktop-nav">
      <ul className="nav-elements flex px-4">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}