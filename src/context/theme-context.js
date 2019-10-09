import React, { Component } from 'react';

export const themes = {
    light: 'header-color-day',
    dark: 'header-color-night'
}

export const ThemeContext = React.createContext(
    themes.light
)