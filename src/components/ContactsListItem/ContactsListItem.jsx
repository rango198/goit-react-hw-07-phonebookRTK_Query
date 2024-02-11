import { BtnItem, ListItem } from 'components/ContactsList/ContactsList.styled';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { useDeleteContactMutation } from 'store/redux/contact/contactAPI';

export const ListItemContact = ({ name, phone, id, image, address }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteContact = async () => {
    try {
      await deleteContact(id);
      toast.success('Контакт видалено', {
        style: {
          backgroundColor: 'red',
          color: 'white',
        },
      });
    } catch (error) {
      toast.error('Помилка при видаленні контакту');
      console.log(error);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ListItem>
      <span onClick={() => handleOpenModal()}>{name}</span>
      <span>{phone}</span>
      <BtnItem
        type="button"
        onClick={() => handleDeleteContact(id)}
        disabled={isLoading}
      >
        {isLoading && <Loader size={12} />}
        Delete
        <AiOutlineUserDelete />
      </BtnItem>
      {isModalOpen && (
        <Modal
          id={id}
          name={name}
          phone={phone}
          image={image}
          address={address}
          onClose={handleCloseModal}
          handleDeleteContact={handleDeleteContact}
        />
      )}
    </ListItem>
  );
};
