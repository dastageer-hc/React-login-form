
import blob from './assets/blob.svg'
import classes from  './App.module.css';
import SignupForm from './components/Signup';
import {useState} from 'react'
import LoginForm from './components/LoginForm';

function App() {
  const [users, CreateUser] = useState([]);
  const [isRegisterd, setisRegisterd ] = useState(false);
  const [loginFrom, setLoginForm] = useState(false);

  const AddUsser=(user)=>{
    CreateUser([...users, user]);
    console.log(users)
  }

  const onLogin=()=>{
    setLoginForm(true);
    setisRegisterd(true)

  }
  return (<>
        {!isRegisterd && <SignupForm onLogin={onLogin} onCreateUser= {AddUsser}/>}
        {/* {isRegisterd } */}

        {loginFrom && <LoginForm/>}
        
    </>
  );
}

export default App;






// import Particles from "react-tsparticles";

// const App = () => {
//   const particlesInit = (main) => {
//     console.log(main);

//     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
//   };

//   const particlesLoaded = (container) => {
//     console.log(container);
//   };
//   return (
//     <div>
//       <form>
//         <lable>TT</lable>
//       </form>
//       <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{
//         background: {
//           color: {
//             value: "#0d47a1",
//           },
//         },
//         fpsLimit: 60,
//         interactivity: {
//           events: {
//             onClick: {
//               enable: true,
//               mode: "push",
//             },
//             onHover: {
//               enable: true,
//               mode: "repulse",
//             },
//             resize: true,
//           },
//           modes: {
//             bubble: {
//               distance: 100,
//               duration: 2,
//               opacity: 0.8,
//               size: 40,
//             },
//             push: {
//               quantity: 4,
//             },
//             repulse: {
//               distance: 200,
//               duration: 0.4,
//             },
//           },
//         },
//         particles: {
//           color: {
//             value: "#ffffff",
//           },
//           links: {
//             color: "#ffffff",
//             distance: 150,
//             enable: true,
//             opacity: 0.5,
//             width: 1,
//           },
//           collisions: {
//             enable: true,
//           },
//           move: {
//             direction: "none",
//             enable: true,
//             outMode: "bounce",
//             random: false,
//             speed: 6,
//             straight: false,
//           },
//           number: {
//             density: {
//               enable: true,
//               area: 800,
//             },
//             value: 80,
//           },
//           opacity: {
//             value: 0.5,
//           },
//           shape: {
//             type: "circle",
//           },
//           size: {
//             random: true,
//             value: 5,
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//     </div>

//   );
// };

// export default App