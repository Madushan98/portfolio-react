import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface Props {
  className?: string;
}

const AboutPage: React.FC<Props> = ({ className }) => {
  const containerClasses = classNames(
    "container",
    className,
    " w-full px-32 py-8 font-medium justify-center"
  );

  const headingClasses = classNames("text-3xl", "font-bold", "mb-4");
  const paragraphClasses = classNames("text-lg", "mb-2");

  return (
    <div className={containerClasses}>
      <h1 className={headingClasses}>About Me</h1>
      <p className={paragraphClasses}>
        Hi there! I am a software engineering undergraduate specializing in
        developing web applications using React, TypeScript, and Tailwind CSS. I
        am passionate about creating dynamic and responsive user interfaces that
        are both aesthetically pleasing and functional.
      </p>
      <p className={paragraphClasses}>
        Throughout my studies, I have gained extensive experience in front-end
        development and am constantly seeking new and innovative ways to enhance
        user experience. I have worked on a range of projects, from small-scale
        applications to large-scale enterprise solutions, and I am always eager
        to collaborate with others to solve complex problems and deliver
        high-quality products.
      </p>
      <p className={paragraphClasses}>
        When I'm not coding, you can find me reading about the latest technology
        trends or exploring new trails on my runs. I am always looking for new
        challenges and opportunities to grow my skills, so please feel free to
        contact me if you have any questions or if you would like to collaborate
        on a project.
      </p>

      <Link to="/contact" className="text-blue-500 hover:underline">
        Contact Me
      </Link>
    </div>
  );
};

export default AboutPage;
