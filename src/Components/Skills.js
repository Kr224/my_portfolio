import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>My tech stack</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"  alt="Image" />
                                <h5>Bash</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"  alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg"  alt="Image" />
                                <h5>Ant Design</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"  alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"   alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"  alt="Image" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"  alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg"  alt="Image" />
                                <h5>Gradle</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-line-wordmark.svg" alt="Image" />
                                <h5>JUnit</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" alt="Image" />
                                <h5>Matplotlib</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" alt="Image" />
                                <h5>Maven</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="Image" />
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Image" />
                                <h5>Node.Js</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Image" />
                                <h5>Postman</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="Image" />
                                <h5>React.Js</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" alt="Image" />
                                <h5>Pytorch</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Image" />
                                <h5>SpringBoot</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ssh/ssh-original.svg" alt="Image" />
                                <h5>SSH</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Image" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" alt="Image" />
                                <h5>TensorFlow</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg" alt="Image" />
                                <h5>UML</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yaml/yaml-original.svg" alt="Image" />
                                <h5>YAML</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg" alt="Image" />
                                <h5>Vim</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unix/unix-original.svg" alt="Image" />
                                <h5>Unix</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" alt="Image" />
                                <h5>Slack</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Image" />
                                <h5>Next.Js</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="Image" />
                                <h5>Linux</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}