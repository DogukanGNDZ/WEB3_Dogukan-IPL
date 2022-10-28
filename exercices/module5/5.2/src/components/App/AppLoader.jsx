import { ProviderWrapper as LanguageProviderWrapper } from "contexts/OpinionContexts";

import App from "components/App/App";
const AppLoader = () => {
  return (
    <LanguageProviderWrapper>
      <App />
    </LanguageProviderWrapper>
  );
};

export default AppLoader;
