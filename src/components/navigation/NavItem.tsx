import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function NavItem(props: any) {
  const t = useTranslations('Navbar');
  const items = ['about', 'skills', 'projects', 'contact'] as const;
  var vMargin = "";
  if (props.isOpen) {
    vMargin = "my-5"
  }
  return (
    <>
      {items.map((item) => (
        <div
          key={item}
        >
          <li className="hover:text-hover whitespace-nowrap">
            <Link href={t(`${item}.link`)}>
              {t(`${item}.name`)}
            </Link >
          </li>
        </div>
      ))}
    </>
  );
};
