import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import heroPic from "@/public/images/index-hero.jpg";
import profilePic from "@/public/images/profile.jpg";

const Index: FC = () => {
  return (
    <>
      <div>
        <Image src={heroPic} alt="hero" />
        <div>
          <h1>I'm hatsumi.</h1>
          <h3>Javascript Developer.</h3>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2>Javascript Nerd</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div>
            <Image src={profilePic} alt="hero" />
          </div>
        </div>
        <div>
          <h2>Skills</h2>
          <div>
            <div>
              <img src="/images/javascript.svg" alt="javascript" />
              <span>Javascript 10 yeaes</span>
            </div>
            <div>
              <img src="/images/react.svg" alt="react" />
              <span>React 5 yeaes</span>
            </div>
            <div>
              <img src="/images/gatsby.svg" alt="gatsby" />
              <span>Gatsuby 3 yeaes</span>
            </div>
            <div>
              <img src="/images/next.svg" alt="next" />
              <span>Next.js 3 yeaes</span>
            </div>
          </div>
        </div>
        <div>
          <Link href="/contact">Make It Happen!</Link>
        </div>
      </div>
    </>
  );
};

export default Index;
