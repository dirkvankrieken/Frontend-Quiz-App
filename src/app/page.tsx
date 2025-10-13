import './globals.css';
import LightDarkSwitch from './components/LightDarkSwitch/LightDarkSwitch';
import Start from './components/Start/Start';

function App() {
  return (
    <div className="dark:bg-gray-500">
      <div className="dark:bg-gray-500 min-h-screen max-w-5xl m-auto">
        <LightDarkSwitch />
        <div className="flex border-2 border-black flex-col lg:flex-row">
          {/* <!-- Quiz menu start --> */}
          <div className="border-2 border-black">
            <h1 className="text-6xl">
              Welcome to the <b>Frontend Quiz!</b>
            </h1>
            <p>
              <i>Pick a subject to get started.</i>
            </p>
          </div>
          <Start />
          {/* <!-- Quiz menu end --> */}
          {/* <!-- Quiz question start --> */}
          {/* <p>Question 1 <!-- number --> of 10</p> */}
          {/* A B C D */}
          {/* <p>Submit answer</p> */}
          {/* <!-- Quiz question end --> */}
          {/* <!-- Quiz completed start --> */}
          {/* <p>Quiz completed </p> */}
          {/* You scored... */}
          {/* <!-- score --> out of 10 */}
          {/* <!-- Quiz completed end --> */}
        </div>
      </div>
    </div>
  );
}

export default App;
