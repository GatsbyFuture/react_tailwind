import {styles} from './util/style';
import {Navbar, Home} from './components';

export default function App() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.container}`}>
                    <Navbar/>
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.container}`}>
                    <Home/>
                </div>
            </div>
        </div>
    )
}