import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';

export default function NavItem(props: any) {
  const t = useTranslations('Navbar');
  const currentLocale = useLocale()
  const items = ['about', 'skills', 'projects', 'contact'] as const;

  return (
    <>
      {items.map((item) => (
        <div
          key={item}
          className="my-2"
        >
          <li className="hover:text-hover whitespace-nowrap">
            <Link href={"/" + currentLocale + "#" + item} onClick={props.toggle}>
              {t(`${item}.name`)}
            </Link >
          </li>
        </div>
      ))}
    </>
  );
};
