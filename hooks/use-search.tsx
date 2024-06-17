'use client'

import React, { useState } from 'react';
import axios from 'axios';

import { useRouter } from 'next/navigation';

import { SearchIcon } from 'lucide-react';

import geolocationService from '@/services/geolocation';

interface City {
    id: number;
    name: string;
    country: string;
    local_names: {
        io: string;
    };
}

export const useSearch = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState<City[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        if (e.target.value.length > 2) {
            fetchSuggestions(e.target.value);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion: City) => {
        router.push(`/details/${suggestion.name}_${suggestion.country}`)
        setSuggestions([]);
        setSearchTerm('')
    };

    const fetchSuggestions = async (searchTerm: string) => {
        try {
            await geolocationService.getSuggestions(searchTerm)
                .then(response => setSuggestions(response))
                .catch(error => console.error('Erro ao buscar sugestões:', error));
        } catch (error) {
            console.error("Erro ao buscar sugestões:", error);
        }
    }

    return ({
        searchTerm,
        suggestions,
        handleSuggestionClick,
        handleInputChange
    })
}