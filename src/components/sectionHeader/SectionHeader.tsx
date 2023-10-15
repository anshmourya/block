// import React from "react";
interface sectionProps {
  title?: string;
}
const SectionHeader = ({ title }: sectionProps) => {
  return (
    <div className="max-w-[800px] m-auto container text-center ">
      <h2 className="mb-5 title">{title || "What Makes Us Different."}</h2>
      <p className="paragraph">
        Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
        libero at tempus, blandit posuere ligula varius congue cursus porta
        feugiat
      </p>
    </div>
  );
};

export default SectionHeader;
