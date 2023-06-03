"use client"
import React, { useEffect, useState } from "react";
import CountryFind from "../GetCountry/CountryFind";
import {City, Country, State} from "country-state-city";
const Location = () => {
  const countryData = Country.getAllCountries();
  const [stateData,setStateData] = useState();
  const [cityData, setCityData] = useState();

  const [country,setCountry] = useState(countryData[0])
  const [state,setState] = useState()
  const [city, setCity] = useState()

  useEffect(()=>{
    setStateData(State.getStatesOfCountry(country?.isoCode))
  },[country])

  useEffect(()=>{
    setCityData(City.getCitiesOfCountry(country?.isoCode,state?.isoCode))
  },[country])

  useEffect(()=>{
    cityData && setCity(cityData[0])
  },[cityData])

  useEffect(()=>{
    stateData && setState(stateData[0])
  },[stateData])

  const getLocation = ()=>{
    
  }

  return (
    <div className="mb-[10rem]">
        <div className="mt-[12rem] w-screen flex justify-center items-center gap-4 flex-wrap">
          <CountryFind placeholder='Select country' people={countryData} selected={country} setSelected={setCountry} className='md:mb-0 mb-10'/>
          <CountryFind placeholder='Select city' people={cityData} selected={city} setSelected={setCity} />
        </div>
        <div className="flex justify-center items-center">
          <button  className="bg-blue-500 text-white p-2 w-44 h-10 rounded-md mt-10" onClick={getLocation}>Submit</button>
        </div>
    </div>
  );
};

export default Location;
