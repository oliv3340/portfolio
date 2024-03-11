"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

export default function ProjectSection() {
    const t = useTranslations("Projects")
    const [repos, setRepos] = useState<any[]>([]);
    useEffect(() => {
        fetch('https://api.github.com/users/oliv3340/repos?sort=pushed&limit=10')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setRepos(data);
            });
    }, []);

    return (
        <>
            <div className="min-w-screen bg-creme py-20 font-body" id="projects">
                <div className="container mx-auto md:w-1200 py-12">
                    <div className="flex flex-col justify-center items-center">
                        <div className="title mx-auto px-5 text-3xl md:text-4xl mb-8">{t("title")}</div>
                        <div className="flex flex-wrap justify-center item-center max-w-[90%] text-center">

                            {t('text')}
                            <Link className="flex flex-wrap hover:text-hover" href="https://github.com/oliv3340">
                                <SiGithub size="20" className="ml-2 mr-1" /> Github
                            </Link>

                        </div>
                        <div className="mx-auto max-w-[1200px]">
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-wrap justify-center gap-6 md:gap-8 my-12">
                                    {repos.map((repo, index) => (
                                        <Link href={`${repo.html_url}`} className="hover:text-hover" key={index}>
                                            <div className="border-[1px] p-2 rounded w-[325px] h-[114px]">
                                                <div className="flex justify-between">
                                                    <div className="body uppercase tracking-wider line-clamp-1">
                                                        {repo.name}
                                                    </div>
                                                    <div className="capitalize text-xs bg-[#dcd5d5] py-1 px-2 rounded-full">
                                                        {repo.visibility}
                                                    </div>
                                                </div>
                                                <div className="text-sm my-3 line-clamp-1">
                                                    {repo.description}
                                                </div>
                                                <div className="flex justify-between align-middle">
                                                    <div className="label text-xs">
                                                        {repo.language}
                                                    </div>
                                                    <div className="mx-4">
                                                        <SiGithub size="20" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
