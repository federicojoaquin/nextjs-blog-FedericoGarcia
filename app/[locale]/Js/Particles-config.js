const particlesConfig = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        area: 1202.559045649142  // v3: value_area → area
      }
    },
    color: {
      value: "#000000"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      animation: {           // v3: anim → animation
        enable: false,
        speed: 1,
        minimumValue: 0.1,   // v3: opacity_min → minimumValue
        sync: false
      }
    },
    size: {
      value: 7,
      random: true,
      animation: {           // v3: anim → animation
        enable: false,
        speed: 40,
        minimumValue: 0.1,   // v3: size_min → minimumValue
        sync: false
      }
    },
    links: {                 // v3: line_linked → links
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: "top",
      random: false,
      straight: false,
      outModes: { default: "out" },  // v3: out_mode → outModes
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectsOn: "canvas",     // v3: detect_on → detectsOn
    events: {
      onHover: {             // v3: onhover → onHover
        enable: false,
        mode: "repulse"
      },
      onClick: {             // v3: onclick → onClick
        enable: false,
        mode: "push"
      },
      resize: { enable: true }  // v3: resize boolean → object
    },
    modes: {
      grab: {
        distance: 400,
        links: {             // v3: line_linked → links
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
        quantity: 4          // v3: particles_nb → quantity
      },
      remove: {
        quantity: 2          // v3: particles_nb → quantity
      }
    }
  },
  detectRetina: true         // v3: retina_detect → detectRetina
}

export default particlesConfig;