import React, { useState } from "react";

const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const uState = useState();

  const handleTitleClick = (i) => {
    setActiveIndex(i);
  };
  console.log(uState);
  const renderItems = props.items.map((item, i) => {
    const active = i === activeIndex ? "active" : "";
    return (
      <React.Fragment key={i}>
        <div className={`title ${active}`} onClick={() => handleTitleClick(i)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderItems}</div>;
};

export default Accordion;
