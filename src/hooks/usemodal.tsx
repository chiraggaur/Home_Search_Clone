import {useState} from 'react';

/**
 * Types for available modals in the application
 */
export type ModalType = 'profile' | 'account';

/**
 * Custom hook for managing modal state
 * @returns An object containing modal state and control functions
 */
export const useModal = () => {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);

  /**
   * Opens the specified modal
   * @param modalType - The type of modal to open
   */
  const openModal = (modalType: ModalType) => {
    setActiveModal(modalType);
  };

  /**
   * Closes the currently active modal
   */
  const closeModal = () => {
    setActiveModal(null);
  };

  /**
   * Opens the account modal (convenience method)
   */
  const openAccountModal = () => {
    setActiveModal('account');
  };

  /**
   * Toggles the specified modal
   * @param modalType - The type of modal to toggle
   */
  const toggleModal = (modalType: ModalType) => {
    setActiveModal(current => (current === modalType ? null : modalType));
  };

  return {
    // State
    activeModal,
    isProfileModalOpen: activeModal === 'profile',
    isAccountModalOpen: activeModal === 'account',

    // Actions
    openModal,
    closeModal,
    openAccountModal,
    toggleModal,

    // Aliases for specific modals
    openProfileModal: () => openModal('profile'),
    toggleProfileModal: () => toggleModal('profile'),
    toggleAccountModal: () => toggleModal('account'),
  };
};

// Type export for the hook's return type
export type UseModalReturn = ReturnType<typeof useModal>;
