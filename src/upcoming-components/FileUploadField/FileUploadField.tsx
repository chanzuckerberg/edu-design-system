import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';
import { useUID, useUIDSeed } from 'react-uid';
import styles from './FileUploadField.module.css';
import Button from '../../components/Button';
import FieldNote from '../../components/FieldNote';
import Icon, { IconName } from '../../components/Icon';
import Label from '../../components/Label';
import TextInput from '../../components/TextInput';
import LoadingIndicator from '../LoadingIndicator';
import TextList from '../TextList';
import TextListItem from '../TextListItem';

// Remove native properties from TS interface (https://github.com/microsoft/TypeScript/blob/c388222b29228a572b4e3c9ca907863d0b1945c6/lib/lib.dom.d.ts#L2537)
// that don't need to be passed or saved
type FileInfo = Omit<
  File,
  'arrayBuffer' | 'slice' | 'stream' | 'text' | 'webkitRelativePath'
>;
type FileWithId = { id: string; fileObject: FileInfo };
export interface Props {
  /**
   * String that describes a type of file that may be selected by the user
   * https://developer.mozilla.org/en-US/docs/Web/*HTML/Element/input/file#Unique_file_type_specifiers
   */
  acceptedFileTypes?: string;
  /**
   * aria-describedby id string
   */
  'aria-describedby'?: string;
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
  files?: Array<FileWithId>;
  /**
   * Toggles the visibility of the label. If hidden, the label text will still be accessible to assistive technologies
   */
  hideLabel?: boolean;
  /**
   * Name of SVG icon (i.e. caret-down, minus, warning)
   */
  iconName?: IconName;
  /**
   * HTML id for the component
   */
  id?: string;
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
   * TODO: improve `any` type
   */
  onChange?: (e: any) => void;
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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {FileUploadField} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const FileUploadField = ({
  acceptedFileTypes,
  'aria-describedby': ariaDescribedBy,
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
}: Props) => {
  const [filesState, setFilesState] = useState<Array<FileWithId>>(files || []);
  const [isErrorState, setIsErrorState] = useState(isError);
  const [isDragging, setIsDragging] = useState(false);
  const [fieldNoteState, setFieldNoteState] = useState(fieldNote);

  const generatedId = useUID();
  const idVar = id || generatedId;

  const generatedAriaDescribedById = useUID();
  const ariaDescribedByVar = fieldNote
    ? ariaDescribedBy || generatedAriaDescribedById
    : undefined;

  function formatBytes(bytes: number, decimals: number) {
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

  function onFileRemove(id: string) {
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

  // TODO: improve `any` type
  function onFileInputChange(e: any, getUID: (file: File) => string) {
    const fileObjects = e.target.files;
    if (!fileObjects) return;
    const fileArray: Array<File> = Array.from(fileObjects);

    /*
     * 1. Copy existing files from state to a new variable
     * 2. Append new files to this new array
     * 3. If there is a maxFiles limit and if the more files have been selected than the max,
     *    remove those over the limit from the array.
     * 4. Set new state with existing and newly selected files
     */

    /* 1 */
    let files = [...filesState];

    /* 2 */
    fileArray.forEach((file: File) => {
      if (maxFileSize && file.size >= maxFileSize) {
        setFieldNoteState(maxFileSizeErrorText);
        setIsErrorState(true);
      } else {
        files.push({
          fileObject: file,
          id: getUID(file),
        });
        setIsErrorState(false);
      }
    });

    /* 3 */
    if (maxFiles && files.length >= maxFiles) {
      files = files.splice(0, maxFiles);
    }

    /* 4 */
    setFilesState(files);

    if (onChange) {
      onChange(files);
    }
  }

  function renderFileListIconOrRemoveButton(file: FileWithId) {
    switch (statusLabel) {
      case 'success':
        return <Icon name="expand-more" purpose="decorative" />;
      case 'uploading':
        return (
          <LoadingIndicator
            className={styles['file-upload-field__loading-indicator']}
            size="1rem"
          />
        );

      default:
        return (
          <Button
            onClick={() => {
              onFileRemove(file.id);
            }}
            variant="icon"
          >
            <Icon
              name="close"
              purpose="informative"
              title={removeFileButtonText}
            />
          </Button>
        );
    }
  }

  const isDisabled =
    disabled || !!(filesState && maxFiles && filesState.length >= maxFiles);
  const getUID = useUIDSeed();

  const componentClassName = clsx(
    styles['file-upload-field'],
    className,
    isErrorState && styles['eds-is-error'],
    isDisabled && styles['eds-is-disabled'],
  );

  const hitAreaClassName = clsx(
    styles['file-upload-field__hit-area'],
    isDragging && 'file-upload-field__hit-area--drag-over',
  );
  return (
    <div className={componentClassName}>
      <Label
        className={styles['file-upload-field__label']}
        hideLabel={hideLabel}
        htmlFor={idVar}
        labelAfter={labelAfter}
        optionalLabel={optionalLabel}
        required={required}
        requiredLabel={requiredLabel}
        text={label}
      />

      <div className={styles['file-upload-field__body']}>
        <div
          className={hitAreaClassName}
          onDragEnd={() => onDragEnd()}
          onDragLeave={() => onDragEnd()}
          onDragOver={() => onDragOver()}
          onDrop={() => onDragEnd()}
        >
          <TextInput
            accept={acceptedFileTypes}
            aria-describedby={ariaDescribedByVar}
            aria-invalid={!!isError}
            className={styles['file-upload-field__input']}
            disabled={isDisabled}
            id={idVar}
            inputMode={inputMode}
            isError={isError}
            multiple={multiple}
            name={name}
            onChange={(e) => onFileInputChange(e, getUID)}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            type="file"
            value=""
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
          isError={isError}
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
