'use client'

// import React, { useState } from 'react';
// import axios from 'axios';

// import { useRouter } from 'next/navigation';

import { SearchIcon } from 'lucide-react';

import { useSearch } from '@/hooks/use-search';

// import geolocationService from '@/services/geolocation';

// interface City {
//     id: number;
//     name: string;
//     country: string;
//     local_names: {
//         io: string;
//     };
// }

export const SearchItem: React.FC = () => {
    const search = useSearch()
    // const router = useRouter()
    // const [searchTerm, setSearchTerm] = useState('');
    // const [suggestions, setSuggestions] = useState<City[]>([]);

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearchTerm(e.target.value);
    //     if (e.target.value.length > 2) {
    //         fetchSuggestions(e.target.value);
    //     } else {
    //         setSuggestions([]);
    //     }
    // };

    // const handleSuggestionClick = (suggestion: City) => {
    //     router.push(`/details/${suggestion.name}_${suggestion.country}`)
    //     setSuggestions([]);
    //     setSearchTerm('')
    // };

    // const fetchSuggestions = async (searchTerm: string) => {
    //     try {
    //         await geolocationService.getSuggestions(searchTerm)
    //             .then(response => setSuggestions(response))
    //             .catch(error => console.error('Erro ao buscar sugestões:', error));
    //     } catch (error) {
    //         console.error("Erro ao buscar sugestões:", error);
    //     }
    // }

    return (
        <div>
            <div className='flex items-center gap-x-3'>
                <SearchIcon className='w-6 h-6 text-white' />
                <input
                    type="text"
                    placeholder="Digite sua cidade"
                    value={search.searchTerm}
                    onChange={search.handleInputChange}
                    className='w-[800px] border border-white bg-transparent p-2 text-white rounded-xl'
                />
            </div>
            <ul className='absolute w-[800px] ml-10 mt-3 bg-white rounded-md shadow-md z-10 flex items-center flex-col'>
                {search.suggestions.map((suggestion) => (
                    <li
                        key={suggestion.id}
                        onClick={() => search.handleSuggestionClick(suggestion)}
                        className='px-4 py-2 hover:bg-gray-100 cursor-pointer w-full flex flex-col items-center'
                    >
                        {suggestion.name}, {suggestion.country}
                    </li>
                ))}
            </ul>
        </div>
    );
};