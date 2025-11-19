"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/Button";
import ThemeSwitcher from "@/components/themeToggle/ThemeToggle";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserCircleIcon, Menu01Icon } from "@hugeicons/core-free-icons";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <h3>Bookly</h3>
        <Image
          src="/plane.svg"
          alt="bookly"
          width={25}
          height={25}
        />
      </Link>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Button typeStyle="secondary">
              <HugeiconsIcon
                icon={UserCircleIcon}
                strokeWidth={1}
              />
            </Button>
          </li>
          <li>
            <Button
              typeStyle="secondary"
            >
              <HugeiconsIcon
                icon={Menu01Icon}
                strokeWidth={1}
              />
            </Button>
          </li>
        </ul>

        <ul>
          <li>
            <Link href={"/"}>
              Собственникам
            </Link>
          </li>
          <li>
            <Link href={"/"}>Покупателям</Link>
          </li>
          <li>
            <Link href={"/about"}>О нас</Link>
          </li>
        </ul>

        <ul>
          <li>
            <ThemeSwitcher />
          </li>
          <li>
            <Button
              onClick={() => null}
              typeStyle={"secondary"}
            >
              Стать продавцом
            </Button>
          </li>
          <li>
            <Button onClick={() => null}>
              Войти
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
