import Layout from "../components/Layout";
import profilePic from "../assets/profile.png";
import myPic from "../assets/mypic2.png";
import AnimatedText from "../components/AnimatedText";

const HomePage: React.FC = () => {
  return (
    <div>
      <main className="flex flex-col items-center text-dark w-full min-h-screen md:min-h-[85vh]">
        <Layout className="pt-0 ">
          <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
            <div className="w-full md:w-1/3 ">
              <img
                src={myPic}
                className="w-[24-rem]  h-[20rem] md:h-auto md:w-full px-6 mx-auto"
              ></img>
            </div>
            <div className="w-full md:w-2/5  mx-auto ">
              <AnimatedText
                text="Hi! I'm Madushan"
                className="text-4xl md:text-8xl !text-center md:!text-left"
              />
              <AnimatedText
                text="I Turn Vison Into Reality With Code !"
                className="text-2xl md:text-5xl !text-center md:!text-left"
              />
              <p className="text-base md:text-lg pt-1 !text-center md:!text-left">
                I am a full stack developer with a passion for creating
                beautiful and functional web applications. I have a strong
                background in computer science and a passion for learning new
                technologies. I am currently looking for a full time position as
                a software engineer.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default HomePage;
