import AlarmAside from "~/views/alarm/aside";
import AlarmContent from "~/views/alarm/content";

export default function Home() {
  return (
    <div className="h-[var(--app-content-height)] flex">
      <AlarmAside />
      <AlarmContent />
    </div>
  );
}
