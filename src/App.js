import Accordion from "./components/Accordion";
import Counter from "./components/Counter";
import UseStateWithArrays from "./components/UseStateWithArrays";
import UseStateWithObject from "./components/UseStateWithObject";
import CountWithuseReducer from "./components/CountWithuseReducer";
import ObjectStateuseReducer from "./components/ObjectStateuseReducer";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import RenderPropCommon from "./renderProps/RenderPropCommon";
import CounterRender from "./renderProps/CounterRender";
import HoverRender from "./renderProps/HoverRender";
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
      <ObjectStateuseReducer />
      <ClickCounter name="yasir" />
      <HoverCounter />
      <RenderPropCommon
        render={(count, handleCount) => {
          return <CounterRender count={count} handleCount={handleCount} />;
        }}
      />
      <RenderPropCommon
        render={(count, handleCount) => {
          return <HoverRender count={count} handleCount={handleCount} />;
        }}
      />
    </div>
  );
}

export default App;
