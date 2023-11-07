import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import {useTranslation} from 'react-i18next';

const ParallaxSection = () => {

    //@ts-ignore
    const { t } = useTranslation();

    return (
        <>
            <div className="parallax-section">
                <Parallax pages={2}>
                    <ParallaxLayer offset={0} speed={0.5}>
                        <div className="text-frontend-section">
                            <p className="text-frontend">{t('parallax.frontend.first')}</p>

                        </div>
                    </ParallaxLayer>
                </Parallax>
            </div>
            <div className="content-container shadow">
            </div>
        </>
    );
};

export default ParallaxSection;
