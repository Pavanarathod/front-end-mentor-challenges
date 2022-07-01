/* eslint-disable @next/next/no-img-element */
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Cat = () => {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: 'url("/images/moon.png")',
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} factor={2}>
          <div className="h-full w-full bg-black"></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: 'url("/images/land.png")',
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer sticky={{ end: 3 }}>
          <div className="flex items-center justify-center">
            <img src="/images/cat.gif" alt="" />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Cat;
