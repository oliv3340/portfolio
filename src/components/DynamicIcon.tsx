import React from "react";
import * as IconsBi from "react-icons/bi";
import * as IconsSi from "react-icons/si";
import * as IconsVsc from "react-icons/vsc";

export default function DynamicIcon({ children, components, size, color }: any) {
    const array = components as []
    const DynamicBiIcon = ({ name }: any) => {
        const IconComponent = IconsBi[name as keyof typeof IconsBi];

        if (!IconComponent) { // Return a default one
            return (
                <></>
            )
        }
        return <IconComponent size={size} color={color} />;
    };
    const DynamicSiIcon = ({ name }: any) => {
        const IconComponent = IconsSi[name as keyof typeof IconsSi];

        if (!IconComponent) { // Return a default one
            return (
                <></>
            )
        }
        return <IconComponent size={size} color={color} />;
    };
    const DynamicVscIcon = ({ name }: any) => {
        const IconComponent = IconsVsc[name as keyof typeof IconsVsc];

        if (!IconComponent) { // Return a default one
            return (
                <></>
            )
        }
        return <IconComponent size={size} color={color} />;
    };
    return (
        <>
            <div className="container mx-auto max-w-60 md:max-w-[1200px] pb-8">
                <div className="flex flex-col justify-center items-center">
                    {children}
                    <div className="flex flex-wrap justify-center gap-4 py-4">
                        {Array.isArray(array)
                            ? array.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <DynamicBiIcon name={item} size={size} color={color} />
                                        <DynamicSiIcon name={item} size={size} color={color} />
                                        <DynamicVscIcon name={item} size={size} color={color} />
                                    </div>
                                );
                            })
                            : null}
                    </div>
                </div>
            </div>
        </>
    )
}
