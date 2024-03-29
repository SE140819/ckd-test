import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import CEO from '../../img/ceo.png';
import Boy from '../../img/boy.png';
import chuky from '../../img/Brand-10.png';
import thumbup from '../../img/thumbup.png';
import FloatinDiv from '../FloatingDiv/FloatingDiv';
import { motion } from 'framer-motion';

import { Introduction } from '../../../data/gioithieu';
const Intro = () => {
    // Transition
    const transition = { duration: 2, type: 'spring' };

    // context
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;

    return (
        <div className="Intro " id="Intro">
            <div className="i-left">
                <div className="i-name p-3">
                    <div className="text-blue-500 text-2xl font-bold">{Introduction.title}</div>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: Introduction.content,
                        }}
                    ></p>
                </div>
            </div>
            {/* right image side */}
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={CEO} alt="" width={200} />
                {/* animation */}
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    src=""
                    alt=""
                />
                {/*  */}

                {/* animation */}
                <motion.div
                    initial={{ left: '9rem', top: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatinDiv img={thumbup} text1={Introduction.position} />
                </motion.div>

                {/* <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div> */}
                <div
                    className="blur"
                    style={{
                        background: '#C1F5FF',
                        top: '17rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-9rem',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Intro;
