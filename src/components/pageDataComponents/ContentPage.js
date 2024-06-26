import React, { useContext } from "react";
import AppContext from "../../AppContext";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CopyCodeBtn from "../CopyCodeBtn";

const ContentPage = ({ pageTitle, pageContent, pageDetails }) => {
  const myContext = useContext(AppContext);
  const placeholderMarkdown = `${pageContent}`;

  const Pre = ({ children }) => (
    <pre className="blog-pre">
      <CopyCodeBtn>{children}</CopyCodeBtn>
      {children}
    </pre>
  );

  function handleLeftNavbarVisibility() {
    myContext.setIsHoveredOnContentdata(false);
    myContext.setIsClickedOnMenuBar(false);
    myContext.setisSideBarVisible(false);
  }

  return (
    <div
      className={
        "fixed top-[75px] h-[100%] lg:w-[79.5%] md:w-[78%] px-4 md:block lg:block lg:left-[250px] md:left-[190px] py-1 z-1 w-[100%]" +
        (myContext.isSideBar ? " left-0 w-[100%] block z-1 " : " ")
      }
      onMouseOver={() => myContext.setIsHoveredOnContentdata(true)}
      onMouseLeave={handleLeftNavbarVisibility}
    >
      <div
        className={
          "absolute w-[100%] h-[90%] left-1 overflow-y-scroll mx-2 lg:pl-5 md:pl-5 pb-5 px-2 " +
          (myContext.isSideBar
            ? "absolute z-1 "
            : " lg:w-[100%] md:w-[100%] w-[100%]")
        }
      >
        <div className="pt-3 z-1 pb-5 w-[98%]">
          <ReactMarkdown
            className="post-markdown"
            components={{
              pre: Pre,
              code({
                node,
                inline,
                className = "blog-code",
                children,
                ...props
              }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={a11yDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {placeholderMarkdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
