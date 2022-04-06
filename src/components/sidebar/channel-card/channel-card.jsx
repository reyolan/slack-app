import styles from "./channel-card.module.css";
import LetterAvatar from "components/ui/letter-avatar";
import TopArrowContainer from "components/ui/containers/left-arrow-container";
import { getFirstTwoChars } from "utils/helpers";

function ChannelCard({ channelName, hoverName = "" }) {
  return (
    <div className={styles.channelCardContainer}>
      <LetterAvatar
        letter={getFirstTwoChars(channelName)}
        className={styles.icon}
      />
      <TopArrowContainer className={styles.arrow}>
        {hoverName ? hoverName : channelName}
      </TopArrowContainer>
    </div>
  );
}

export default ChannelCard;
