import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Animation = () => {
  const [init, setInit] = useState(false);


  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async () => {
    // console.log("Particles loaded");
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
                value: "#00838D",
            },
            links: {
                blink: false,
                color: "#ffffff",
                consent: false,
                distance: 30,
                enable: true,
                opacity: 0.4,
                width: 2,
            },
            move: {
                enable: true,
                outModes: "bounce",
                speed: 1,
            },
            number: {
                value: 200,
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

    }),
    [],
  );

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
};

export default Animation;