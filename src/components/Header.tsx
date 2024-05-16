import { InfoIcon } from "../assets";
import { CurrentDate } from "./CurrentDate";
import { Button } from "./ui/Button/Button.tsx";

export const Header = () => {
  return (
    <>
      <h1 className="logo mr-3 text-xl lg:text-3xl font-semibold">Deadlines</h1>
      <Button
        type="button"
        aria-label="click here for more information about the app Deadline"
        className="p-0 border-none"
        buttonText="check out more information about Deadline"
        icon={InfoIcon}
        iconOnly
      />
      <CurrentDate className="ml-auto text-xl lg:text-3xl font-semibold" />
    </>
  );
};
