import React from "react";

const SectionLayout = (props) => {
  const { children, id, variant } = props;
  return (
    <section id={id} className={`max-w-6xl mx-auto py-12 ${variant}`}>
      {children}
    </section>
  );
};

export default SectionLayout;
