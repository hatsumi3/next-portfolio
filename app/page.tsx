import { FC } from "react";
import Link from "next/link";

const Index: FC = () => {
  return (
    <>
      <h1>hello.</h1>
      <Link href="/contact">move to Contact page</Link>
    </>
  );
};

export default Index;
