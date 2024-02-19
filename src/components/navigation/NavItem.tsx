import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function NavItem(props: any) {
  const t = useTranslations('Navbar');
  const items = ['about', 'skills', 'projects', 'contact'] as const;

  return (
    <>
      {items.map((item) => (
        <div
          key={item}
          className="my-2"
        >
          <li className="hover:text-hover whitespace-nowrap">
            <Link href={t(`${item}.link`)} onClick={props.toggle}>
              {t(`${item}.name`)}
            </Link >
          </li>
        </div>
      ))}
    </>
  );
};
