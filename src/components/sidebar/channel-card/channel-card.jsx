import styles from "./channel-card.module.css";
import LetterAvatar from "components/ui/letter-avatar";
import LeftArrowContainer from "components/ui/containers/left-arrow-container";
import { getFirstTwoChars } from "utils/helpers";

function ChannelCard({ channelName, hoverName = "" }) {
  return (
    <div className={styles.channelCardContainer}>
      <LetterAvatar
        letter={getFirstTwoChars(channelName)}
        className={styles.icon}
      />
      <LeftArrowContainer className={styles.arrow}>
        {hoverName ? hoverName : channelName}
      </LeftArrowContainer>
    </div>
  );
}

export default ChannelCard;
