// import { InfoIcon } from "../assets";
import { CurrentDate } from "./CurrentDate";
// import { Button } from "./ui/Button/Button.tsx";

export const Header = () => {
  return (
    <>
      <h1 className="logo mr-3 text-xl sm:text-2xl font-semibold">DueTrack</h1>
      <CurrentDate className="text-lg sm:text-2xl font-semibold" />
    </>
  );
};
