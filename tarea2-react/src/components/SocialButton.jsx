import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const SocialButton = ({ icon }) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} style={{color:"white", fontSize:"30px"}} />
    </div>
  );
};
export default SocialButton