import Accordion from "./components/Accordion";
import Counter from "./components/Counter";
import UseStateWithArrays from "./components/UseStateWithArrays";
import UseStateWithObject from "./components/UseStateWithObject";
import CountWithuseReducer from "./components/CountWithuseReducer";
const items = [
  {
    title: "What is React?",
    content: "React is front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is favourite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "By creating components",
  },
];
function App() {
  return (
    <div>
      <Accordion items={items} />
      <Counter />
      <UseStateWithObject />
      <UseStateWithArrays />
      <CountWithuseReducer />
    </div>
  );
}

export default App;
