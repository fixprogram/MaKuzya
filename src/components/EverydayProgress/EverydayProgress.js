import React from "react";
import { connect } from "react-redux";
import { Progress } from "rsuite";

const { Line } = Progress;

const EverydayProgress = ({ user }) => {
  const { everydayProgress } = user;

  return (
    <div className="everyday-progress">
      <img
        src={`./img/cat-icons/${
          everydayProgress > 0 ? "awaken" : "sleeping"
        }.svg`}
        style={{ width: 100, marginTop: -30 }}
        alt="MaKuzya"
      />
      <Line
        percent={everydayProgress}
        status={`${everydayProgress !== 100 ? "active" : "success"}`}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(EverydayProgress);
