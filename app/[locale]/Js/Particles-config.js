const particlesConfig = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        area: 1200
      }
    },
    color: {
      value: "#6C63FF"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#6C63FF"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.4,
      random: false,
      animation: {
        enable: false,
        speed: 1,
        minimumValue: 0.1,
        sync: false
      }
    },
    size: {
      value: 6,
      random: true,
      animation: {
        enable: false,
        speed: 40,
        minimumValue: 0.1,
        sync: false
      }
    },
    links: {
      enable: true,
      distance: 200,
      color: "#6C63FF",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "top",
      random: true,
      straight: false,
      outModes: { default: "out" },
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: false,
        mode: "repulse"
      },
      onClick: {
        enable: false,
        mode: "push"
      },
      resize: { enable: true }
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 20,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 2
      }
    }
  },
  detectRetina: true
}

export default particlesConfig;