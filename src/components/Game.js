import React from 'react'; 
import {useDispatch} from 'react-redux'; 
import {loadDetail} from '../actions/detailAction'; 
import styled from 'styled-components'; 
import {motion} from 'framer-motion'; 
import {Link} from 'react-router-dom'; 
import {smallImage} from '../utils'; 
import {popUp} from '../animations'; 

const Game = ({ name, image, released, id }) => {

    const strinPathId = id.toString()

    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden'; 
        dispatch(loadDetail(id))
    }
    return(
        <StyledGame variants={popUp} initial='hidden' animate='show' layoutId={strinPathId} onClick={loadDetailHandler}>
            <Link to={`game/${id}`}>
                <motion.h3 layoutId={`title ${strinPathId}`}> {name} </motion.h3>
                <p> {released} </p>
                <motion.img 
                    layoutId={`ìmage ${strinPathId}`}
                    src={smallImage(image,640)} 
                    alt={name} 
                />
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh; 
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2); 
    text-align: center; 
    border-radius:1rem; 
    cursor: pointer;
    overflow:hidden; 
    img{
        width: 100%; 
        height:40vh; 
        object-fit:cover; 
        }
 `; 

export default Game; 