import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import axios from 'axios';
import { api } from "../utilities";
import Button from "react-bootstrap/Button";
import Loader from '../components/Loader';

const ChapterTranslationPage = () => {
  const [chapterTranslation, setChapterTranslation] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { bookId, chapterNumber } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getChapterTranslation = async () => {
      try {
        const response = await api.get(`book/${bookId}/chapter/${chapterNumber}/translation/`);
        setChapterTranslation(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching chapter:', error);
        alert('Something went wrong');
      }
    };

    getChapterTranslation();
  }, [chapterNumber]);

  const handleNavToGreek = () => {
    navigate(`/${bookId}/chapter/${chapterNumber}/`);

  }
 

  return (
    <div>
    {isLoading ? (<Loader />) : (
    <Row className='chapterPage'>
      <h2 style={{ marginTop: "20vh", marginBottom:'0vh', marginLeft:'45vw'}}>{chapterTranslation.reference}</h2>
      <Button style={{width:'200px', height:'40px', marginTop:'5vh', marginBottom:'5vh', background:'beige', marginLeft:'40vw'}} onClick={handleNavToGreek}>See Greek Text</Button>
      <p style={{fontSize: "20px", margin: '10px', color: 'black'}}>
      {chapterTranslation.content}
     
      </p>
    </Row>
    )}
    </div>
  );
};

export default ChapterTranslationPage;






