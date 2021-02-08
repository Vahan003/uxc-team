import React from "react";
import Category from "../components/Category";
import '../styles/sections.sass'
const AboutSection = (props) => {
  return (
    <div className="section">
      <h2 className="title" ref={props._ref}>High Quality Home Decor</h2>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quis! Assumenda laborum ex amet exercitationem aut nisi laboriosam
        excepturi sint, corrupti id? Eum eius fuga esse excepturi tempore
        perspiciatis repellendus dolores libero. Maiores omnis placeat nihil
        explicabo! Repellendus, perferendis ad? Asperiores quo at exercitationem
        explicabo quae, quibusdam hic. Optio ab animi necessitatibus dolor nulla
        quisquam, amet pariatur perferendis accusamus deleniti. Deleniti fuga
        aliquid exercitationem dicta quidem quia commodi accusamus consectetur
        minima magni, eligendi similique quod cumque libero. Eius minima quaerat
        perferendis repellendus magnam maxime molestiae natus iusto explicabo
        ad? Earum exercitationem blanditiis quam vitae quidem expedita quasi
        placeat, quaerat iusto?
      </p>
      <Category />
    </div>
  );
};

export default AboutSection;
