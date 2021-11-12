import React from 'react';

const DisplayMember = ({member}) => {
    const {memberName, memberPhoto, memberDetails} = member;
    return (
        <div>
            {memberName}
        </div>
    );
};

export default DisplayMember;