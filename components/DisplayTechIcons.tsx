import React from 'react'
import {cn} from "@/lib/utils";
import { 
    Code, 
    Database, 
    Globe, 
    Layers, 
    Server, 
    Smartphone, 
    Cpu, 
    Cloud, 
    GitBranch, 
    Palette,
    Monitor,
    Zap,
    FileCode,
    Settings,
    Box,
    Terminal,
    Wrench,
    Package
} from 'lucide-react';

interface TechIconProps {
    techStack: string[];
}

const DisplayTechIcons = ({ techStack }: TechIconProps) => {
    const getTechIcon = (tech: string) => {
        const techLower = tech.toLowerCase();
        
        // Frontend Frameworks & Libraries
        if (techLower.includes('react')) return <Code className="w-4 h-4 text-blue-400" />;
        if (techLower.includes('vue')) return <Layers className="w-4 h-4 text-green-400" />;
        if (techLower.includes('angular')) return <Globe className="w-4 h-4 text-red-400" />;
        if (techLower.includes('next')) return <Zap className="w-4 h-4 text-white" />;
        if (techLower.includes('svelte')) return <FileCode className="w-4 h-4 text-orange-400" />;
        
        // Backend & Server
        if (techLower.includes('node')) return <Server className="w-4 h-4 text-green-500" />;
        if (techLower.includes('express')) return <Server className="w-4 h-4 text-gray-400" />;
        if (techLower.includes('django')) return <Server className="w-4 h-4 text-green-600" />;
        if (techLower.includes('flask')) return <Server className="w-4 h-4 text-blue-500" />;
        if (techLower.includes('spring')) return <Server className="w-4 h-4 text-green-400" />;
        if (techLower.includes('laravel')) return <Server className="w-4 h-4 text-red-500" />;
        
        // Databases
        if (techLower.includes('mongo') || techLower.includes('nosql')) return <Database className="w-4 h-4 text-green-500" />;
        if (techLower.includes('mysql')) return <Database className="w-4 h-4 text-blue-500" />;
        if (techLower.includes('postgres')) return <Database className="w-4 h-4 text-blue-600" />;
        if (techLower.includes('redis')) return <Database className="w-4 h-4 text-red-500" />;
        if (techLower.includes('sqlite')) return <Database className="w-4 h-4 text-gray-500" />;
        
        // Programming Languages
        if (techLower.includes('javascript') || techLower.includes('js')) return <FileCode className="w-4 h-4 text-yellow-400" />;
        if (techLower.includes('typescript') || techLower.includes('ts')) return <FileCode className="w-4 h-4 text-blue-500" />;
        if (techLower.includes('python')) return <FileCode className="w-4 h-4 text-yellow-500" />;
        if (techLower.includes('java')) return <FileCode className="w-4 h-4 text-orange-500" />;
        if (techLower.includes('c#') || techLower.includes('csharp')) return <FileCode className="w-4 h-4 text-purple-500" />;
        if (techLower.includes('php')) return <FileCode className="w-4 h-4 text-indigo-500" />;
        if (techLower.includes('go') || techLower.includes('golang')) return <FileCode className="w-4 h-4 text-cyan-500" />;
        if (techLower.includes('rust')) return <FileCode className="w-4 h-4 text-orange-600" />;
        
        // Mobile Development
        if (techLower.includes('react native') || techLower.includes('flutter') || techLower.includes('mobile')) return <Smartphone className="w-4 h-4 text-blue-400" />;
        if (techLower.includes('ios') || techLower.includes('swift')) return <Smartphone className="w-4 h-4 text-gray-400" />;
        if (techLower.includes('android') || techLower.includes('kotlin')) return <Smartphone className="w-4 h-4 text-green-500" />;
        
        // Cloud & DevOps
        if (techLower.includes('aws')) return <Cloud className="w-4 h-4 text-orange-400" />;
        if (techLower.includes('azure')) return <Cloud className="w-4 h-4 text-blue-500" />;
        if (techLower.includes('gcp') || techLower.includes('google cloud')) return <Cloud className="w-4 h-4 text-red-400" />;
        if (techLower.includes('docker')) return <Box className="w-4 h-4 text-blue-400" />;
        if (techLower.includes('kubernetes')) return <Settings className="w-4 h-4 text-blue-500" />;
        if (techLower.includes('terraform')) return <Settings className="w-4 h-4 text-purple-500" />;
        
        // Tools & Others
        if (techLower.includes('git')) return <GitBranch className="w-4 h-4 text-orange-500" />;
        if (techLower.includes('webpack') || techLower.includes('build')) return <Package className="w-4 h-4 text-blue-400" />;
        if (techLower.includes('npm') || techLower.includes('yarn')) return <Package className="w-4 h-4 text-red-400" />;
        if (techLower.includes('css') || techLower.includes('sass') || techLower.includes('tailwind')) return <Palette className="w-4 h-4 text-blue-400" />;
        if (techLower.includes('html')) return <Globe className="w-4 h-4 text-orange-500" />;
        if (techLower.includes('graphql')) return <Layers className="w-4 h-4 text-pink-400" />;
        if (techLower.includes('rest') || techLower.includes('api')) return <Server className="w-4 h-4 text-green-400" />;
        
        // Default fallback
        return <Cpu className="w-4 h-4 text-gray-400" />;
    };

    return (
        <div className="flex flex-row">
            {techStack.slice(0, 3).map((tech, index) => (
                <div key={tech} className={cn("relative group bg-gray-900 rounded-full p-2 flex items-center justify-center border border-gray-700", index >= 1 && '-ml-3')}>
                    <span className="absolute bottom-full mb-1 hidden group-hover:flex px-2 py-1 text-xs text-white bg-gray-800 rounded-md shadow-md whitespace-nowrap z-10">
                        {tech}
                    </span>
                    {getTechIcon(tech)}
                </div>
            ))}
            {techStack.length > 3 && (
                <div className={cn("relative group bg-gray-900 rounded-full p-2 flex items-center justify-center border border-gray-700 -ml-3")}>
                    <span className="absolute bottom-full mb-1 hidden group-hover:flex px-2 py-1 text-xs text-white bg-gray-800 rounded-md shadow-md whitespace-nowrap z-10">
                        +{techStack.length - 3} more
                    </span>
                    <span className="text-xs text-gray-400 font-medium">+{techStack.length - 3}</span>
                </div>
            )}
        </div>
    )
}

export default DisplayTechIcons
