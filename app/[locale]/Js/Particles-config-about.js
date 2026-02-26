const particlesConfigAbout = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#6C63FF"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.6,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.2,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 1.5,
        sync: false
      }
    },
    links: {
      enable: true,
      distance: 120,
      color: "#6C63FF",
      opacity: 0.5,
      width: 1.5
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },
      bounce: false
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: { enable: true }
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 0.6
        }
      },
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: true
}

export default particlesConfigAbout;
