
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import '../App.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import WordCardBank from '../components/WordCardBankPage';
import { useOutletContext } from 'react-router-dom';

const WordBankPage = () => {
  const { favorites, setFavorites } = useOutletContext();
  

  useEffect(() => {
    const fetchWordBankData = async () => {
      try {
        let token = localStorage.getItem("token")
        axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        const response = await axios.get('http://127.0.0.1:8000/api/v1/wordbank/');
       
        setFavorites(response.data);
        
      } catch (error) {
        console.error('Error fetching word data:', error);
      } 
    };

    fetchWordBankData();
  }, []);

  return (
    <>
    {favorites.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ alignContent: 'center', fontSize:'40px'}}>Your word bank is currently empty. Please select words in the Greek text to add to your word bank.</p>
        </div>
      ) : (
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px", 
        justifyContent: "center", 
        marginTop: '100px'
      }}>
      {favorites.map((favorite) => (
        <WordCardBank 
          key={favorite.id}
          word={favorite.word}
          morphology={favorite.morphology}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ))}</div>
      )}
    </>
  );
};

export default WordBankPage;



