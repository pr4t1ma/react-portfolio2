import Skills from "./Skills";

const SkillsSection: React.FC = () => {
  return (
    <div className="text-black container mx-auto">
      <h1>Skills</h1>
      <div className="flex gap-10 flex-wrap">
        <Skills heading="HTML" text="Hello this is a text " icon="" />
        <Skills heading="CSS" text="Hello this is a text " icon="" />
        <Skills heading="UI/UX design" text="Hello this is a text " icon="" />
        <Skills heading="Javascript" text="Hello this is a text " icon="" />
        <Skills heading="React.js" text="Hello this is a text " icon="" />
      </div>
    </div>
  );
};

export default SkillsSection;
