import { useEffect } from 'react';
import {
  ButtonClose,
  ButtonDelete,
  IMG,
  ModalContact,
  WrapDiv,
} from './Modal.styled';

import { ModalForm } from 'components/ModalForm/ModalForm';
import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'store/redux/contact/contactAPI';
import { toast } from 'react-hot-toast';

export const Modal = ({
  id,
  name,
  phone,
  image,
  address,
  onClose,
  handleDeleteContact,
}) => {
  const closeModal = ({ currentTarget, target, code }) => {
    if (currentTarget === target || code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const [updateContact] = useUpdateContactMutation();

  const handleUpdateContact = async values => {
    try {
      await updateContact({ id, ...values });
      toast.success('Контак оновлений');
      onClose();
    } catch (error) {
      toast.error('Упс сталася помилка при оновлені');
      console.log(error);
    }
  };

  return (
    <ModalContact onClick={closeModal}>
      <ButtonClose type="button" onClick={onClose}>
        Close
      </ButtonClose>
      <WrapDiv>
        <IMG src={image} alt={name} />
        <div>
          <ModalForm
            initialValues={{
              name: name,
              phone: phone,
              address: address,
            }}
            onSubmit={handleUpdateContact}
          />
        </div>
      </WrapDiv>
      <ButtonDelete type="button" onClick={() => handleDeleteContact(id)}>
        Delete
      </ButtonDelete>
    </ModalContact>
  );
};
