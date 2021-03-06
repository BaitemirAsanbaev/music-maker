import classes from "./Songs.module.css";
import l from "../../../images/l.png"
import hbd from "../../../images/hbd.png"
import hp from "../../../images/hp.png"
import can from "../../../images/can.png"
import wm from "../../../images/wellerman.png"
import { Link } from "react-router-dom";
import { load } from "../../../redux/actions/notes";
import { useDispatch } from "react-redux";

//component
const Songs = () => {

  //dispatch constant
  const dispatch = useDispatch();

  //JSX
  return (<div className={classes.Songs}>
    
    <Link to="/" className={classes.link}>
      <div onClick={() => dispatch(load('deathnote'))} className={classes.song + " " + classes.l}>
        <div>
          <h3 className={classes.songTitle}>L's theme</h3>
          <span>Recomended tempo: 1/4</span>
        </div>
        <div className={classes.imgdiv}>
          <img alt="L" src={l} className={classes.lImg} />
        </div>
      </div>
    </Link>
    <Link to="/" className={classes.link}>
      <div onClick={() => dispatch(load('happybday'))} className={classes.song + " " + classes.hbd}>
        <div>
          <h3 className={classes.songTitle}>Happy birthday</h3>
          <span>Recomended tempo: 3/4</span>
        </div>
        <div className={classes.imgdiv}>
          <img alt="happy birthday" src={hbd} />
        </div>
      </div>
    </Link>
    <Link to="/" className={classes.link}>
      <div onClick={() => dispatch(load('harrypotter'))} className={classes.song + " " + classes.hp}>
        <div>
          <h3 className={classes.songTitle}>Harry Potter</h3>
          <span>Recomended tempo: 2/4</span>
        </div>
        <div className={classes.imgdiv}>
          <img alt="harry potter" src={hp} />
        </div>
      </div>
    </Link>
    <Link to="/" className={classes.link}>
      <div onClick={() => dispatch(load('cancan'))} className={classes.song + " " + classes.can}>
        <div>
          <h3 className={classes.songTitle}>Cancan</h3>
          <span>Recomended tempo: 2/4</span>
        </div>
        <div className={classes.imgdiv}>
          <img alt="cancan" src={can} />
        </div>
      </div>
    </Link>
    <Link to="/" className={classes.link}>
      <div onClick={() => dispatch(load('wellerman'))} className={classes.song + " " + classes.wm}>
        <div>
          <h3 className={classes.songTitle}>Wellerman</h3>
          <span>Recomended tempo: 1/4</span>
        </div>
        <div className={classes.imgdiv + " " + classes.wmg}>
          <img alt="wm" src={wm} />
        </div>
      </div>
    </Link>

  </div>);
}

export default Songs;