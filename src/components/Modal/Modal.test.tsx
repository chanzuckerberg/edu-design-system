import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/testing-react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Modal from './Modal';
import * as stories from './Modal.stories';
import '../../../jest/helpers/removeModalTransitionStylesJestSerializer';

// Get only the stories we want to write normal, non-snapshot tests for.
const { Default, Large, Small, DefaultInteractive } = composeStories(stories);

// Get only the stories we want to generate snapshot tests for.
const storiesToSnapshot = { ...stories };
['Default', 'Large', 'Small'].forEach((name) => {
  delete storiesToSnapshot[name];
});

// Required because the modal uses react portal under the hood.
require('intersection-observer');

describe('Modal', () => {
  it('renders the Default story', () => {
    const { container } = render(<Default />);
    console.log(stories);
    expect(container.firstChild).toMatchSnapshot(); // eslint-disable-line testing-library/no-node-access
  });

  it('renders the Large story', () => {
    const { container } = render(<Large />);
    expect(container.firstChild).toMatchSnapshot(); // eslint-disable-line testing-library/no-node-access
  });

  it('renders the Small story', () => {
    const { container } = render(<Small />);
    expect(container.firstChild).toMatchSnapshot(); // eslint-disable-line testing-library/no-node-access
  });

  generateSnapshots(storiesToSnapshot, {
    getElement: async () => {
      const openModalButton = await screen.findByRole('button', {
        name: 'Open the modal',
      });
      fireEvent.click(openModalButton);
      const modal = await screen.findByRole('dialog');
      return modal;
    },
  });

  it('is initially closed', () => {
    render(<DefaultInteractive />);
    expect(screen.queryByRole('dialog')).toBeFalsy();
  });

  it('shows the modal when the open modal button is clicked', async () => {
    render(<DefaultInteractive />);
    const openModalButton = await screen.findByRole('button', {
      name: 'Open the modal',
    });
    fireEvent.click(openModalButton);
    const modal = await screen.findByRole('dialog');
    expect(modal).toBeTruthy();
  });

  it('closes the modal on close button click', async () => {
    render(<DefaultInteractive />);
    const openModalButton = await screen.findByRole('button', {
      name: 'Open the modal',
    });
    fireEvent.click(openModalButton);
    const closeButton = await screen.findByRole('button', {
      name: 'close modal',
    });
    fireEvent.click(closeButton);
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).toBeFalsy();
    });
  });

  it('closes the modal on ESC key press', async () => {
    render(<DefaultInteractive />);
    const openModalButton = await screen.findByRole('button', {
      name: 'Open the modal',
    });
    fireEvent.click(openModalButton);
    const modal = await screen.findByRole('dialog');
    fireEvent.keyDown(modal, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    });
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).toBeFalsy();
    });
  });

  it('does not throw an error if modal uses <Modal.Title>', () => {
    const modalWithTitle = (
      <Modal
        onClose={
          () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
        }
        open={true}
      >
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content.</Modal.Body>
        <Modal.Footer>Modal footer content.</Modal.Footer>
      </Modal>
    );
    const renderMethod = () => {
      render(modalWithTitle);
    };

    expect(renderMethod).not.toThrow(Error);
  });

  it('does not throw an error if modal uses aria-label', () => {
    const modalWithAriaLabel = (
      <Modal
        ariaLabel="aria label"
        onClose={
          () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
        }
        open={true}
      >
        <Modal.Header>Modal Title</Modal.Header>
        <Modal.Body>Modal body content.</Modal.Body>
        <Modal.Footer>Modal footer content.</Modal.Footer>
      </Modal>
    );
    const renderMethod = () => {
      render(modalWithAriaLabel);
    };

    expect(renderMethod).not.toThrow(Error);
  });

  it('does throw an error if modal does not use <Modal.Title> or aria-label', () => {
    const modalWithoutTitleOrAriaLabel = (
      <Modal
        onClose={
          () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
        }
        open={true}
      >
        <Modal.Header>Modal Title</Modal.Header>
        <Modal.Body>Modal body content.</Modal.Body>
        <Modal.Footer>Modal footer content.</Modal.Footer>
      </Modal>
    );
    const renderMethod = () => {
      render(modalWithoutTitleOrAriaLabel);
    };

    expect(renderMethod).toThrow(Error);
  });
});
