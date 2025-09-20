import AdvancedSettings from "./AdvancedSettings/AdvancedSettings";
import ResultGrid from "./ResultGrid/ResultGrid";
import SearchInput from "./SearchInput/SearchInput";

export default function MainComponent() {
  return (
    <main className="relative z-10">
      {/* Welcome Message */}
      <h2 className="text-4xl font-bold mb-8">
        Let's create a masterpiece, Alvian! <span className="text-2xl">👋</span>
      </h2>

      {/* Search Input */}
      <SearchInput></SearchInput>
      {/* Advanced Settings */}
      <AdvancedSettings></AdvancedSettings>

      {/* Result Grid */}
      <ResultGrid></ResultGrid>
    </main>
  );
}
