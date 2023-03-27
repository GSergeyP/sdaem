import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { redirectState } from "../../../redux/pageSlice";

const Redirect = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  let { CITY } = useParams(); 

  useEffect(() => {
    if(CITY) navigate(`../../sdaem/rooms/${CITY}`);
    else {
      dispatch(redirectState(true));
      navigate('../../sdaem/rooms/&/&/&/&/&/&/&');
    }
  }, [CITY, dispatch, navigate])
  
  return(<></>)
}

export default Redirect;