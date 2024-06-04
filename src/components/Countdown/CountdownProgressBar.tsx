import styles from "./Countdown.section.module.css";

interface CountdownProgressBarProps {
  progress: number;
  color: string;
}

export const CountdownProgressBar = ({
  progress,
  color,
}: CountdownProgressBarProps) => {
  return (
    <div
      role="progressbar"
      className={`progressbar ${styles.progressbar}`}
      aria-valuenow={progress}
      aria-live="polite"
      style={
        {
          "--progress": `${progress + "%"}`,
          "--progress-color": color,
        } as React.CSSProperties
      }
    ></div>
  );
};
