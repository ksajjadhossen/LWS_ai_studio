import Glow from "../../components/Glow/Glow";
import Header from "../../components/Header/Header";
import MainComponent from "../../components/MainComponent/MainComponent";
import "./CreateImage.css";

export default function CreateImage({ route }) {
  return (
    <div className="bg-black text-white main_body">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header/Logo */}
        <Header route={route}></Header>

        {/* Glow */}
        <Glow></Glow>
        {/* Main Content */}
        <MainComponent></MainComponent>
      </div>
    </div>
  );
}
