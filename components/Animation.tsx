import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const App = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
        key: "polygonMask",
        name: "Polygon Mask",
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "bubble",
                    parallax: {
                        enable: false,
                        force: 2,
                        smooth: 10,
                    },
                },
            },
            modes: {
                bubble: {
                    distance: 40,
                    duration: 2,
                    opacity: 8,
                    size: 6,
                },
                connect: {
                    distance: 80,
                    links: {
                        opacity: 0.5,
                    },
                    radius: 60,
                },
                grab: {
                    distance: 400,
                    links: {
                        opacity: 1,
                    },
                },
                push: {
                    quantity: 4,
                },
                remove: {
                    quantity: 2,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                slow: {
                    active: false,
                    radius: 0,
                    factor: 1,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                blink: false,
                color: "#ffffff",
                consent: false,
                distance: 30,
                enable: true,
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                outModes: "bounce",
                speed: 1,
            },
            number: {
                value: 300,
            },
            opacity: {
                animation: {
                    enable: true,
                    speed: 3,
                    sync: false,
                },
                value: {
                    min: 0.05,
                    max: 0.4,
                },
            },
            shape: {
                type: "circle",
            },
            size: {
                value: 1,
            },
        },
        polygon: {
            draw: {
                enable: true,
                stroke: {
                    color: "#000",
                    width: 1,
                    opacity: 0.2,
                },
            },
            enable: true,
            move: {
                radius: 10,
            },
            position: {
                x: 50,
                y: 50,
            },
            inline: {
                arrangement: "equidistant",
            },
            scale: 0.5,
            type: "inline",
            url: "/smalldeer.svg",
        },
        background: {
            color: "transparent",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
        },
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};
export default App;