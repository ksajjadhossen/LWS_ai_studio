import Header from "../../components/Header/Header";
import ImagePresetsSection from "./ImagePresetsSection/ImagePresetsSection";

export default function Downloaded() {
  return (
    <body class="bg-black text-white">
      <div class="container mx-auto px-4 py-8 max-w-6xl">
        {/* <!-- Header/Logo --> */}
        <Header></Header>

        {/* <!-- Glow --> */}
        <div class="fixed -bottom-1/4 -right-0 ">
          <div class="h-96 w-96 bg-gradient-to-r from-pink-600 to-indigo-400 rotate-90 rounded-full blur-[180px] "></div>
        </div>

        {/* <!-- Main Content --> */}
        <main class="relative z-10">
          {/* <!-- Welcome Message --> */}
          <h2 class="text-4xl font-bold mb-8">
            Downloaded <span class="text-2xl">👋</span>
          </h2>

          {/* <!-- Image Presets Section --> */}
          <ImagePresetsSection></ImagePresetsSection>
        </main>
      </div>
    </body>
  );
}
