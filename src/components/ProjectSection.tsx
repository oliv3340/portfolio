"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

export default function ProjectSection() {
    const t = useTranslations("Projects")
    const [repos, setRepos] = useState<any[]>([]);
    useEffect(() => {
        fetch('https://api.github.com/users/oliv3340/repos?sort=updated')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setRepos(data);
            });
    }, []);

    return (
        <>
            <div className="min-w-screen bg-creme py-20 font-body" id="projects">
                <div className="container mx-auto md:w-1200 py-12">
                    <div className="flex flex-col justify-center items-center">
                        <div className="title mx-auto text-3xl md:text-4xl mb-8">{t("title")}</div>
                        <div className="mx-auto max-w-[1200px]">
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-wrap justify-center gap-6 md:gap-8 my-12">
                                    {repos.map((repo, index) => (
                                        <Link href={`${repo.html_url}`} className="hover:text-hover" key={index}>
                                            <div className="border-[1px] p-2 rounded w-[325px] h-[114px]">
                                                <div className="flex justify-between">
                                                    <div className="body uppercase tracking-wider">
                                                        {repo.name}
                                                    </div>
                                                    <div className="capitalize text-xs bg-[#dcd5d5] py-1 px-2 rounded-full">
                                                        {repo.visibility}
                                                    </div>
                                                </div>
                                                <div className="text-sm my-3">
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
