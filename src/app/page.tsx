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
import ScrollingBanner from "~/components/scrollingBanner";
import ScreenshotLearnfast from "~/assets/screenshots/screenshot-learnfast.png";
import ScreenshotAmplifierAI from "~/assets/screenshots/screenshot-amplifierai.png";
import ScreenshotVrShooter from "~/assets/screenshots/screenshooter-vr.png";
import ScreenshotJava from "~/assets/screenshots/screenshot-java.png";
import ScreenshotJavaScript from "~/assets/screenshots/screenshot-javascript.png";
import ScreenshotTradewise from "~/assets/screenshots/screenshot-tradewisee.png";
// import ScreenshotTradewiseV2 from "~/assets/screenshots/screenshot-tradewisev2.png";
import ScreenshotYoureyes from "~/assets/screenshots/screenshot-youreyes.png";
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
        {/* <p>
          G&apos;day, I&apos;m Ahthesham Ali, a passionate full-stack web developer
          and designer based out of Brisbane, Australia. I&apos;m currently the
          Web Development Manager at{" "}
          <Link className="underline" href="https://www.wilakmedia.com">
            Wilak Media
          </Link>{" "}
          where I&apos;m responsible for the design, development and performance
          of 40+ clients.
        </p> */}
        <p>
        {/* I&apos;m a Software Engineer with experience developing applications that serve over 8,000 users worldwide. 
        Holding a degree in Computer Science from the University of Mount Union, complemented by a minor in Psychology, 
        I blend technical proficiency with psychological insight to craft intuitive, minimalist, and high-performance software. 
        My projects range from AI-powered Software platforms to accessibility tools, consistently delivering impactful solutions. */}
        I&apos;m a Software Engineer with experience serving <span className="text-yellow-400">8,000+ user&apos;s</span> worldwide. With a CS degree and Psychology minor from Mount Union, 
        I craft intuitive, minimalistic and high-performance software solutions ranging from AI platforms to accessibility tools.
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
        imageSrc={ScreenshotAmplifierAI} // Placeholder image
        title="Amplifier AI"
        projectLink="https://amplifire-ai.vercel.app/"
        // role=""
        stack={[
          {
            name: "Next.js",
            link: "https://nextjs.org/",
          },
          {
            name: "Python",
            link: "https://www.python.org/",
          },
          {
            name: "TypeScript",
            link: "https://www.typescriptlang.org/",
          },
          {
            name: "AWS S3",
            link: "https://aws.amazon.com/s3/",
          },
          {
            name: "ClerkAuth",
            link: "https://clerk.dev/",
          },
          {
            name: "Stripe",
            link: "https://stripe.com/",
          },
          {
            name: "OpenAI API",
            link: "https://openai.com/api/",
          },
          {
            name: "Prisma",
            link: "https://www.prisma.io/",
          },
          {
            name: "PostgreSQL",
            link: "https://www.postgresql.org/",
          },
        ]}
      >
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ marginRight: '0.5rem', color: '#4A90E2' }}>•</span>
            <span>
              Developed an AI-driven SaaS platform, featuring customizable AI Chatbots and an AI Lead Finder, addressing marketing challenges for 61% of startups, potentially reducing their 38% failure rate due to ineffective strategies.
            </span>
          </li>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ marginRight: '0.5rem', color: '#4A90E2' }}>•</span>
            <span>
              Reached 56,000+ potential customers for a pilot driving school via Amplifier AI chatbot and Subreddit outreach.
            </span>
          </li>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ marginRight: '0.5rem', color: '#4A90E2' }}>•</span>
            <span>
              Integrated payment processing with Stripe, implemented custom made auth pages using Clerk, optimized data storage with AWS S3, and facilitated real-time communication via Pusher API.
            </span>
          </li>
        </ul>
      </Projects>
      
      <Projects
        imageDirection="left"
        imageSrc={ScreenshotTradewise} // Placeholder image
        title="TradeWise"
        projectLink="https://github.com/Ahthe/TradeWise"
        // role="NextJS, TailwindCSS, TypeScript, Llama3.1 70B-Groq API, TradingView API"
        stack={[
          {
            name: "NextJS",
            link: "https://nextjs.org/",
          },
          {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/",
          },
          {
            name: "TypeScript",
            link: "https://www.typescriptlang.org/",
          },
          {
            name: "Llama3.1 70B-Groq API",
            link: "https://www.groq.com/",
          },
          {
            name: "TradingView API",
            link: "https://www.tradingview.com/rest-api-spec/",
          },
        ]}
        
      >
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ marginRight: '0.5rem', color: '#4A90E2' }}>•</span>
            <span>
              Accumulated 7,000+ users by engineering TradeWise, an AI-driven financial assistant using NextJS, TypeScript, and TailwindCSS, providing market insights, interactive charts, and real-time financial data.
            </span>
          </li>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ marginRight: '0.5rem', color: '#4A90E2' }}>•</span>
            <span>
              Integrated advanced features like TrendSpotter, StockX-Ray, and CandleForge with Llama3.1-70B-Groq API, TradingView API, and Shadcn UI, delivering lightning-fast, precise analysis across global markets.
            </span>
          </li>
        </ul>
      </Projects>
      
      <Projects
        imageDirection="right"
        imageSrc={ScreenshotYoureyes} // Placeholder image
        title="Your Eyes"
        projectLink="https://github.com/Ahthe/VisionaryPath"
        // role="NextJS, TypeScript, TailwindCSS, YOLOv7, GPT-4 Vision, ONNX"
        stack={[
          {
            name: "NextJS",
            link: "https://nextjs.org/",
          },
          {
            name: "TypeScript",
            link: "https://www.typescriptlang.org/",
          },
          {
            name: "TailwindCSS",
            link: "https://tailwindcss.com/",
          },
          {
            name: "YOLOv7",
            link: "https://github.com/WongKinYiu/yolov7",
          },
          {
            name: "GPT-4 Vision",
            link: "https://openai.com/research/gpt-4",
          },
          {
            name: "ONNX",
            link: "https://onnx.ai/",
          },
        ]}
      >
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ marginRight: '0.5rem', color: '#4A90E2' }}>•</span>
            <span>
              Achieved real-time object detection with 100ms latency by optimizing YOLOv7 models and GPT-4 Vision using Next.js and TypeScript, enhancing accessibility for visually impaired users and attracting 500+ users in 3 weeks.
            </span>
          </li>
          <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ marginRight: '0.5rem', color: '#4A90E2' }}>•</span>
            <span>
              Optimized performance and accuracy by deploying multiple ONNX models (256x256, 320x320, 640x640) and implemented a dual-voice TTS system with priority-based audio scheduling, reducing audio overlap by 70%.
            </span>
          </li>
        </ul>
      </Projects>
      
      
      <ScrollingBanner baseVelocity={-200}>Skills</ScrollingBanner>

      <Content className="my-0 lg:my-0">
        <p>
          I&apos;m naturally a <span className="underline">curious person</span>{" "}
          and love learning new technologies and skills. I&apos;ve listed all of
          the frameworks and skills I&apos;m proficient in below. Feel free to{" "}
          <span className="underline">ask</span> me about any of them :)
        </p>
      </Content>
      <AccordianList items={Services} />

      <Content cta ctaText="Let's Chat" ctaLink="/contact">

          I thrive on building innovative solutions and exploring new technologies. 
          My curiosity drives me to constantly learn and implement emerging development practices, 
          with a proven ability to quickly adapt to new environments and technologies. 
          Outside of coding, I enjoy playing games and staying active through swimming.

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