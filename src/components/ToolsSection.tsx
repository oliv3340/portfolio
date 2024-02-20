import React from "react";
import { DiPostgresql } from "react-icons/di";
import {
    SiAmazonaws,
    SiArgo,
    SiDatadog,
    SiFirebase,
    SiGit, SiGithub,
    SiGo,
    SiHelm,
    SiKubernetes,
    SiNextdotjs,
    SiPrometheus,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiTerraform
} from "react-icons/si";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";

export default function ToolsSection() {
    return (
        <>
            <div className="container mx-auto max-w-1200 py-12">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-wrap justify-center gap-4">
                        <BiLogoGoogleCloud color="#3e413f" size="40" />
                        <SiAmazonaws color="#3e413f" size="40" />
                        <VscAzure color="#3e413f" size="40" />
                        <SiTerraform color="#3e413f" size="40" />
                        <SiArgo color="#3e413f" size="40" />
                        <SiDatadog color="#3e413f" size="40" />
                        <SiPrometheus color="#3e413f" size="40" />
                        <SiHelm color="#3e413f" size="40" />
                        <SiKubernetes color="#3e413f" size="40" />
                        <SiFirebase color="#3e413f" size="40" />
                        <DiPostgresql color="#3e413f" size="40" />
                        <SiGithub color="#3e413f" size="40" />
                        <SiGit color="#3e413f" size="40" />
                        <SiGo color="#3e413f" size="40" />
                        <SiPython color="#3e413f" size="40" />
                        <SiReact color="#3e413f" size="40" />
                        <SiNextdotjs color="#3e413f" size="40" />
                        <SiTailwindcss color="#3e413f" size="40" />
                    </div>
                </div>
            </div>
        </>
    )
}
