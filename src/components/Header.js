import Image from 'next/image';

export default function Header() {
    return (
        <div>
            <Image
                className='header-icon'
                src={require('../../public/images/footerImg.jpg')}
                alt='mountains'
            ></Image>
        </div>
    )
}