import Image from './derp.png';
function Header() {
	return (
		<header>
			<img src={Image} alt='trollface derp' />
			<p>Meme Generator</p>
		</header>
	);
}

export default Header;
