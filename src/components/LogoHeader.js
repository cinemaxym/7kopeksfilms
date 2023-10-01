import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Logo from '../images/7kks_logo.png'

function LogoHeader() {
    return (
        <Container className="bg-black" fluid>
            <a href='/'>
                <Image src={Logo} className='' fluid width="20%" height="auto" />
            </a>
        </Container>
    )

}

export default LogoHeader;