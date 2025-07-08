'use client';

import Image from "next/image";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

interface SavedMessage {
    role: 'user' | 'system' | 'assistant';
    content: string;
}




    return (
        <div className="bg-black min-h-screen text-white">
        <div className="flex sm:flex-row flex-col gap-10 items-center justify-between w-full max-w-6xl mx-auto px-4">
            <div className="flex-center flex-col gap-2 p-7 h-[400px] bg-black border border-gray-800 rounded-lg flex-1 sm:basis-1/2 w-full">
                <div className="z-10 flex items-center justify-center bg-gray-900 rounded-full size-[120px] relative border border-gray-700">
                    <Image src="/logo.svg" alt="AI Interviewer" width={65} height={54} className="object-cover" />
                    {isSpeaking && <span className="absolute inline-flex size-5/6 animate-ping rounded-full bg-white opacity-75" />}
                </div>
                <h3 className="text-center text-white mt-5 text-xl font-semibold">AI Interviewer</h3>
            </div>

            <div className="flex-1 sm:basis-1/2 w-full h-[400px] bg-black border border-gray-800 rounded-lg p-7">
                <div className="flex flex-col gap-2 justify-center items-center h-full">
                    <div className="z-10 flex items-center justify-center bg-gray-900 rounded-full size-[120px] relative border border-gray-700">
                        <User className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-center text-white mt-5 text-xl font-semibold">{userName}</h3>
                </div>
            </div>
        </div>
            {messages.length > 0 && (
                <div className="w-full bg-black border border-gray-800 rounded-2xl p-0.5 mt-8 max-w-4xl mx-auto">
                    <div className="bg-black rounded-2xl min-h-12 px-5 py-3 flex items-center justify-center">
                        <p key={latestMessage} className={cn('transition-opacity duration-500 opacity-0 text-lg text-center text-white', 'animate-fadeIn opacity-100')}>
                            {latestMessage}
                        </p>
                    </div>
                </div>
            )}

            <div className="w-full flex justify-center mt-8">
                {callStatus !== 'ACTIVE' ? (
                    <button className="relative inline-block px-7 py-3 font-bold text-sm leading-5 text-black transition-colors duration-150 bg-white border border-transparent rounded-full shadow-sm focus:outline-none focus:shadow-2xl active:bg-gray-200 hover:bg-gray-200 min-w-28 cursor-pointer items-center justify-center overflow-visible" onClick={handleCall}>
                        <span className={cn('absolute animate-ping rounded-full bg-white h-[85%] w-[65%] opacity-75', callStatus !=='CONNECTING' && 'hidden')}
                             />

                            <span>
                                {isCallInactiveOrFinished ? 'Call' : '. . .'}
                            </span>
                    </button>
                ) : (
                    <button className="inline-block px-7 py-3 text-sm font-bold leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-full shadow-sm focus:outline-none focus:shadow-2xl active:bg-red-700 hover:bg-red-700 min-w-28" onClick={handleDisconnect}>
                        End
                    </button>
                )}
            </div>
        </div>
    )
}
export default Agent
