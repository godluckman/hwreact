import React from 'react';

const Title = ({titleimit}: {titleimit: string}) => {
    document.title = titleimit;
    return null
};

export default Title;