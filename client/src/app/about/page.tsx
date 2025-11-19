"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const About = () => {
  const pathname = useRouter();

  return (
    <div>
      <h1>About</h1>
      {/*<Image src='/next.svg' alt='next' width={200} height={50} />*/}
    </div>
  );
};

export default About;
