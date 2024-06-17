'use client'

import { SearchIcon } from 'lucide-react';

import { useSearch } from '@/hooks/use-search';

export const SearchItem: React.FC = () => {
    const search = useSearch()

    return (
        <div>
            <div className='flex items-center gap-x-3'>
                <SearchIcon className='w-6 h-6 text-white' />
                <input
                    type="text"
                    placeholder="Digite sua cidade"
                    value={search.searchTerm}
                    onChange={search.handleInputChange}
                    className='w-[100px] sm:w-[400px] xl:w-[600px] border border-white bg-transparent p-2 text-white rounded-xl'
                />
            </div>
            <ul className='absolute w-[140px] sm:w-[400px] xl:w-[600px] xl:ml-10 mt-3 bg-white rounded-md shadow-md z-10 flex items-center flex-col'>
                {search.suggestions.map((suggestion, index) => (
                    <li
                        key={index}
                        onClick={() => search.handleSuggestionClick(suggestion)}
                        className='px-4 py-2 hover:bg-gray-100 cursor-pointer w-full flex flex-col items-center'
                    >
                        {suggestion.name}, {suggestion.state}, {suggestion.country}
                    </li>
                ))}
            </ul>
        </div>
    );
};