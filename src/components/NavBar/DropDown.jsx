import LinkNav from "./LinkNav";
import { routes } from "./NavBar";
import {
  DropdownContainer,
  LinkContainer,
} from "/src/components/NavBar/NavBar.style";

function Dropdown({ isOpaque }) {
  return (
    <DropdownContainer $isOpaque={isOpaque}>
      <LinkContainer>
        {routes.map((el, index) => (
          <LinkNav
            key={name + index}
            title={el.title}
            href={el.href}
            subtitle="Subtitlu"
          />
        ))}
      </LinkContainer>
    </DropdownContainer>
  );
}

export default Dropdown;
