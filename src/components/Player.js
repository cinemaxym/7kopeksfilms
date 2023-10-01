import Container from 'react-bootstrap/Container';

function Player() {
    return (
        <Container className="bg-black" fluid hidden>
            <div className='ratio ratio-16x9'>
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen fluid></iframe>
            </div>
        </Container>

    )
}

export default Player;