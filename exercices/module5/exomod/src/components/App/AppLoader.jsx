import { ProviderWrapper as LanguageProviderWrapper } from "contexts/LanguageContext.jsx";

import App from "components/App/App";
const AppLoader = () => {
  return (
    <LanguageProviderWrapper>
      <App />
    </LanguageProviderWrapper>
  );
};

export default AppLoader;
