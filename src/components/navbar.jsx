import {useState} from 'react';
import {styles} from '../util/style.jsx';
import {navigationLinks} from '../util/constants.js';
import {close, logo, menu} from '../assets';

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const [active, setActive] = useState('home');

    const toggleHandler = () => setToggleNav(!toggleNav);
    const activeHandler = id => setActive(id);

    return (
        <div className={`w-full py-3 ${styles.flexBetween}`}>
            {/*logo*/}
            <img src={logo} alt={'logo'} className={'w-[50px] h-[45px] cursor-pointer'}/>
            <div className={`${styles.heading}`}>Cluster</div>

            {/*logo navigation link*/}
            <ul className={'list-none sm:flex hidden justify-end items-center flex-1'}>
                {navigationLinks.map((link, index) => (
                    <li key={index} className={`
                    ${index === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'}
                    ${active === link.id ? 'text-yellow-300' : 'text-white'}
                    font-normal cursor-pointer text-[16px] text-white hover:text-yellow-300 transition-all duration-300 
                    `}
                        onClick={() => activeHandler(link.id)}
                    >
                        {link.title}
                    </li>
                ))}
            </ul>

            {/* Navigation btn */}
            <div className={'sm:hidden flex flex-1 justify-end items-center'}>
                <img src={toggleNav ? close : menu}
                     alt={'icon'}
                     className={'w-[25px] h-[25px] object-contain'}
                     onClick={toggleHandler}
                />
                <div className={`${!toggleNav ? 'hidden' : 'flex'} p-6 absolute top-20
                right-0 left-0 my-2 w-full sidebar bg-black bg-black-gradient`}>
                    <ul className={'list-none flex justify-center items-center flex-1'}>
                        {navigationLinks.map((link, index) => (
                            <li key={index} className={`
                            ${index === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'}
                            ${active === link.id ? 'text-yellow-300' : 'text-white'}
                            font-normal cursor-pointer text-[16px] text-white hover:text-yellow-300 transition-all duration-300 
                            `}
                                onClick={() => activeHandler(link.id)}
                            >
                                {link.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;