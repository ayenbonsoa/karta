"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/ui/sections/Navbar";
import Hero from "@/components/ui/sections/Hero";

export default function Home() {
  return (
    <div className="font-mono">
      <Navbar />
      <Hero />
    </div>
  );
}
