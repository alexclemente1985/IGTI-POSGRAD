import React from 'react';
import Lottie from 'react-lottie';
import './style.scss'

interface Props{
    animationData: any;
}

const LottieCard: React.FC<Props> = (props:Props) => {
  const {animationData} = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    renderSettings:{
      preserveAspectRatio: "xMidYMid slice"
    }
  }

    return (
    <div className="lottie-card">
        <Lottie options = {defaultOptions} height={200} width={200}/>
    </div>);
}

export default LottieCard;