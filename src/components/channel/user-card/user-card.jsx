import LetterAvatar from "components/ui/letter-avatar";
import RowContainer from "components/ui/containers/row-container";

function UserCard({ letter, name }) {
  <RowContainer>
    <LetterAvatar letter={letter} />
    <p>{name}</p>
  </RowContainer>;
}

export default UserCard;
