// Define the interface for the props
interface SkillsProps {
  icon: string; // Use React.ReactNode for elements
  heading: string;
  text: string;
}
const Skills: React.FC<SkillsProps> = ({ icon, heading, text }) => {
  return (
    <div className=" border-spacing-1 shadow-2xl p-10 w-300 h-300 ">
      <ul>
        <li>{icon}</li>
        <li>
          <h2>{heading}</h2>
        </li>
        <li>
          <p>{text}</p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
