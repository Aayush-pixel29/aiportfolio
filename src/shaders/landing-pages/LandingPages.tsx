import { LandingPageFrame, type LandingPageProps } from "./LandingPageFrame";
export { LandingPageFrame, applyBackgroundPresentation } from "./LandingPageFrame";
export type { LandingPageFrameProps, LandingPageProps } from "./LandingPageFrame";

export type CompleteShelfLandingPageProps = LandingPageProps & {
  presentation?: "page" | "background";
};

export function CompleteShelfLandingPage({ presentation = "background", ...props }: CompleteShelfLandingPageProps) {
  return (
    <LandingPageFrame 
      {...props} 
      backgroundCanvasSelector={presentation === "background" ? "#scene" : undefined}
      title="Working Volumes — Seven Tools for Making" 
      sourceUrl="/landing-pages/complete-shelf-v2.html" 
    />
  );
}
