import React, { useRef } from 'react'
import './CardHorizontal.css'
import Card from '../Card/Card'
import arrow from '../../assets/whiteArrowLeft.png'

function CardHorizontal() {
    const scrollContainerRef = useRef(null);

    let cardsInfo = [       //array with cards info
        {
        image: 'https://morethandigital.info/wp-content/uploads/2017/03/10-Top-Webseiten-für-gratis-lizenzfreie-Bilder.jpeg',
        description: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, asperiores commodi. Accusantium eveniet fuga accusamus?</p>,
        },
        {
        image: 'https://img.freepik.com/free-photo/mountains-scape_53876-16353.jpg?semt=ais_hybrid&w=1080',
        description: <p>Illo labore optio, veniam nesciunt sapiente culpa, consequuntur reiciendis temporibus ducimus quibusdam.</p>,
        },
    ]


    // function to move the cards with buttons instead of scroll
    function goRightHandler(toRight ,i) {
        if(toRight) {
            document.getElementsByClassName('cardsContainerNew')[i].classList.add('moveLeft');
        }
        else        {
            document.getElementsByClassName('cardsContainerNew')[i].classList.remove('moveLeft')
        }
    }


    // buttons component to move the cards
    function LrButtons(i) {
        if(i<0) return null;
        return (
            <div className='leftrightbtns'>
                <div className='leftbtn  lrbtn' onClick={() => {goRightHandler(false,i)}}> <img src={arrow}/> </div>
                <div className='rightbtn lrbtn' onClick={() => {goRightHandler(true, i)}}> <img src={arrow}/> </div>
            </div>
        )
    }



return (
    <div className='bodyContainerNew' >

        <h2 className='bodyTitle'>Heading 1</h2>
        {LrButtons(0)}
        <div className='cardsContainerNew' ref={scrollContainerRef}>
            <Card {...cardsInfo[0]}/>
            <Card {...cardsInfo[1]}/>
            <Card {...cardsInfo[0]}/>
            <Card {...cardsInfo[1]}/>
            <Card {...cardsInfo[0]}/>
            <Card {...cardsInfo[1]}/>
            <Card {...cardsInfo[0]}/>
            <Card {...cardsInfo[1]}/>
        </div>

        <h2 className='bodyTitle'>Heading 2</h2>
        {LrButtons(1)}
        <div className='cardsContainerNew'>
            <Card {...cardsInfo[1]}/>
            <Card {...cardsInfo[0]}/>
            <Card {...cardsInfo[1]}/>
            <Card {...cardsInfo[0]}/>
            <Card {...cardsInfo[1]}/>
            <Card {...cardsInfo[0]}/>
            <Card {...cardsInfo[1]}/>
            <Card {...cardsInfo[0]}/>
        </div>

    </div>

  )
}

export default CardHorizontal