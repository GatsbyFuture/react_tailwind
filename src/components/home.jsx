import {styles} from '../util/style.jsx';

const Home = () => {
    return (
        <section id={'home'} className={'flex md:flex-row flex-col'}>
            {/*Information*/}
            <div className={`flex-1 ${styles.flexStart} flex-col xl:p-0 sm:px-16 px-6`}>
                {/* Dicount information*/}
                <div className={''}></div>

                {/* Title*/}
                <div className={''}></div>

                {/* Description*/}
                <div className={''}></div>
            </div>
            {/*Animation image*/}
            <div className={'flex'}></div>
        </section>
    )
}

export default Home;