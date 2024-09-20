import React, { useEffect, useState, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";


interface Country {
  value: string;
  label: string;
  flag: string;
}

interface ApiResponse {
  countries: Country[];
  userSelectValue: Country | null;
}

const CountrySelect: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        );
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        const data: ApiResponse = await response.json();
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const filteredCountries = countries.filter(country =>
    country.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchTerm("");
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full relative" ref={dropdownRef}>
      <div 
        className="w-full p-3 bg-white border rounded-tl-xl rounded-tr-xl flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedCountry ? (
          <div className="flex items-center">
            <span>{selectedCountry.label}</span>
          </div>
        ) : (
          <span>Select a country</span>
        )}
        <span className="ml-2">
            <IoChevronDown size={24} />
        </span>
      </div>
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-bl-xl rounded-br-xl z-10 shadow-lg">
          <input
            type="text"
            placeholder="Search countries..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 border-b"
          />
          <div className="max-h-60 overflow-y-auto">
            {filteredCountries.map((country) => (
              <div
                key={country.value}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => handleSelect(country)}
              >
                <span>{country.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySelect;