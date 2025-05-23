window.addEventListener('DOMContentLoaded', function () {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 120,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#fdf1c8"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.8,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.3,
                    sync: false
                }
            },
            size: {
                value: 1.8,
                random: true
            },
            line_linked: {
                enable: false
            },
            move: {
                enable: true,
                speed: 0.3,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
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
