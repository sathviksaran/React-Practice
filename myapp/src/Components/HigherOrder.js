import React from "react";

const UpdatedComp = OriginalComp => {
    class NewComp extends React.Component {
        render() {
            return <OriginalComp name = "The user"></OriginalComp>;
        }
    }
    return NewComp;
};
export default UpdatedComp;