import React, { Component } from 'react';

export const themes = {
    landing_grid: 'landing-grid'
}

export const gridContext = React.createContext(
    themes.landing_grid
)