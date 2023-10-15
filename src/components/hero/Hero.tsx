// import React from "react";

import Button from "../button/Button";

const Hero = () => {
  return (
    <section id="home" className="relative bg-[#7c4fef] pt-36 pb-14">
      <div className="container flex items-center justify-center m-auto max-md:flex-col">
        <div className="max-md:text-center md:w-1/2">
          <h1 className="mb-5 tracking-tighter text-white title ">
            Solutions Rooted In Code And Design
          </h1>
          <ul className="text-white md:list-disc">
            {[1, 2, 3].map((item) => (
              <li key={item}>
                <p className="mb-2 paragraph">
                  Ligula risus auctor and egestas mauris donec iaculis
                </p>
              </li>
            ))}
          </ul>
          <div>
            <Button className="my-2 capitalize" variant="primary">
              Buy now for - &#36;15
            </Button>
          </div>
        </div>
        <div>
          <img src="./hero-1-img.png" alt="" className="w-[400px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
