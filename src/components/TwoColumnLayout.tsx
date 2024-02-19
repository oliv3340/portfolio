import React from "react";

export default function TwoColumnLayout({ children }: any) {
    return (
        <>
            <div className="min-w-screen bg-white py-20 font-body" id="about">
                <div className="container mx-auto md:w-1200">
                    <div className="flex flex-col justify-center items-center">
                        <div className="max-w-1200">
                            <div className="flex flex-col md:flex-row h-full justify-center items-center z-40 gap-12">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
