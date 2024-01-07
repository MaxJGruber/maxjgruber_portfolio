declare module "@heroicons/react/*";

declare global {
  import React from "react";
  declare const HeroIconType: React.PropsWithoutRef<
    React.SVGProps<SVGSVGElement>
  > &
    React.RefAttributes<SVGSVGElement>;
  export default HeroIconType;
}
