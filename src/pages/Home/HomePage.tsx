import React from 'react';
import { ErrorBoundary } from '../../components';
import { MemoryRouter, Route } from 'react-router';

const HomePage = () => {
    return (
        <ErrorBoundary>
            <MemoryRouter>
                <Route path="/home" component={HomeChild} />
            </MemoryRouter>
        </ErrorBoundary>
    );
};

export default HomePage;

const HomeChild = () => {
    return <div className="div">SamplePage</div>;
};
