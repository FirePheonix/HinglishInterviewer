import React from 'react'
import {cn} from "@/lib/utils";
import Image from "next/image";
import { mappings } from "@/constants";

const DisplayTechIcons = ({ techStack }: TechIconProps) => {
    const techIconBaseURL = "https://raw.githubusercontent.com/devicons/devicon/master/icons";
    
    const normalizeTechName = (tech: string) => {
        const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
        return mappings[key as keyof typeof mappings];
    };
    
    const getTechIcons = (techArray: string[]) => {
        return techArray.map((tech) => {
            const normalized = normalizeTechName(tech);
            return {
                tech,
                url: `${techIconBaseURL}/${normalized}/${normalized}-original.svg`,
            };
        });
    };

    const techIcons = getTechIcons(techStack);

    return (
        <div className="flex flex-row">{techIcons.slice(0, 3).map(({ tech, url }, index) => (
            <div key={tech} className={cn("relative group bg-gray-900 rounded-full p-2 flex-center border border-gray-700", index >= 1 && '-ml-3')}>
                <span className="absolute bottom-full mb-1 hidden group-hover:flex px-2 py-1 text-xs text-white bg-gray-800 rounded-md shadow-md">
                    {tech}
                </span>
                <Image 
                    src={url} 
                    alt={tech} 
                    width={100} 
                    height={100} 
                    className="size-5"
                    onError={(e) => {
                        // Fallback to default tech icon if the specific icon fails to load
                        e.currentTarget.src = "/tech.svg";
                    }}
                />
            </div>
        ))}</div>
    )
}
export default DisplayTechIcons
