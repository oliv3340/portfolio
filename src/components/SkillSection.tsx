import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import DynamicIcon from "./DynamicIcon";
import HrSeparator from "./HrSeparator";

export default function SkillSection() {
    const t = useTranslations("Skills");
    const missions = useTranslations("Missions");
    const currentLocale = useLocale()
    const items = ['mirakl', 'cdiscount', 'altrnativ', 'bouygues'] as const;
    const technoTools = [
        "BiLogoGoogleCloud",
        "SiAmazonaws",
        "VscAzure",
        "SiTerraform",
        "SiArgo",
        "SiDatadog",
        "SiPrometheus",
        "SiHelm",
        "SiKubernetes",
        "SiFirebase",
        "DiPostgresql",
        "SiGithub",
        "SiGit",
        "SiGo",
        "SiPython",
        "SiReact",
        "SiNextdotjs",
        "SiTailwindcss"
    ]

    return (
        <>
            <div className="min-w-screen bg-oliv py-20 font-body" id="skills">
                <div className="flex flex-col justify-center items-center py-12">
                    <div className="container px-5 max-w-[900px]">
                        <div className="title text-3xl md:text-4xl mb-8">{t('title')}</div>
                        <div className="">{t('description')}</div>
                    </div>
                </div>
                <div className="mx-auto max-w-[1200px] pb-12">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-2xl title my-4">{t('subtitle')}</div>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mx-5">
                            {items.map((item, index) => {
                                return (
                                    <>
                                        <div key={index} className="w-[250px] h-[200px] rounded my-6 md:my-12 shadow-lg hover:shadow-2xl">
                                            <Link href={currentLocale + '/missions/' + item}>
                                                <Image className="object-cover w-full h-full rounded-t" src={"/images/companies/" + item + ".jpg"} width={200} height={200} alt="" />
                                                <div className="flex items-center justify-center align-center p-[10px] bg-white rounded-b border-t-[1px] border-[#888787]">
                                                    <div className="text-lg body uppercase tracking-widest">{missions(`${item}.title`)}</div>
                                                </div>
                                            </Link>
                                        </div >
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <HrSeparator />
                <DynamicIcon components={technoTools} color="#3e413f" size="40" />
            </div >
        </>
    )
}
