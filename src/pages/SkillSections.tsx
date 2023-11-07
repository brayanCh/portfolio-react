import {ParallaxLayer} from '@react-spring/parallax';
import {useTranslation} from 'react-i18next';
import mobileReactNative from '../media/Iphone-react-native.jpg';

const styles = {
    frontend_text: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        top: 0,
        left: 0,
        background: '#0f00',
    } as React.CSSProperties,
    right_image: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        right: 0,
        top: 0,
        background: '#f000',
    } as React.CSSProperties,
    align_center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        background: '#00f0',
    }
};

const ParallaxSection = () => {

    //@ts-ignore
    const { t } = useTranslation();

    return (
        <div className='container-fluid'>
            <p className="text-frontend">
                {`${t('parallax.frontend.first')} `}
                <em className="text-frontend-em">{`${t('parallax.frontend.second')} `}</em>
            </p>
            <div style={styles.right_image}>
                <img src={mobileReactNative} alt="React Native" className="img-fluid" />
            </div>
        </div>
    );
};

/*
                    {`${t('parallax.frontend.third')} `}
                    <em className="text-frontend-em">{`${t('parallax.frontend.fourth')} `}</em>
                    {`${t('parallax.frontend.five')} `}
 */
export default ParallaxSection;
