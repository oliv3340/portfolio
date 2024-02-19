import React, { useState } from "react";
import Select from "react-select";
import { useRouter, usePathname } from '@/navigation';
import { useLocale } from 'next-intl';

const customStyle = {
  container: (styles: { [x: string]: any; }) => ({
    ...styles,
    ":focus": {
      ...styles[":focus"],
      outline: "none",
      ":hover": {
        ...styles[":hover"],
        borderColor: "#e9be91",
      }
    },
    fontFamily: "Source Sans Pro",
    fontSize: "0.95em",
    letterSpacing: "0.1em",

  }),
  control: (baseStyles: any, state: { isFocused: any; }) => ({
    ...baseStyles,
    borderColor: state.isFocused ? 'none' : '#e9be91"',
    backgroundColor: "#f7f4f2",
    borderWidth: 0,
    fontFamily: "Source Sans Pro",
  }),
}

const OPTIONS = [
  { label: "FR", value: "fr" },
  { label: "EN", value: "en" },
]

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState();
  const currentLocale = useLocale();
  const optionIndex = OPTIONS.findIndex(x => x.value === currentLocale)


  const handleChange = (e: any) => {
    setSelected(e.value);
    router.push(pathname, { locale: e.value });
  };

  return (
    <>
      <div className="mx-3 flex justify-center items-center">
        <Select
          onChange={(selected) => handleChange(selected)}
          instanceId='LanguageSelector'
          styles={customStyle}
          defaultValue={OPTIONS[optionIndex]}
          options={OPTIONS}
          isRtl={true}
          classNamePrefix='myDropDown'
          theme={(theme) => ({
            ...theme,
            borderRadius: 4,
            colors: {
              ...theme.colors,
              primary25: 'white',
              primary: '#e9be91',
            },
          })}
        />
      </div>
    </>
  )
}
