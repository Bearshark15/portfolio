"use client"

import { Button } from './ui/button'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Jacob Bekele Jansson
                        </h1>
                        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl mt-3">
                            Software Developer, Game Programmer <br /> Based in Stockholm, Sweden
                        </h2>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button variant={"secondary"}>
                                <Link href="#portfolio">View Portfolio</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
