import Accordion from "./Accordion";
import data from "../data.json";
const Faq = () => {
  console.log(data.faqs);
  return (
    <>
      <h1>Faq's</h1>


      {
        data.faqs.map((obj, index) => (
          <>
            <Accordion key={index} faqs={obj} />
          </>
        ))

      }


    </>
  )
}
export default Faq;