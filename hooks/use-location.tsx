'use client'

import { useEffect, useState } from "react";

export const useLocation = () => {
    const [position, setPosition] = useState<GeolocationPosition | null>(null);
    const [error, setError] = useState<GeolocationPositionError | null>(null);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => setPosition(position),
            (error) => setError(error)
        );
    }, []);

    return { position, error }
}