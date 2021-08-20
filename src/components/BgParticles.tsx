import React from 'react';
import Particles from "react-tsparticles";

export const BgParticles = () => {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <Particles
                id="particles"
                options={{
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                    },
                    background: {
                        color: {
                            value: "#FEF6EF",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#39d353",
                            animation: {
                                h: {
                                    count: 0,
                                    enable: true,
                                    offset: 0,
                                    speed: 50,
                                    sync: false,
                                },
                                s: {
                                    count: 0,
                                    enable: false,
                                    offset: 0,
                                    speed: 1,
                                    sync: false,
                                },
                                l: {
                                    count: 0,
                                    enable: false,
                                    offset: 0,
                                    speed: 1,
                                    sync: false,
                                },
                            },
                        },
                        links: {
                            color: "#b59174",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 20,
                        },
                        opacity: {
                            value: 0.9,
                        },
                        shape: {
                            type: "image",
                            options: {
                                image: [{
                                    // src: "https://i.ibb.co/qMNxg9d/coffee-bk.png",
                                    src: "https://i.ibb.co/nDshRQx/coffee-main.png",
                                    // src: "https://lh3.googleusercontent.com/IpSbRWHYYo071Ao-sjBeW2Ts1KX-XeT0PzROx2b21wGgjNo5mojoLyTsdOXkWbtkW3o5JJ8wt3hpuXRTH4ZjIWlLcfqQn3DK5BTgIl-HkehljdCs9lAU53KmmVaLkc0SHvTKRlQUgyFlKCCgAhN-pJiat1PQP9lZEmMmUqu_ynd8aQvGPR-TOiK4gHaGUYbETs564jpav1O9DeP6ktPDacHHDdQr2GDx_XMk8zqvWVWo8ksbd-gMClf7TqSdd5gf1vwker-aI6UeMKWVwLl8deR0Y4ApQRMHDE7XDDTBnXdyeRu61fs6TvhBLB8Zl9ZjwM6Kpgw2QfECx7POBFeffFDw60UIcllKhOokrwvI4CNyMcsTIpOwqbP5ltmbTUDbF6keMLyVm9if3xLKPQjCHdodxZ-IsaK0kDRwXI6-z1UyijAkQf5W70cIki853FdWyMleWekw_OMtgwKu7QeHgsz2TaI0bDD8WZvBSsAWHuzglDKjZQ6Md9MTjTEnWuF0mvXgG5RcVY81dfMHUZCnl5inU55Be6zFES7r_2vBNT7Lnr0Jf6gixAaCBMEjKos0DYvCTe4vWhRz8NYN_MTPicbVUkhO0C19ZttwwwY5f5hcZbYE4uLYelLBjKhICW3J2EYLLcd4fQORHJMweTZnThMqxMfsV3GX6IS9jdcZIBqf-umbldqACK-31B74btS481Kl5i7QHzCe-4t-u2wVAlU=s512-no?authuser=0",
                                    // src: "https://lh3.googleusercontent.com/NBWbXSfNwB83GR9C-Jvgx5SUj2-dYSEZLiFg-VcRBOVUwZAXXEmW0ujTcr5Vhgz1wmjpon861p0sGJRjnBZGz2UxQULko-0ge-vCcrrAmdTod1cuULTePmIDYxgyhgs17jvEvvb44IUuo8N4C82GNv85aUsfZXqNI4RC_LcprCHFL6YaibRGyN3j6ECYYr1Ur-Mr9kb4Frml7EXDCd2SXhNB_Ukgiy4w-Ug3DatK1Ae_6ZiM4KouUuqbUWETByrvseQOWY2hupaMAzaqpqCB7yPPoUq7P4kLSDtleZkTc69jAkPSf6_QoRaHkT9fiiXdDze73iZ0g50GorkzEdiVpxUaXQ9KlhVH0Gkv4L8YrWTqJd3fI_61f6FDXSWl_c_42Uuqkgi7gP6B7tHAnUwBEOJ6Ra5CoDG7akAw9ta_ekdiIDJ_fOWZigDmOrJ8JeUHW79dzhecMq27cBCP2TeKYmyTleMBRIyIAf2NrfoJwlRT1aryClBLa63TnAqtcdNOKWZ4oZwANiquXuDUHbFr7QaEh41Eq9xXd9GZV1MGj-95OzL218jwGXQ0DiyAPqm27WrRJHdZm7lE64w06Un2trTW0TUwWqN_Mxx7D21owKx9bCzIj-uJo4QW44pIncc2dNxGU-7sNf1pDpePUSE3O0Y74ou_WkR6p3Xu4ixdpZSesqzmRmo0VBtEKxFAq-MXBnc5YqDX616fKxxxXG1tVK8=s512-no?authuser=0",
                                    width: 512,
                                    height: 512,
                                }],
                            },
                        },
                        size: {
                            random: true,
                            value: 30,
                        },
                    },
                    detectRetina: true,
                }}
            />
        </>
    );
}
