import React from "react";
import { useTranslations } from "next-intl";
import ToolsSection from "./ToolsSection";

export default function SkillSection() {
    const t = useTranslations("Skills");
    const items = ['bouygues', 'altrnativ', 'cdiscount', 'mirakl'] as const;

    return (
        <>
            <div className="min-w-screen bg-oliv py-20 font-body" id="skills">
                <div className="flex flex-col justify-center items-center py-12">
                    <div className="container px-5 max-w-[900px]">
                        <div className="title text-3xl md:text-4xl mb-8">{t('title')}</div>
                        <div className="">{t('description.p1')}</div>
                        <div className="my-4">{t('description.p2')}</div>
                        <div className="">{t('description.p3')}</div>
                    </div>
                </div>
                <div className="mx-auto max-w-[900px] py-12">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-wrap justify-center gap-8 mx-5">
                            {items.map((item, index) => {
                                const path = t(`experience.${item}.logo`)
                                console.log(path)
                                return (
                                    <>
                                        <div className="max-w-sm rounded min-h-[250px] bg-white shadow-lg hover:shadow-2xl border-2 border-white hover:border-brown-light" key={index}>
                                            <div className="px-6 py-4">
                                                <div className="flex h-full lg:mx-0">
                                                    <div className="flex items-center align-center pb-2">
                                                        <div className="font-bold text-xl">{t(`experience.${item}.title`)}</div>
                                                        <div className="mx-1 italic">- {t(`experience.${item}.location`)}</div>
                                                    </div>

                                                </div>
                                                <span className="inline-block bg-gray-200 rounded-full py-1 text-sm text-gray-700 mb-2">{t(`experience.${item}.dateShort`)}</span>
                                                <p className="text-gray-700 text-base line-clamp-4">
                                                    {t(`experience.${item}.description`)}
                                                </p>
                                            </div>
                                            <div className="px-6 pt-2 pb-4">
                                                <div className="flex justify-center items-center">
                                                    <span className="inline-block bg-brown-light hover:bg-brown-hover rounded px-4 py-2 text-sm font-semibold text-black mr-2 mb-2">{t(`experience.readmore`)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <hr className="w-80 md:w-hrWidth h-hrHeight bg-lightBlack mx-auto my-8 border-0 rounded" />
                <ToolsSection />
            </div>
        </>
    )
}
