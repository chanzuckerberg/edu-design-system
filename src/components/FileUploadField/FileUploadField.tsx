import clsx from 'clsx';
import { nanoid } from 'nanoid';
import React, { ReactNode, useState, useEffect } from 'react';
import styles from './FileUploadField.module.css';
import Button from '../Button/';
import FieldNote from '../FieldNote';
import Icon from '../Icon';
import Label from '../Label';
import LoadingIndicator from '../LoadingIndicator';
import TextInput from '../TextInput';
import TextList from '../TextList';
import TextListItem from '../TextListItem';

export interface Props {
  /**
   * String that describes a type of file that may be selected by the user
   * https://developer.mozilla.org/en-US/docs/Web/*HTML/Element/input/file#Unique_file_type_specifiers
   */
  acceptedFileTypes?: string;
  /**
   * Aria-describedby id string
   */
  ariaDescribedBy?: any;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Disables the field and prevents editing the contents
   */
  disabled?: boolean;
  /**
   * Drag and drop text
   */
  dragAndDropText?: string;
  /**
   * FieldNote
   * Used as helper text or error message
   */
  fieldNote?: string;
  /**
   * FieldNote
   * Used as helper text or error message
   */
  files?: any;
  /**
   * Toggles the visibility of the label. If hidden, the label text will still be accessible to assistive technologies
   */
  hideLabel?: boolean;
  /**
   * Name of SVG icon (i.e. caret-down, minus, warning)
   */
  iconName?: string;
  /**
   * HTML id for the component
   */
  id?: any;
  /**
   * Gives a hint as to the type of data needed for text input
   */
  inputMode?:
    | 'search'
    | 'text'
    | 'email'
    | 'url'
    | 'tel'
    | 'none'
    | 'numeric'
    | 'decimal';
  /**
   * Error prop that can be passed into the field
   */
  isError?: boolean;
  /**
   * HTML label text
   */
  label?: string;
  /**
   * Slot for node to appear directly after field label. Typically used to include a Toolip
   */
  labelAfter?: ReactNode;
  /**
   * Maximum number of files to allow
   */
  maxFiles?: number;
  /**
   * Maximum file size in bytes
   */
  maxFileSize?: number;
  /**
   * Max file size error text
   */
  maxFileSizeErrorText?: string;
  /**
   * Multiple is a boolean to allow multiple files to be uploaded
   */
  multiple?: boolean;
  /**
   * HTML name attribute for the input
   */
  name?: string;
  /**
   * Function that runs on change of the input
   */
  onChange?: (e) => void;
  /**
   * String for the optional label. By default it is '(optional)'
   */
  optionalLabel?: string;
  /**
   * Placeholder attribute for input. Note: placeholder should be used sparingly
   */
  placeholder?: string;
  /**
   * Toggles the form control's interactivity. When `readOnly` is set to `true`, the form control is not interactive
   */
  readOnly?: boolean;
  /**
   * String for remove/x button text (for screen readers only) to remove file
   */
  removeFileButtonText?: string;
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required?: boolean;
  /**
   * String for the required label to add additional information if needed.
   */
  requiredLabel?: string;
  /**
   * String to denote the statusLabel of the upload
   */
  statusLabel?: 'uploading' | 'success' | 'error';
  /**
   * Value passed down from higher levels for initial state
   */
  value?: string;
}

/**
 * Primary UI component for user interaction
 */
export const FileUploadField: React.FC<Props> = ({
  acceptedFileTypes,
  ariaDescribedBy,
  className,
  disabled,
  dragAndDropText = 'Drag and drop files here or click to choose files',
  id,
  files,
  label = 'Attach file',
  name,
  placeholder,
  readOnly,
  iconName,
  onChange,
  hideLabel,
  inputMode,
  multiple,
  required,
  labelAfter,
  fieldNote = 'Attach up to 3 files (2MB max per file). Accepted file types: .doc, .docx, .jpeg, .png, .xlsx, .xls, .pdf, .txt, and .csv.',
  isError,
  optionalLabel,
  requiredLabel,
  maxFiles,
  maxFileSize,
  maxFileSizeErrorText = 'File size should not exceed 2 MB. Please choose another file.',
  removeFileButtonText = 'Remove file',
  statusLabel,
  ...other
}) => {
  const [filesState, setFilesState] = useState(files);
  const [isErrorState, setIsErrorState] = useState(isError);
  const [isDragging, setIsDragging] = useState(false);
  const [fieldNoteState, setFieldNoteState] = useState(fieldNote);

  const [idVar, setId] = useState();
  const [ariaDescribedByVar, setAriaDescribedBy] = useState();

  useEffect(() => {
    setId(id || nanoid());
    if (fieldNote) {
      setAriaDescribedBy(ariaDescribedBy || nanoid());
    }
  }, [ariaDescribedBy, fieldNote, id]);

  function formatBytes(bytes, decimals) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  function onDragOver() {
    if (!isDragging) {
      setIsDragging(true);
    }
  }

  function onDragEnd() {
    if (isDragging) {
      setIsDragging(false);
    }
  }

  function onFileRemove(id) {
    const files = filesState;
    const filesToUpdate = files.filter((file) => file.id !== id);
    if (isErrorState === true) {
      setIsErrorState(false);
    }
    setFilesState(filesToUpdate);
    if (onChange) {
      onChange(filesToUpdate);
    }
  }

  function onFileInputChange(e) {
    const fileObjects = e.target.files;
    if (!fileObjects) return;

    /*
     * 1. Copy existing files from state to a new variable
     * 2. Append new files to this new array
     * 3. If there is a maxFiles limit and if the more files have been selected than the max,
     *    remove those over the limit from the array.
     * 4. Set new state with existing and newly selected files
     */

    /* 1 */
    let files = [...filesState];
    let isError;

    /* 2 */
    fileObjects.forEach((file) => {
      if (maxFileSize && file.size >= maxFileSize) {
        setFieldNoteState(maxFileSizeErrorText);
        setIsErrorState(true);
      } else {
        files.push({
          fileObject: file,
          id: nanoid(),
        });
        setIsErrorState(isError);
      }
    });

    /* 3 */
    if (files.length >= maxFiles) {
      files = files.splice(0, maxFiles);
    }

    /* 4 */
    setFilesState(files);

    if (onChange) {
      onChange(files);
    }
  }

  function renderFileListIconOrRemoveButton(file) {
    switch (statusLabel) {
      case 'success':
        return <Icon name="caret-down" />;
      case 'uploading':
        return (
          <LoadingIndicator
            className={styles['file-upload-field__loading-indicator']}
          />
        );

      default:
        return (
          <Button
            iconName="x"
            iconPosition="before"
            aria-label={removeFileButtonText}
            variant="bare"
            onClick={() => {
              onFileRemove(file.id);
            }}
          />
        );
    }
  }

  const isDisabled = disabled || (filesState && filesState >= maxFiles);

  const componentClassName = clsx(styles['file-upload-field'], className, {
    [styles['eds-is-error']]: isErrorState,
    [styles['eds-is-disabled']]: isDisabled,
  });

  const hitAreaClassName = clsx(styles['file-upload-field__hit-area'], {
    'file-upload-field__hit-area--drag-over': isDragging,
  });
  return (
    <div className={componentClassName}>
      <Label
        className={styles['file-upload-field__label']}
        htmlFor={idVar}
        text={label}
        hideLabel={hideLabel}
        labelAfter={labelAfter}
        required={required}
        optionalLabel={optionalLabel}
        requiredLabel={requiredLabel}
      />

      <div className={styles['file-upload-field__body']}>
        <div
          className={hitAreaClassName}
          onDragOver={() => onDragOver()}
          onDragEnd={() => onDragEnd()}
          onDragLeave={() => onDragEnd()}
          onDrop={() => onDragEnd()}
        >
          <TextInput
            className={styles['file-upload-field__input']}
            type="file"
            id={idVar}
            name={name}
            value=""
            placeholder={placeholder}
            onChange={(e) => onFileInputChange(e)}
            inputMode={inputMode}
            disabled={isDisabled}
            readOnly={readOnly}
            required={required}
            ariaDescribedBy={ariaDescribedByVar}
            aria-invalid={!!isError}
            multiple={multiple}
            accept={acceptedFileTypes}
            {...other}
          />
          <div className={styles['file-upload-field__instructions']}>
            {dragAndDropText}
          </div>
        </div>
      </div>

      {fieldNote && (
        <FieldNote
          className={styles['file-upload-field__note']}
          id={ariaDescribedByVar}
        >
          {fieldNoteState}
        </FieldNote>
      )}

      {filesState && (
        <TextList className={styles['file-upload-field__filelist']}>
          {filesState.map((file) => {
            return (
              <TextListItem
                className={styles['file-upload-field__filelist-item']}
                key={`file-upload-field__filelist-item-key-${file.id}`}
              >
                <span className="file-upload-field__filelist-item-data file-upload-field__filelist-item-name">
                  {file.fileObject.name}
                </span>
                <span className="file-upload-field__filelist-item-data file-upload-field__filelist-item-size">
                  {formatBytes(file.fileObject.size, 1)}
                </span>
                {renderFileListIconOrRemoveButton(file)}
              </TextListItem>
            );
          })}
        </TextList>
      )}
    </div>
  );
};
