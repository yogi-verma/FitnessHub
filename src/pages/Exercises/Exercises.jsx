import { Link } from 'react-router-dom';
import './Exercises.css'; // You can style the cards here
import backImg1 from '../../assets/backImg1.png';
import chestImg from '../../assets/chestImg.avif'
import lowerlegsImg from '../../assets/lowerLegsImg.jpg';
import upperlegsImg from '../../assets/upperLegsImg.jpeg'; 
import absImg from '../../assets/absImg.avif';
import upperArmsImg from '../../assets/upperArmsImg.jpeg'
import LowerArmsImg from '../../assets/lowerArmsImg.jpeg'


const bodyParts = [
  'back', 'chest', 'lower legs', 'upper legs', 'lower arms', 'upper arms', 'waist', 'shoulders', 'neck', 'cardio'
];

// Image mapping for each body part
const bodyPartImages = {
  back: backImg1,
  chest: chestImg,
  'lower legs': lowerlegsImg,
  'upper legs': upperlegsImg, // Update with correct images for each part
  'lower arms': LowerArmsImg, // Replace with actual image
  'upper arms': upperArmsImg, // Replace with actual image
  waist: backImg1, // Replace with actual image
  shoulders: chestImg, // Replace with actual image
  neck: upperlegsImg, // Replace with actual image
  cardio: absImg, // Replace with actual image
};

const Exercise = () => {
  return (
    <div className="exercise-container">
      <h1>Select a Body Part</h1>
      <div className="body-parts-grid">
        {bodyParts.map((part) => (
          <Link key={part} to={`/exercises/${part}`} className="body-part-card">
            <img className='img-logo' src={bodyPartImages[part]} alt={part} />
            <h3>{part}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Exercise;