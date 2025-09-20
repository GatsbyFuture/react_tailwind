import {styles} from '../util/style.jsx';
import {artificial} from '../assets/index.js';
import Button from './button.jsx';

const Home = () => {
    return (
        <section id={'home'} className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            {/*Information*/}
            <div className={`flex-1 ${styles.flexStart} flex-col xl:p-0 sm:px-16 px-6`}>
                {/* Discount information*/}
                <div
                    className={'flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient'}>
                    <p className={'font-bold pr-2 text-white'}>%</p>
                    <p className={`${styles.paragraph} text-white`}>
                        <span className={'text-white'}>20%</span> chegirma <span
                        className={'text-white'}> 1 Oylik</span> xisob uchun
                    </p>
                </div>

                {/* Title*/}
                <div className={'w-full'}>
                    <h1 className={`${styles.heading1}`}>
                        Yangi Avlod <br/> <span className={'text-gradient'}>Ishlash Usuli</span>
                    </h1>
                </div>

                {/* Description*/}
                <div className={`${styles.paragraph} mt-5 max-w-[550px] text-white`}>
                    Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum
                    dolor,
                    ipsum dolor ipsum dolor ipsum dolor v ipsum dolor
                </div>

                {/*Getting Started*/}
                <Button styles={'mt-5'}/>

                <div className={'absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'}/>
                <div className={'absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'}/>
                <div className={'absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 blue__gradient'}/>
            </div>
            {/*Animation image*/}
            <div className={`flex-1 ${styles.flexStart} md:my-0 my-10 relative`}>
                <img src={artificial} alt={'robot'} className={'w-[100%] h-[100%] relative z-10 rounded-sm'}/>
            </div>
        </section>
    )
}

export default Home;