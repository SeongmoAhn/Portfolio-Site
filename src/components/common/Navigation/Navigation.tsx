import { Link } from "react-router-dom";
import {navItems} from "../../../data/navigation.ts";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <ul className={styles.list}>
        {navItems.map(item => (
          <li key={item.id}>
            {item.type === "route" ? (
              <Link to={`/${item.id}`} className={styles.highlight}>{item.label}</Link>
            ) : (
              <a href={`#${item.id}`}>{item.label}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}