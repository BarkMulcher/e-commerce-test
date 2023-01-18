import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='page-footer font-small blue pt-4'>
            <div id='icons' className='container-fluid text-center text-md-left'>
                <div className='row'>
                    <div className='col align-self-center'>
                        <a href="https://barkmulcher.github.io/e-commerce-test">
                            <Image
                                className='footer-icon'
                                src={require('../../public/images/footerImg.jpg')}
                                alt='footer image'
                            ></Image>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}