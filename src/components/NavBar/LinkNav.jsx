import { LinkNavStyle } from "./NavBar.style";

function LinkNav({ title, href, onClick, isActive }) {
  return (
    <>
      <LinkNavStyle
        to={href}
        className={isActive ? "active" : ""}
        onClick={onClick}
      >
        {title ? title : "Link"}
      </LinkNavStyle>
    </>
  );
}

export default LinkNav;
