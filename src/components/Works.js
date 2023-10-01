import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useRef } from 'react';

import '../style/works.css'



const worksData = [
    {
        id: 1,
        image: require('../images/Tina_Krasivo.png'),
        alt: 'Tina Karol Good Krasivo',
        artist: 'Tina Karol',
        title: 'Krasivo',
        director: 'Indy Hait',
        videoUrl: 'https://www.youtube.com/embed/6ljY-2dveL8',
        aspectRatio: '16-9'
    },
    {
        id: 2,
        image: require('../images/Tina_GoodGuy.png'),
        alt: 'Tina Karol Good Guy',
        artist: 'Tina Karol',
        title: 'Good Guy',
        director: 'Indy Hait',
        videoUrl: 'https://www.youtube.com/embed/pwLdJ4DPJ9g',
        aspectRatio: '4-3'
    },
    {
        id: 3,
        image: require('../images/Tina_Scandal.png'),
        alt: 'Tina Karol Scandal',
        artist: 'Tina Karol',
        title: 'Scandal',
        director: 'Indy Hait',
        videoUrl: 'https://www.youtube.com/embed/6ljY-2dveL8',
        aspectRatio: '4-3'
    },
    {
        id: 4,
        image: require('../images/Tina_Ptica.png'),
        alt: 'Tina Karol',
        artist: 'Tina Karol',
        title: 'Power Of Height',
        director: 'Hindrek Maasik',
        videoUrl: 'https://www.youtube.com/embed/g-IYa-QQl-8',
        aspectRatio: '16-9'
    },
    {
        id: 5,
        image: require('../images/ViaGra_Monster.png'),
        alt: 'ViaGra',
        artist: 'ViaGra',
        title: "I'm In Love With A Monster",
        director: 'Hindrek Maasik',
        videoUrl: 'https://www.youtube.com/embed/8fVwK7yx0Xo',
        aspectRatio: '4-3'
    },
    // {
    //     id: 6,
    //     image: require('../images/Tina_1.jpg'),
    //     alt: 'Tina Karol',
    //     artist: 'Tina Karol',
    //     title: "I Won't Stop",
    //     director: 'Gloria FX',
    //     videoUrl: 'https://www.youtube.com/embed/3_28U9MP5PI',
    //     aspectRatio: '4-3'
    // },
    {
        id: 7,
        image: require('../images/Tina_Rain.jpg'),
        alt: 'Tina Karol',
        artist: 'Tina Karol',
        title: "To Wait Out",
        director: 'Stanislav Morozov',
        videoUrl: 'https://www.youtube.com/embed/kofjCoxrOrs',
        aspectRatio: '4-3'
    },
    // {
    //     id: 8,
    //     image: require('../images/korolev.jpg'),
    //     alt: 'Korolev',
    //     artist: 'Dmitry Korolev',
    //     title: 'The Sky To Us',
    //     director: 'Stanislav Morozov',
    //     videoUrl: 'https://www.youtube.com/embed/GjcNNCFBf-A',
    //     aspectRatio: '16-9'
    // },
    {
        id: 9,
        image: require('../images/TinaKarol_Blindfold.jpg'),
        alt: 'Tina Karol',
        artist: 'Tina Karol',
        title: 'Your Sins',
        director: 'Gloria FX',
        videoUrl: 'https://www.youtube.com/embed/S7wX6WM1EXI',
        aspectRatio: '4-3'
    },
    {
        id: 10,
        image: require('../images/mayak.jpg'),
        alt: 'KOD7',
        artist: 'KOD7',
        title: 'The Lighthouse',
        director: 'Viktor Vilks',
        videoUrl: 'https://www.youtube.com/embed/krMhlg0I4RM',
        aspectRatio: '4-3'
    },
    // {
    //     id: 11,
    //     image: require('../images/katya.png'),
    //     alt: 'Katya',
    //     artist: 'Katya',
    //     title: 'Autumn',
    //     director: 'Hindrek Maasik',
    //     videoUrl: 'https://www.youtube.com/embed/4HSaaL58irg',
    //     aspectRatio: '16-9'
    // },
    {
        id: 12,
        image: require('../images/sdatsya.jpg'),
        alt: 'Tina Karol',
        artist: 'Tina Karol',
        title: "You'll Always Have Time To Surrender",
        director: 'Hindrek Maasik',
        videoUrl: 'https://www.youtube.com/embed/kG46IzgdB0Y',
        aspectRatio: '4-3'
    },
    {
        id: 13,
        image: require('../images/still_love.jpg'),
        alt: 'Tina Karol',
        artist: 'Tina Karol',
        title: "I Still Love",
        director: 'Hindrek Maasik',
        videoUrl: 'https://www.youtube.com/embed/zqITG4BMwLU',
        aspectRatio: '4-3'
    },
    {
        id: 14,
        image: require('../images/Tina_Mnod.jpg'),
        alt: 'Tina Karol',
        artist: 'Tina Karol',
        title: "We Won't Stay Friends",
        director: 'Hindrek Maasik',
        videoUrl: 'https://www.youtube.com/embed/q7kapSyQg5s',
        aspectRatio: '4-3'
    },
    {
        id: 15,
        image: require('../images/proydet.jpg'),
        alt: 'Olga Makovetskaya',
        artist: 'Olga Makovetskaya',
        title: 'It Will Pass',
        director: 'Hindrek Maasik',
        videoUrl: 'https://www.youtube.com/embed/Qjf2BUyTfcE',
        aspectRatio: '16-9'
    },
    {
        id: 16,
        image: require('../images/tiodna.jpg'),
        alt: 'Boombox',
        artist: 'Boombox',
        title: "You're The Only One",
        director: 'Viktor Vilks',
        videoUrl: 'https://player.vimeo.com/video/88872867?h=4a3f127ac5',
        aspectRatio: '4-3'
    },
    {
        id: 17,
        image: require('../images/sneg.jpg'),
        alt: 'Olga Makovetskaya',
        artist: 'Olga Makovetskaya',
        title: 'The Snow',
        director: 'Hindrek Maasik',
        videoUrl: 'https://www.youtube.com/embed/T69hDTOUvLM',
        aspectRatio: '4-3'
    },
    // {
    //     id: 18,
    //     image: require('../images/jamala_osen.jpg'),
    //     alt: 'Jamala',
    //     artist: 'Jamala',
    //     title: 'Depends On You',
    //     director: 'Viktor Vilks',
    //     videoUrl: 'https://youtube.com/embed/yJLTgW-cxHc',
    //     aspectRatio: '16-9'
    // },
    {
        id: 19,
        image: require('../images/touchme.jpg'),
        alt: 'Kazaky',
        artist: 'Kazaky',
        title: "Touch Me",
        director: 'Hindrek Maasik',
        videoUrl: 'https://www.youtube.com/embed/4Cm9jZPQ_Cw',
        aspectRatio: '4-3'
    },
    {
        id: 20,
        image: require('../images/prishila.jpg'),
        alt: 'Tina Karol',
        artist: 'Tina Karol',
        title: "Winter Blizzard",
        director: 'Hindrek Maasik',
        videoUrl: 'https://www.youtube.com/embed/xlnGZihYHXU',
        aspectRatio: '4-3'
    },
    {
        id: 21,
        image: require('../images/brosay.jpg'),
        alt: 'Alina Grosu',
        artist: 'Alina Grosu',
        title: "Let Go",
        director: 'Hindrek Maasik',
        videoUrl: 'https://www.youtube.com/embed/2h3ToedfURc',
        aspectRatio: '4-3'
    }
]



function Works() {

    const [selectedWork, setSelectedWork] = useState(null);
    let videoPlayerRef = useRef();

    function handleWorkClick(work) {
        setSelectedWork(work);
        if (videoPlayerRef.current) {
            videoPlayerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Container className="bg-black content-spacing" fluid>
            {/* Video Player  */}
            {selectedWork && (
                <div ref={videoPlayerRef} className="video-player">
                    <iframe
                        title="Video Player"
                        width="100%"
                        height="100%"
                        src={selectedWork.videoUrl}
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            )}
            <div className="works-grid">
                <Row className="g-2">
                    {worksData.map((work) => (
                        <Col
                            key={work.id}
                            xs={12}
                            md={work.aspectRatio === '16-9' ? 12 : 6} // 16:9 works span 2 columns, others span 1 column
                            lg={work.aspectRatio === '16-9' ? 8 : 4} // 16:9 works span 2 columns, others span 1 column
                            xl={work.aspectRatio === '16-9' ? 8 : 4} // 16:9 works span 2 columns, others span 1 column
                        >
                            <Card
                                className={`text-white bg-black work-card ${work.aspectRatio === '16-9' ? 'work-16-9' : ''}`}
                                key={work.id}
                                onClick={() => handleWorkClick(work)}
                            >
                                <div className="work-image-container">
                                    <Card.Img
                                        variant
                                        src={work.image}
                                        alt={work.alt}
                                        className="work-image"
                                    />
                                    <div className="work-overlay">
                                        <div className="work-overlay-content">
                                            <div className='work-info'>
                                                <h4>{work.artist}</h4>
                                                <h6>{work.title}</h6>
                                            </div>
                                        </div>
                                        <h6>{work.director}</h6>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
}

export default Works; //exports Works to import 