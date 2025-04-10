window.addEventListener('DOMContentLoaded', function () {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.9,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.3,
                    sync: false
                }
            },
            size: {
                value: 1.2,
                random: true
            },
            move: {
                enable: true,
                speed: 0.1,      // siêu chậm
                direction: "none",
                straight: false,
                bounce: false
            },
            line_linked: {
                enable: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false
                },
                onclick: {
                    enable: false
                },
                resize: true
            }
        },
        retina_detect: true
    });
});
