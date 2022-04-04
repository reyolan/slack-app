import LetterAvatar from "components/ui/letter-avatar";
import RowContainer from "components/ui/containers/row-container";
import Text from "components/ui/texts/text";

function UserCard({ letter, name }) {
  <RowContainer>
    <LetterAvatar letter={letter} />
    <Text>{name}</Text>
  </RowContainer>;
}

export default UserCard;
