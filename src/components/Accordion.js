import { useState } from "react";

const Accordion = ({ faqs }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion">
      <h2>{faqs.questions}<span onClick={() => setShow(!show)}>{show ? '➖' : '➕'}</span></h2>
      {show ? <p>{faqs.answers}</p> : null}
    </div>
  )
}

export default Accordion;