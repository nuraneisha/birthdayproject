// File: components/ConfettiEffect.jsx
import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

export default function ConfettiEffect() {
    const [width, height] = useWindowSize();
    return <Confetti width={width} height={height} />;
}