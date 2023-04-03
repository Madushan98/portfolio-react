import Layout from "../components/Layout";
import profilePic from "../assets/profile.png";
import myPic from "../assets/mypic2.png";
import AnimatedText from "../components/AnimatedText";

const HomePage = () => {
  return (
    <div>
      <main className="flex items-center text-dark w-full min-h-[85vh]">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/3">
              <img src={myPic} className="w-full h-auto"></img>
            </div>
            <div className="w-3/5 pl-4">
              <AnimatedText
                text="Hi! I'm Madushan"
                className="text-7xl !text-left"
              />
              <AnimatedText
                text="I Turn Vison Into Reality With Code !"
                className="text-4xl !text-left"
              />
              <p className="text-[1.2rem] pt-1">
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
