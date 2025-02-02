import React from "react";
import ReactDOM from "react-dom/client";
import App3 from "./App3";

// Higher-Order Component (HOC) to add background color
const withColor = (Component) => {
  return (props) => {
    const style = {
      backgroundColor: props.color,
      padding: "10px",
      margin: "5px",
      borderRadius: "5px",
    };
    return (
      <div style={style}>
        <Component {...props} />
      </div>
    );
  };
};

// Simple Button Component
const Button = ({ label }) => {
  return <button>{label}</button>;
};

// Applying the HOC to create ColoredButton
const ColoredButton = withColor(Button);

// App Component
const App = () => {
  return (
    <div>
      <h1>Colored Buttons with HOC</h1>
      <ColoredButton color="red" label="Red Button" />
      <ColoredButton color="blue" label="Blue Button" />
      <ColoredButton color="green" label="Green Button" />
      <ColoredButton color="yellow" label="Yellow Button" />
      <App3 />
    </div>
  );
};

// Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
