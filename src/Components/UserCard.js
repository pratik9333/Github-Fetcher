import React from "react";
import { Card, CardBody } from "reactstrap";

const userCard = ({ user }) => {
  return (
    <Card className="text-center mt-3" style={{ marginBottom: "80px" }}>
      <img src={user.avatar_url} className="img-thumbnail" />
      <CardBody>
        <div className="text-primary">NAME: {user.name}</div>
        <div className="text-primary">
          LOCATION: {user.location ? user.location : "Not available"}
        </div>
        <div className="text-primary">
          BIO : {user.bio ? user.bio : "Not Available"}
        </div>
        <div className="text-primary">
          Available for hire: {user.hireable ? "YES" : "NOPE"}
        </div>
        <div className="text-primary">FOLLOWERS: {user.followers}</div>
      </CardBody>
    </Card>
  );
};

export default userCard;
