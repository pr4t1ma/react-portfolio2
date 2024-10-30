import AccordionItem from "./AccordionItem";

const accordianData = [
  { name: "UX Design", text: "UX design since 2012" },
  { name: "Web Development", text: "Building responsive websites since 2010" },
  {
    name: "Graphic Design",
    text: "Crafting visually appealing designs since 2008",
  },
  {
    name: "Digital Marketing",
    text: "Helping businesses grow online since 2015",
  },
  {
    name: "Content Strategy",
    text: "Developing content strategies since 2013",
  },
];

const Accordion = () => {
  return (
    <div>
      {accordianData.map((item) => {
        return <AccordionItem name={item.name} text={item.text} />;
      })}
    </div>
  );
};

export default Accordion;
