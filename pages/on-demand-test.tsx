import { useState, useEffect, Fragment } from "react";
//import * as runtime from 'react/jsx-runtime' // Production.
import * as runtime from "react/jsx-dev-runtime"; // Development.
import { compile, run } from "@mdx-js/mdx";
import Component1 from "../components/SimpleComponent";
import type { MDXModule } from "mdx/types";

const stringMDX = `
<Component1 />
`;

export default function Page({ code }: any) {
  const [mdxModule, setMdxModule] = useState<MDXModule>();
  const Content = mdxModule ? mdxModule?.default : Fragment;
  useEffect(() => {
    (async () => {
      setMdxModule(await run(code, runtime));
    })();
  }, [code]);


  return (
    <>
      {code && <Content components={{ Component1 }} />}
    </>
  );
}
export async function getStaticProps() {
  const code = String(
    await compile(stringMDX, {
      outputFormat: "function-body",
      development: process.env.NODE_ENV === "production" ? false : true,
    })
  );
  return { props: { code } };
}