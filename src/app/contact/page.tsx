"use client";

import Contact from "~/components/contact";
import Content from "~/components/content";
import Link from "next/link";
import MainLayout from "~/components/layouts/main";
import Navbar from "~/components/navbar";
import PageHeading from "~/components/layouts/pageLayout";
import PageLayout from "~/components/layouts/pageLayout";
import ScreenshotLearnfast from "~/assets/screenshots/screenshot-learnfast.png";
import ScreenshotAmplifierAI from "~/assets/screenshots/screenshot-amplifierai.png";
import ScreenshotVrShooter from "~/assets/screenshots/screenshooter-vr.png";
import ScreenshotJava from "~/assets/screenshots/screenshot-java.png";
import ScreenshotTradewise from "~/assets/screenshots/screenshot-tradewisee.png";
import ScreenshotYoureyes from "~/assets/screenshots/screenshot-youreyes.png";
export default function ContactPage() {
  return (
    <MainLayout>
      <div className="relative overflow-hidden">
        <Navbar />
        <PageLayout
          heading="SEND MESSAGE"
            image1URL={ScreenshotAmplifierAI}
            image1Alt="Amplifier-AI-Screenshot"
            image2URL={ScreenshotTradewise}
            image2Alt="Tradewise-Screenshot"
            image3URL={ScreenshotYoureyes}
            image3Alt="YourEyes-Screenshot"
        />
      </div>
      <Contact />
    </MainLayout>
  );
}
