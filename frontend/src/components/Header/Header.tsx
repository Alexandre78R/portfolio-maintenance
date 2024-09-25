import { useLang } from "@/context/Lang/LangContext";
import { SparklesCore } from "../ui/SparklesCore";
import { useTheme } from "@/context/Theme/ThemeContext";
import themes from "@/context/Theme/themes";
import ButtonCustom from "../Button/Button";

const Header: React.FC = (): React.ReactElement => {
  const { translations } = useLang();
  const { theme } = useTheme();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <header id="header">
      <div className="h-screen relative w-full bg-body flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.8}
            maxSize={1.5}
            particleDensity={100}
            className="w-full h-full bg-body"
            particleColor={themes[theme].colors.primary}
          />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center">
          <div className="w-40 h-40 relative overflow-hidden"></div>
          <h1 className="text-4xl lg:text-6xl font-bold text-center text-primary relative hover:text-secondary mb-6">
            {translations.maintenanceH1}
          </h1>
          <h2 className="text-2xl lg:text-4xl font-bold text-center text-text relative hover:text-secondary mb-6">
            {translations.maintenanceH2}
          </h2>
          <ButtonCustom
            text={translations.maintenanceButton}
            onClick={handleRefresh}
          />
        </div>
        <footer className="absolute bottom-5 text-text300 text-center w-full">
          &copy; {new Date().getFullYear()} {translations.maintenanceFooter}
        </footer>
      </div>
    </header>
  );
};

export default Header;
