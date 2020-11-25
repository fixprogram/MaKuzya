import React from "react";
import { Loader, Progress } from "rsuite";
import { useProfile } from "../../context/profile.context";

const { Line } = Progress;

const EverydayProgress = () => {
  const { isLoading, profile } = useProfile();
  if (isLoading && !profile) {
    return <Loader />;
  }
  return (
    <div className="everyday-progress">
      <img
        src={`./img/cat-icons/${
          profile.everydayProgress > 0 ? "awaken" : "sleeping"
        }.svg`}
        style={{ width: 100, marginTop: -30 }}
        alt="MaKuzya"
      />
      <Line
        percent={profile.everydayProgress}
        status={`${profile.everydayProgress !== 100 ? "active" : "success"}`}
      />
    </div>
  );
};

export default EverydayProgress;
