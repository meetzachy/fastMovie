import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
      onPlayMovie={() => alert('Playing movie...')}
      onUploadImage = {() => alert('Uploading image...')}
      />
    </div>
    
  );
}

export default App;
