import React from "react";

const SidebarContent = ({ children }) => {
  if (!children) {
    return null;
  }
  return (
    <>
      <section aria-labelledby="section-2-title">
        {/* <h2>Section title</h2> */}
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="p-6">{children}</div>
        </div>
      </section>
    </>
  );
};

export default SidebarContent;
