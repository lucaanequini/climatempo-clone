'use client'

import React, { useState } from 'react';
import axios from 'axios';

import { useRouter } from 'next/navigation';

import { SearchIcon } from 'lucide-react';

interface City {
    id: number;
    name: string;
    country: string;
}

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

export const SearchItem: React.FC = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState<City[]>([]);

    const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY

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
            const response = await axios.get(
                `https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=${API_KEY}`
            );
            setSuggestions(response.data);
            console.log(suggestions)
        } catch (error) {
            console.error("Erro ao buscar sugestões:", error);
        }
    }

    return (
        <div>
            <div className='flex items-center gap-x-3'>
                <SearchIcon className='w-6 h-6 text-white' />
                <input
                    type="text"
                    placeholder="Digite sua cidade"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className='w-[800px] border border-white bg-transparent p-2 text-white rounded-xl'
                />
            </div>
            <ul className='absolute w-[800px] ml-10 mt-3 bg-white rounded-md shadow-md z-10 flex items-center flex-col'>
                {suggestions.map((suggestion) => (
                    <li
                        key={suggestion.id}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className='px-4 py-2 hover:bg-gray-100 cursor-pointer w-full flex flex-col items-center'
                    >
                        {suggestion.name}, {suggestion.country}
                    </li>
                ))}
            </ul>
        </div>
    );
};