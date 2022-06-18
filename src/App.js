import {Parallax, ParallaxLayer} from '@react-spring/parallax'
function App() {
  return (
    <div className="App">
     <Parallax pages = {4} > 
        <ParallaxLayer
          speed = {1}
          offset = {0}
          factor = {1.5}
        >
          <h2>
            This is Parallax
          </h2>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={.1} 
          speed = {.5}
        >
          <h2>
            This is Parallax
          </h2>
        </ParallaxLayer>
     </Parallax>
    </div>
  );
}
export default App;
