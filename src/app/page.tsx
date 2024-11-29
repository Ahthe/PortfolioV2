"use client";

import About from "~/components/about";
import AccordianList from "~/components/accordian";
import Content from "~/components/content";
import Experience from "~/components/experience";
import Projects from "~/components/projects";
import Hero from "~/components/hero";
import Link from "next/link";
import MainLayout from "~/components/layouts/main";
import Navbar from "~/components/navbar";
import ScreenshotBlockrecipes from "~/assets/screenshots/screenshot-blockrecipes.png";
import ScreenshotDexioprotocol from "~/assets/screenshots/screenshot-dexioprotocol.png";
import ScreenshotWilakMedia from "~/assets/screenshots/wilak-media.png";
import ScrollingBanner from "~/components/scrollingBanner";
import ScreenshotLearnfast from "~/assets/screenshots/screenshot-learnfast.png";
import ScreenshotAmplifierAI from "~/assets/screenshots/screenshot-amplifierai.png";
import ScreenshotVrShooter from "~/assets/screenshots/screenshooter-vr.png";
import ScreenshotJava from "~/assets/screenshots/screenshot-java.png";
import ScreenshotJavaScript from "~/assets/screenshots/screenshot-javascript.png"
import ScreenshotAlhamdulillah from "~/assets/screenshots/screenshot-alhamdulillah.png"
import Selfy from "~/assets/me.png";
import {Services} from "~/config/services";
import Stats from "~/components/stats";

export default function Home() {
  return (
    <MainLayout>
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <Stats />
      <Content cta ctaText="Learn More" ctaLink="/about">
        <p>
          G&apos;day, I&apos;m Ahthesham Ali, a passionate full-stack web developer
          and designer based out of Brisbane, Australia. I&apos;m currently the
          Web Development Manager at{" "}
          <Link className="underline" href="https://www.wilakmedia.com">
            Wilak Media
          </Link>{" "}
          where I&apos;m responsible for the design, development and performance
          of 40+ clients.
        </p>
      </Content>
      <ScrollingBanner baseVelocity={-200}>Experience</ScrollingBanner>
      
      {/* American Muslim Center, Dearborn */}
      <Experience
        imageDirection="right"
        imageSrc={ScreenshotLearnfast}
        title="American Muslim Center, Dearborn"
        role="Full Stack Web Developer"
        startDate="March 2024"
        endDate="Present"
        stack={[
          {
            name: "NEXTJS",
            link: "https://nextjs.org/",
          },
          {
            name: "TypeScript",
            link: "https://www.TypeScriptlang.org/",
          },
          {
            name: "React",
            link: "https://react.dev/",
          },
          {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/",
          },
          {
            name: "Clerk",
            link: "https://www.figma.com/",
          },
          {
            name: "MongoDB",
            link: "https://www.mongodb.com/",
          },
          {
            name: "StripeAPI",
            link: "https://helpx.adobe.com/au/support/xd.html",
          },
        ]}
      >
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ marginRight: '0.5rem', color: '#4A90E2' }}>•</span>
          <span>
            Expanded community reach from 800+ to potentially <span className="font-semibold">1000+</span> members by developing an event booking website using NextJS, MongoDB, Clerk, and StripeAPI, streamlining registration and addressing social health concerns.
          </span>
        </li>
        
        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ marginRight: '0.5rem', color: '#4A90E2' }}>•</span>
          <span>
            Created an interactive Quiz app with NextJS, Sanity.io, and MongoDB for summer school children, implementing engaging features such as leaderboards, increasing student engagement through gamified education.
          </span>
        </li>
      </ul>
      </Experience>

      {/* HeadStarter AI, NY */}
      <Experience
        imageDirection="left"
        imageSrc={ScreenshotAmplifierAI}
        title="HeadStarter AI, NY"
        role="Software Engineering Fellowship"
        startDate="July 2024"
        endDate="Oct 2024"
        stack={[
          {
            name: "NEXTJS",
            link: "https://nextjs.org/",
          },
          {
            name: "TypeScript",
            link: "https://www.TypeScriptlang.org/",
          },
          {
            name: "React",
            link: "https://react.dev/",
          },
          {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/",
          },
          {
            name: "Clerk",
            link: "https://www.figma.com/",
          },
          {
            name: "MongoDB",
            link: "https://www.mongodb.com/",
          },
          {
            name: "StripeAPI",
            link: "https://helpx.adobe.com/au/support/xd.html",
          },
        ]}
      >
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ marginRight: '0.5rem', color: '#4A90E2' }}>•</span>
          <span>
            Built 5+ AI apps and APIs using NextJS, OpenAI, Pinecone, StripeAPI with as seen by <span className="font-semibold">8000+</span> users.
          </span>
        </li>
        
        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ marginRight: '0.5rem', color: '#4A90E2' }}>•</span>
          <span>
          Develop projects from design to deployment leading 4+ engineering fellows using MVC design patterns.
          </span>
        </li>

        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ marginRight: '0.5rem', color: '#4A90E2' }}>•</span>
          <span>
          Coached by <span className="font-semibold">Amazon, Bloomberg and Capital One engineers</span> on Agile, CI/CD, Git, and microservice patterns.
          </span>
        </li>
      </ul>
      </Experience>

      {/* Computer Science and Mathematics Tutor */}
      <Experience
        imageDirection="right"
        imageSrc={ScreenshotJava}
        title="University of Mount Union, Alliance,OH"
        role="Computer Science and Mathematics Tutor"
        startDate="Jan 2022"
        endDate="Dec 2023"
        stack={[
          {
            name: "NEXTJS",
            link: "https://nextjs.org/",
          },
          {
            name: "TypeScript",
            link: "https://www.TypeScriptlang.org/",
          },
          {
            name: "React",
            link: "https://react.dev/",
          },
          {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/",
          },
          {
            name: "Clerk",
            link: "https://www.figma.com/",
          },
          {
            name: "MongoDB",
            link: "https://www.mongodb.com/",
          },
          {
            name: "StripeAPI",
            link: "https://helpx.adobe.com/au/support/xd.html",
          },
        ]}
      >
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ marginRight: '0.5rem', color: '#4A90E2' }}>•</span>
          <span>
            Improved grades of 90% of tutored students from failing grades of 55% to <span className="font-semibold">high achievers 85-90% </span>within a semester by tutoring in Systems Programming, Data Structures, Algorithms, and Mathematics.
          </span>
        </li>
        
        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ marginRight: '0.5rem', color: '#4A90E2' }}>•</span>
          <span>
          Analyzed and debugged code in Java, C#, Swift and SQL using IDE tools and debugging techniques, while teaching key mathematical concepts such as calculus, linear algebra, and statistics <span className="font-semibold">resulting in a 35% grade increase.</span>
          </span>
        </li>
      </ul>
      </Experience>

      {/* ACBSP VR */}
      <Experience
        imageDirection="left"
        imageSrc={ScreenshotVrShooter}
        title="ACBSP in VR Technologies - Startup, Alliance, OH"
        role="Software Engineer"
        startDate="Sep 2022"
        endDate="Apr 2023"
        stack={[
          {
            name: "C#",
            link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
          }, 
          {
            name: "Unity",
            link: "https://unity.com/",
          },
          {
            name: "Oculus SDK",
            link: "https://developer.oculus.com/",
          },
          {
            name: "Oculus VR",
            link: "https://www.oculus.com/",
          },
        ]}
      >
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ marginRight: '0.5rem', color: '#4A90E2' }}>•</span>
          <span>
            Tasked with creating a VR action game in Unity to study psychological behavior, <span className="font-semibold">improving research studies</span>.
          </span>
        </li>

        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
          <span style={{ marginRight: '0.5rem', color: '#4A90E2' }}>•</span>
          <span>
          Constructed a VR action game in Unity using C# and Oculus SDK, targeting the prefrontal cortex to reduce <span className="font-semibold">user stress and anxiety by 30% </span>, through strategic object dismemberment scenarios.
          </span>
        </li>
      </ul>
      </Experience>


      <ScrollingBanner baseVelocity={-200}>Projects</ScrollingBanner>
      
      <Projects
        imageDirection="right"
        imageSrc={ScreenshotDexioprotocol}
        title="Dexioprotocol"
        role="Junior Frontend Developer"
        stack={[
          {
            name: "TypeScriptttttpyr",
            link: "https://www.TypeScriptlang.org/",
          },
          {
            name: "React",
            link: "https://react.dev/",
          },
          {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/",
          },
          {
            name: "Figma",
            link: "https://www.figma.com/",
          },
          {
            name: "AdobeXD",
            link: "https://helpx.adobe.com/au/support/xd.html",
          },
        ]}
      >
        Dexioprotocol is a Web3 gaming startup. My main roles include{" "}
        <span className="font-semibold underline">Designing</span>, and creating{" "}
        <span className="font-semibold underline">user stories</span> for the
        developers to implement. My main responsibilities include: creating a
        good user experience for the Dexioprotocol web application, listening to
        user feedback and turning them into developer-friendly user stories.
      </Projects>
      
      
      <ScrollingBanner baseVelocity={-200}>Skills</ScrollingBanner>

      <Content className="my-0 lg:my-0">
        <p>
          I&apos;m naturally a <span className="underline">curious person</span>{" "}
          and love learning new technologies and skills. I&apos;ve listed all of
          the frameworks and skills I&apos;m proficient in below. Feel free to{" "}
          <span className="underline">ask</span> me about any of them :).
        </p>
      </Content>
      <AccordianList items={Services} />

      <Content cta ctaText="Let's Chat" ctaLink="/contact">
        I&apos;m a passionate full-stack web developer and designer based out of
        Brisbane, Australia. I&apos;m currently the Web Development Manager at
        Wilak Media where I&apos;m responsible for the design, development and
        performance of 40+ clients. I&apos;m an enthusiastic, naturally curious
        guy who loves learning new technologies and skills. Outside of work I
        like to play a bit of cricket and hit the gym.
      </Content>
    </MainLayout>
  );
}


{/* <Experience
imageDirection="right"
imageSrc={ScreenshotWilakMedia}
title="Wilak Media"
role="Web Development Manager"
startDate="Jan 2022"
endDate="Dec 2023"
stack={[
  {
    name: "TypeScript",
    link: "https://www.TypeScriptlang.org/",
  },
  {
    name: "NextJS",
    link: "https://nextjs.org/",
  },
  {
    name: "React",
    link: "https://react.dev/",
  },
  {
    name: "TailwindCSS",
    link: "https://tailwindcss.com/",
  },
  {
    name: "PlanetScale",
    link: "https://planetscale.com/",
  },
  {
    name: "Drizzle ORM",
    link: "https://orm.drizzle.team/",
  },
  {
    name: "Figma",
    link: "https://www.figma.com/",
  },
  {
    name: "Google Analytics",
    link: "https://analytics.google.com/",
  },
]}
>
Wilak Media is a Marketing Consultancy which specializes in scaling
brands profitably. My main roles include{" "}
<span className="font-semibold underline">Designing</span>,{" "}
<span className="font-semibold underline">Developing</span> and{" "}
<span className="font-semibold underline">Deploying</span>, ecommerce
stores, landing pages and web applications. My main responsibilities
include: optimizing conversion rates, user experience and SEO, whilst
simultaneously creating a good developer experience for my team and
future teams.
</Experience>
<Experience
imageDirection="left"
imageSrc={ScreenshotBlockrecipes}
title="Blockrecipes"
role="Full-Stack Web Developer"
startDate="Jan 2022"
endDate="Dec 2023"
stack={[
  {
    name: "TypeScript",
    link: "https://www.TypeScriptlang.org/",
  },
  {
    name: "NextJS",
    link: "https://nextjs.org/",
  },
  {
    name: "React",
    link: "https://react.dev/",
  },
  {
    name: "TailwindCSS",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Supabase",
    link: "https://supabase.com/",
  },
  {
    name: "Drizzle ORM",
    link: "https://orm.drizzle.team/",
  },
  {
    name: "Figma",
    link: "https://www.figma.com/",
  },
  {
    name: "Google Analytics",
    link: "https://analytics.google.com/",
  },
]}
>
Blockrecipes is a startup SaaS with is developing a{" "}
<strong className="font-semibold underline">Real-Time</strong>{" "}
blockchain API. My main roles include{" "}
<span className="font-semibold underline">Designing</span> and{" "}
<span className="font-semibold underline">Developing</span> the
Blockrecipes web application. My main responsibilities include:
implementing real-time data and features into the UI whilst
simultaneously maintaining a good customer experience.
</Experience> */}