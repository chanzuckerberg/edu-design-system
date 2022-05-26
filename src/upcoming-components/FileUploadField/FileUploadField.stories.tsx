import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { FileUploadField, Props } from './FileUploadField';

export default {
  title: 'Organisms/Forms/FileUploadField',
  component: FileUploadField,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const files = [
  {
    fileObject: {
      name: 'image-file.png',
      lastModified: 1580422308200,
      size: 2497,
      type: 'image/png',
    },
    id: '1',
  },
  {
    fileObject: {
      name: 'yet-another-image-file.png',
      lastModified: 1580422308800,
      size: 121197,
      type: 'image/png',
    },
    id: '2',
  },
  {
    fileObject: {
      name: 'a-really-long-name-csv-file-9b35ddb2-4276-4d7f-a34b-e95b4620d8c3.csv',
      lastModified: 1580422208800,
      size: 900,
      type: 'text/csv',
    },
    id: '3',
  },
];

const Template: Story<Props> = (args) => <FileUploadField {...args} />;

export const Default = Template.bind({});
Default.args = {
  files: files,
  name: 'fild-upload-field-1',
  required: true,
  fieldNote:
    'Attach a file (2MB max). Accepted file types: .doc, .docx, .jpeg, .png, .xlsx, .xls, .pdf, .txt, and .csv.',
};

export const DefaultWithMultipleFiles = Template.bind({});
DefaultWithMultipleFiles.args = {
  files: files,
  name: 'fild-upload-field-1',
  multiple: true,
  fieldNote:
    'Attach files (2MB max per file). Accepted file types: .doc, .docx, .jpeg, .png, .xlsx, .xls, .pdf, .txt, and .csv.',
};

export const Uploading = Template.bind({});
Uploading.args = {
  files: files,
  statusLabel: 'uploading',
  name: 'fild-upload-field-1',
  multiple: true,
};

export const Success = Template.bind({});
Success.args = {
  files: files,
  statusLabel: 'success',
  name: 'fild-upload-field-1',
  multiple: true,
};

export const Error = Template.bind({});
Error.args = {
  files: files,
  statusLabel: 'error',
  isError: true,
  fieldNote: 'Sorry, something went wrong.',
  name: 'fild-upload-field-1',
  multiple: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  files: files,
  disabled: true,
  name: 'fild-upload-field-1',
  label: 'Attach files',
};

export const MaximumFiles = Template.bind({});
MaximumFiles.args = {
  files: files,
  name: 'fild-upload-field-1',
  multiple: true,
  maxFiles: 3,
  fieldNote:
    'Attach up to 3 files (2MB max per file). Accepted file types: .doc, .docx, .jpeg, .png, .xlsx, .xls, .pdf, .txt, and .csv.',
};

export const FileFormatLimit = Template.bind({});
FileFormatLimit.args = {
  files: files,
  acceptedFileTypes: '.jpg, .jpeg, .png',
  name: 'fild-upload-field-1',
  required: true,
  multiple: true,
  maxFiles: 3,
  fieldNote:
    'Attach up to 3 files (2MB max per file). Accepted file types: .jpg, .jpeg, and .png',
};

export const FileSizeLimit = Template.bind({});
FileSizeLimit.args = {
  files: files,
  name: 'fild-upload-field-1',
  label: 'Attach file',
  fieldNote:
    'Attach up to 3 files (1MB max per file). Accepted file types: .doc, .docx, .jpeg, .png, .xlsx, .xls, .pdf, .txt, and .csv.',
  maxFileSize: 1000000,
  maxFileSizeErrorText:
    'File size should not exceed 1 MB. Please choose another file.',
};
