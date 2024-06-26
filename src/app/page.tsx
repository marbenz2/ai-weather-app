"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Text } from "@tremor/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen px-2 md:px-10 flex flex-col justify-center items-center bg-tremor-background-strong">
      <div className="w-full max-w-2xl mx-auto">
        <Card
          decoration="top"
          decorationColor="amber"
          className="flex flex-col gap-8 px-2 py-4"
        >
          <Text className="!text-4xl md:!text-6xl font-thin text-center">
            KI Wetter App
          </Text>
          <Card className="px-2 py-4">
            <CityPicker />
          </Card>
        </Card>
        <div className="mt-[1rem] flex justify-end">
          <Link
            href="https://github.com/marbenz2/"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer text-tremor-content hover:text-tremor-content-accent"
          >
            MarBenz
          </Link>
        </div>
      </div>
    </div>
  );
}
