import React from 'react';

const Spinner = () => {
    return (
        <>
            <div className="flex items-center justify-center ">
                <img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon" />
            </div>
        </>
    );
};

export default Spinner;