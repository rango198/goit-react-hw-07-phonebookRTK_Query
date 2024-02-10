import { BtnItem, ListItem } from 'components/ContactsList/ContactsList.styled';
import { AiOutlineUserDelete } from 'react-icons/ai';

export const ListItemContact = ({ name, phone, img, id }) => {
  return (
    <ListItem>
      <span>{name}</span>
      <span>{phone}</span>
      <BtnItem type="button">
        <AiOutlineUserDelete />
        Delete
      </BtnItem>
    </ListItem>
  );
};
