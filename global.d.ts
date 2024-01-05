declare module "@heroicons/react/*";

declare global {
  import React from "react";
  declare const HeroIconType: React.SFC<MyComponentProps>;
  export default HeroIconType;
}
