"use strict";(self.webpackChunk_chanzuckerberg_eds=self.webpackChunk_chanzuckerberg_eds||[]).push([[6694],{"./.storybook/util/filterTokens.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>filterTokens});const tokens_namespaceObject=JSON.parse('{"eds-font-family-primary":"\'Graphik\', sans-serif","eds-font-family-secondary":"\'Mint Grotesk V1.1\', sans-serif","eds-font-size-11":"0.6875rem","eds-font-size-12":"0.75rem","eds-font-size-14":"0.875rem","eds-font-size-16":"1rem","eds-font-size-18":"1.125rem","eds-font-size-20":"1.25rem","eds-font-size-22":"1.375rem","eds-font-size-24":"1.5rem","eds-font-size-28":"1.75rem","eds-font-size-32":"2rem","eds-font-size-40":"2.5rem","eds-font-size-base":"16px","eds-font-weight-light":"400","eds-font-weight-medium":"500","eds-font-weight-bold":"600","eds-letter-spacing-sm":"0.5px","eds-typography-preset-001":"var(--eds-font-weight-medium) 2.5rem/1.2 var(--eds-font-family-primary)","eds-typography-preset-001-light":"var(--eds-font-weight-light) 2.5rem/1.2 var(--eds-font-family-primary)","eds-typography-preset-001-bold":"var(--eds-font-weight-bold) 2.5rem/1.2 var(--eds-font-family-primary)","eds-typography-preset-001-mobile":"var(--eds-font-weight-bold) 2rem/1.25 var(--eds-font-family-primary)","eds-typography-preset-002":"var(--eds-font-weight-medium) 2rem/1.25 var(--eds-font-family-primary)","eds-typography-preset-002-light":"var(--eds-font-weight-light) 2rem/1.25 var(--eds-font-family-primary)","eds-typography-preset-002-bold":"var(--eds-font-weight-bold) 2rem/1.25 var(--eds-font-family-primary)","eds-typography-preset-002-mobile":"var(--eds-font-weight-bold) 1.75rem/1.2857 var(--eds-font-family-primary)","eds-typography-preset-003":"var(--eds-font-weight-medium) 1.375rem/1.45454545 var(--eds-font-family-primary)","eds-typography-preset-003-light":"var(--eds-font-weight-light) 1.375rem/1.45454545 var(--eds-font-family-primary)","eds-typography-preset-003-bold":"var(--eds-font-weight-bold) 1.375rem/1.45454545 var(--eds-font-family-primary)","eds-typography-preset-003-mobile":"var(--eds-font-weight-bold) 1.25rem/1.4 var(--eds-font-family-primary)","eds-typography-preset-004":"var(--eds-font-weight-medium) 1.125rem/1.55555556 var(--eds-font-family-primary)","eds-typography-preset-004-light":"var(--eds-font-weight-light) 1.125rem/1.55555556 var(--eds-font-family-primary)","eds-typography-preset-004-bold":"var(--eds-font-weight-bold) 1.125rem/1.55555556 var(--eds-font-family-primary)","eds-typography-preset-005":"var(--eds-font-weight-medium) 1rem/1.5 var(--eds-font-family-primary)","eds-typography-preset-005-light":"var(--eds-font-weight-light) 1rem/1.5 var(--eds-font-family-primary)","eds-typography-preset-005-bold":"var(--eds-font-weight-bold) 1rem/1.5 var(--eds-font-family-primary)","eds-typography-preset-006":"var(--eds-font-weight-medium) 0.875rem/1.57142857 var(--eds-font-family-primary)","eds-typography-preset-006-light":"var(--eds-font-weight-light) 0.875rem/1.57142857 var(--eds-font-family-primary)","eds-typography-preset-006-bold":"var(--eds-font-weight-bold) 0.875rem/1.57142857 var(--eds-font-family-primary)","eds-typography-preset-007":"var(--eds-font-weight-medium) 0.875rem/1.28571429 var(--eds-font-family-primary)","eds-typography-preset-007-light":"var(--eds-font-weight-light) 0.875rem/1.28571429 var(--eds-font-family-primary)","eds-typography-preset-007-bold":"var(--eds-font-weight-bold) 0.875rem/1.28571429 var(--eds-font-family-primary)","eds-typography-preset-008":"var(--eds-font-weight-medium) 0.75rem/1.666666667 var(--eds-font-family-primary)","eds-typography-preset-008-light":"var(--eds-font-weight-light) 0.75rem/1.666666667 var(--eds-font-family-primary)","eds-typography-preset-008-bold":"var(--eds-font-weight-bold) 0.75rem/1.666666667 var(--eds-font-family-primary)","eds-typography-preset-009":"var(--eds-font-weight-medium) 0.75rem/1.333333333 var(--eds-font-family-primary)","eds-typography-preset-009-light":"var(--eds-font-weight-light) 0.75rem/1.333333333 var(--eds-font-family-primary)","eds-typography-preset-009-bold":"var(--eds-font-weight-bold) 0.75rem/1.333333333 var(--eds-font-family-primary)","eds-typography-preset-010":"var(--eds-font-weight-medium) 0.6875rem/1.272727272 var(--eds-font-family-primary)","eds-typography-preset-010-light":"var(--eds-font-weight-light) 0.6875rem/1.272727272 var(--eds-font-family-primary)","eds-typography-preset-010-bold":"var(--eds-font-weight-bold) 0.6875rem/1.272727272 var(--eds-font-family-primary)","eds-typography-preset-011":"var(--eds-font-weight-medium) 0.75rem/1.333333333 var(--eds-font-family-primary)","eds-typography-preset-011-light":"var(--eds-font-weight-light) 0.75rem/1.333333333 var(--eds-font-family-primary)","eds-typography-preset-011-bold":"var(--eds-font-weight-bold) 0.75rem/1.333333333 var(--eds-font-family-primary)","eds-typography-preset-012":"var(--eds-font-weight-medium) 0.6875rem/1.272727272 var(--eds-font-family-primary)","eds-typography-preset-012-light":"var(--eds-font-weight-light) 0.6875rem/1.272727272 var(--eds-font-family-primary)","eds-typography-preset-012-bold":"var(--eds-font-weight-bold) 0.6875rem/1.272727272 var(--eds-font-family-primary)","eds-typography-preset-secondary-001":"var(--eds-font-weight-medium) 2rem/1.25 var(--eds-font-family-secondary)","eds-typography-preset-secondary-001-light":"var(--eds-font-weight-light) 2rem/1.25 var(--eds-font-family-secondary)","eds-typography-preset-secondary-002":"var(--eds-font-weight-medium) 1.75rem/1.28571429 var(--eds-font-family-secondary)","eds-typography-preset-secondary-002-light":"var(--eds-font-weight-light) 1.75rem/1.28571429 var(--eds-font-family-secondary)","eds-typography-preset-secondary-003":"var(--eds-font-weight-medium) 1.25rem/1.4 var(--eds-font-family-secondary)","eds-typography-preset-secondary-003-light":"var(--eds-font-weight-light) 1.25rem/1.4 var(--eds-font-family-secondary)","eds-typography-preset-secondary-004":"var(--eds-font-weight-medium) 1rem/1.5 var(--eds-font-family-secondary)","eds-typography-preset-secondary-004-light":"var(--eds-font-weight-light) 1rem/1.5 var(--eds-font-family-secondary)","eds-typography-preset-secondary-005":"var(--eds-font-weight-medium) 0.875rem/1.57142857 var(--eds-font-family-secondary)","eds-typography-preset-secondary-005-light":"var(--eds-font-weight-light) 0.875rem/1.57142857 var(--eds-font-family-secondary)","eds-typography-preset-secondary-006":"var(--eds-font-weight-medium) 0.875rem/1.42857143 var(--eds-font-family-secondary)","eds-typography-preset-secondary-006-light":"var(--eds-font-weight-light) 0.875rem/1.42857143 var(--eds-font-family-secondary)","eds-typography-preset-secondary-007":"var(--eds-font-weight-medium) 0.75rem/1.66666667 var(--eds-font-family-secondary)","eds-typography-preset-secondary-007-light":"var(--eds-font-weight-light) 0.75rem/1.66666667 var(--eds-font-family-secondary)","eds-typography-preset-secondary-008":"var(--eds-font-weight-medium) 0.75rem/1.33333333 var(--eds-font-family-secondary)","eds-typography-preset-secondary-008-light":"var(--eds-font-weight-light) 0.75rem/1.33333333 var(--eds-font-family-secondary)","eds-typography-preset-secondary-mobile-001-light":"var(--eds-font-weight-light) 2rem/1.25 var(--eds-font-family-secondary)","eds-typography-preset-secondary-mobile-001":"var(--eds-font-weight-medium) 2rem/1.25 var(--eds-font-family-secondary)","eds-typography-preset-secondary-mobile-002-light":"var(--eds-font-weight-light) 1.75rem/1.28571429 var(--eds-font-family-secondary)","eds-typography-preset-secondary-mobile-002":"var(--eds-font-weight-medium) 1.75rem/1.28571429 var(--eds-font-family-secondary)","eds-typography-preset-secondary-mobile-003-light":"var(--eds-font-weight-light) 1.25rem/1.4 var(--eds-font-family-secondary)","eds-typography-preset-secondary-mobile-003":"var(--eds-font-weight-medium) 1.25rem/1.4 var(--eds-font-family-secondary)","eds-typography-preset-mobile-001-light":"var(--eds-font-weight-light) 2rem/1.25 var(--eds-font-family-primary)","eds-typography-preset-mobile-001":"var(--eds-font-weight-medium) 2rem/1.25 var(--eds-font-family-primary)","eds-typography-preset-mobile-001-bold":"var(--eds-font-weight-bold) 2rem/1.25 var(--eds-font-family-primary)","eds-typography-preset-mobile-002-light":"var(--eds-font-weight-light) 1.75rem/1.28571429 var(--eds-font-family-primary)","eds-typography-preset-mobile-002":"var(--eds-font-weight-medium) 1.75rem/1.28571429 var(--eds-font-family-primary)","eds-typography-preset-mobile-002-bold":"var(--eds-font-weight-bold) 1.75rem/1.28571429 var(--eds-font-family-primary)","eds-typography-preset-mobile-003-light":"var(--eds-font-weight-light) 1.25rem/1.4 var(--eds-font-family-primary)","eds-typography-preset-mobile-003":"var(--eds-font-weight-medium) 1.25rem/1.4 var(--eds-font-family-primary)","eds-typography-preset-mobile-003-bold":"var(--eds-font-weight-bold) 1.25rem/1.4 var(--eds-font-family-primary)","eds-theme-typography-headline-lg":"var(--eds-typography-preset-001-light)","eds-theme-typography-headline-lg-bold":"var(--eds-typography-preset-001)","eds-theme-typography-headline-lg-bold-mobile":"var(--eds-typography-preset-mobile-001)","eds-theme-typography-headline-lg-mobile":"var(--eds-typography-preset-mobile-001-light)","eds-theme-typography-headline-md":"var(--eds-typography-preset-002-light)","eds-theme-typography-headline-md-bold":"var(--eds-typography-preset-002)","eds-theme-typography-headline-md-bold-mobile":"var(--eds-typography-preset-mobile-002)","eds-theme-typography-headline-md-mobile":"var(--eds-typography-preset-mobile-002-light)","eds-theme-typography-headline-sm":"var(--eds-typography-preset-003-light)","eds-theme-typography-headline-sm-bold":"var(--eds-typography-preset-003)","eds-theme-typography-headline-sm-bold-mobile":"var(--eds-typography-preset-mobile-003)","eds-theme-typography-headline-sm-mobile":"var(--eds-typography-preset-mobile-003-light)","eds-theme-typography-headline-secondary-lg":"var(--eds-typography-preset-secondary-001-light)","eds-theme-typography-headline-secondary-lg-bold":"var(--eds-typography-preset-secondary-001)","eds-theme-typography-headline-secondary-md":"var(--eds-typography-preset-secondary-002-light)","eds-theme-typography-headline-secondary-md-bold":"var(--eds-typography-preset-secondary-002)","eds-theme-typography-headline-secondary-sm":"var(--eds-typography-preset-secondary-003-light)","eds-theme-typography-headline-secondary-sm-bold":"var(--eds-typography-preset-secondary-003)","eds-theme-typography-title-lg":"var(--eds-typography-preset-004)","eds-theme-typography-title-lg-bold":"var(--eds-typography-preset-004-bold)","eds-theme-typography-title-md":"var(--eds-typography-preset-004)","eds-theme-typography-title-md-bold":"var(--eds-typography-preset-004-bold)","eds-theme-typography-title-sm":"var(--eds-typography-preset-005)","eds-theme-typography-title-sm-bold":"var(--eds-typography-preset-005-bold)","eds-theme-typography-title-xs":"var(--eds-typography-preset-007)","eds-theme-typography-title-xs-bold":"var(--eds-typography-preset-007-bold)","eds-theme-typography-label-lg-subtle":"var(--eds-typography-preset-005)","eds-theme-typography-label-md":"var(--eds-typography-preset-007-bold)","eds-theme-typography-label-md-subtle":"var(--eds-typography-preset-007)","eds-theme-typography-label-sm":"var(--eds-typography-preset-009-bold)","eds-theme-typography-body-xl":"var(--eds-typography-preset-003-light)","eds-theme-typography-body-lg":"var(--eds-typography-preset-004-light)","eds-theme-typography-body-md":"var(--eds-typography-preset-005-light)","eds-theme-typography-body-sm":"var(--eds-typography-preset-006-light)","eds-theme-typography-body-xs":"var(--eds-typography-preset-008-light)","eds-theme-typography-caption-lg":"var(--eds-typography-preset-006-light)","eds-theme-typography-caption-lg-bold":"var(--eds-typography-preset-006)","eds-theme-typography-caption-md":"var(--eds-typography-preset-008-light)","eds-theme-typography-caption-md-bold":"var(--eds-typography-preset-008)","eds-theme-typography-caption-sm":"var(--eds-typography-preset-010-light)","eds-theme-typography-caption-sm-bold":"var(--eds-typography-preset-010)","eds-theme-typography-overline":"var(--eds-typography-preset-011)","eds-theme-typography-overline-md":"var(--eds-typography-preset-011)","eds-theme-typography-overline-sm":"var(--eds-typography-preset-012)","eds-theme-typography-callout":"var(--eds-typography-preset-002-light)","eds-theme-typography-breadcrumb":"var(--eds-typography-preset-009)","eds-theme-typography-button-lg":"var(--eds-typography-preset-006)","eds-theme-typography-button-md":"var(--eds-typography-preset-006)","eds-theme-typography-button-label":"var(--eds-typography-preset-006)","eds-theme-typography-button-label-sm":"var(--eds-typography-preset-008-bold)","eds-theme-typography-form-label":"var(--eds-typography-preset-006)","eds-theme-typography-form-input":"var(--eds-typography-preset-005-light)","eds-theme-typography-link-lg":"var(--eds-typography-preset-004)","eds-theme-typography-link-md":"var(--eds-typography-preset-005)","eds-theme-typography-link-sm":"var(--eds-typography-preset-007)","eds-theme-typography-link-xs":"var(--eds-typography-preset-009)","eds-theme-typography-tab-lg":"var(--eds-typography-preset-006-light)","eds-theme-typography-tab-lg-active":"var(--eds-typography-preset-006)","eds-theme-typography-tab-sm":"var(--eds-typography-preset-008-light)","eds-theme-typography-tab-sm-active":"var(--eds-typography-preset-009)","eds-theme-typography-tag":"var(--eds-typography-preset-009)","eds-theme-border-width":"1px","eds-theme-box-button-border-radius":"4px","eds-theme-box-focus-ring-outline-width":"1px","eds-theme-box-focus-ring-outline-offset":"2px","eds-theme-form-border-width":"1px","eds-theme-form-border-radius":"4px","eds-theme-size-slider-track-height":"var(--eds-size-base-unit)","eds-theme-size-slider-thumb":"calc(var(--eds-size-base-unit) * 3)","eds-theme-color-body-background":"#F4F6F8","eds-theme-color-body-background-inverted":"#383C43","eds-theme-color-background-neutral-default":"#FFFFFF","eds-theme-color-background-neutral-default-hover":"#F4F6F8","eds-theme-color-background-neutral-subtle":"#F4F6F8","eds-theme-color-background-neutral-subtle-hover":"#E7E8EA","eds-theme-color-background-neutral-medium":"#E7E8EA","eds-theme-color-background-neutral-medium-hover":"#C0C4C8","eds-theme-color-background-brand-primary-default":"#F0F0FC","eds-theme-color-background-brand-primary-subtle":"#F0F0FC","eds-theme-color-background-brand-primary-strong":"#6B65E2","eds-theme-color-background-brand-primary-strong-hover":"#3E42B1","eds-theme-color-background-utility-success":"#ECFFF5","eds-theme-color-background-utility-warning":"#FFF1E9","eds-theme-color-background-utility-error":"#FFF0F4","eds-theme-color-background-grade-complete-default":"#008656","eds-theme-color-background-grade-complete-subtle":"#ECFFF5","eds-theme-color-background-grade-revise-default":"#F7BE2D","eds-theme-color-background-grade-revise-subtle":"#FDF1D0","eds-theme-color-background-grade-stop-default":"#D41E52","eds-theme-color-background-grade-stop-subtle":"#FFF0F4","eds-theme-color-background-disabled":"#C0C4C8","eds-theme-color-border-neutral-subtle":"#E7E8EA","eds-theme-color-border-neutral-subtle-hover":"#C0C4C8","eds-theme-color-border-neutral-default":"#C0C4C8","eds-theme-color-border-neutral-default-hover":"#999EA3","eds-theme-color-border-neutral-strong":"#999EA3","eds-theme-color-border-neutral-strong-hover":"#878C90","eds-theme-color-border-brand-primary-subtle":"#E0E0F9","eds-theme-color-border-brand-primary-default":"var(--eds-theme-color-border-brand-primary)","eds-theme-color-border-brand-primary":"#C4C1F3","eds-theme-color-border-brand-primary-strong":"#A6A3EE","eds-theme-color-border-utility-success-subtle":"#B7E9CE","eds-theme-color-border-utility-success-default":"#8FDCB3","eds-theme-color-border-utility-success-strong":"#59C88C","eds-theme-color-border-utility-warning-subtle":"#FFCBA5","eds-theme-color-border-utility-warning-default":"#FFAF76","eds-theme-color-border-utility-warning-strong":"#F6924A","eds-theme-color-border-utility-error-subtle":"#FFCBD7","eds-theme-color-border-utility-error-default":"#FB90B0","eds-theme-color-border-utility-error-strong":"#F76C96","eds-theme-color-border-grade-complete":"#8FDCB3","eds-theme-color-border-grade-revise-subtle":"#FFEBB3","eds-theme-color-border-grade-revise-default":"#FFDD80","eds-theme-color-border-grade-revise-strong":"#F7BE2D","eds-theme-color-border-grade-stop":"#FB90B0","eds-theme-color-border-disabled":"#C0C4C8","eds-theme-color-button-primary-brand-background":"#6B65E2","eds-theme-color-button-primary-brand-background-hover":"#5751D2","eds-theme-color-button-primary-brand-background-active":"#3E42B1","eds-theme-color-button-primary-brand-border":"#6B65E2","eds-theme-color-button-primary-brand-border-hover":"#5751D2","eds-theme-color-button-primary-brand-border-active":"#3E42B1","eds-theme-color-button-primary-brand-text":"#FFFFFF","eds-theme-color-button-primary-brand-text-hover":"#FFFFFF","eds-theme-color-button-primary-brand-text-active":"#FFFFFF","eds-theme-color-button-primary-error-background":"#D41E52","eds-theme-color-button-primary-error-background-hover":"#BD0044","eds-theme-color-button-primary-error-background-active":"#8F0134","eds-theme-color-button-primary-error-border":"#D41E52","eds-theme-color-button-primary-error-border-hover":"#BD0044","eds-theme-color-button-primary-error-border-active":"#8F0134","eds-theme-color-button-primary-error-text":"#FFFFFF","eds-theme-color-button-primary-error-text-hover":"#FFFFFF","eds-theme-color-button-primary-error-text-active":"#FFFFFF","eds-theme-color-button-secondary-brand-background":"rgba(0, 0, 0, 0)","eds-theme-color-button-secondary-brand-background-hover":"#5751D2","eds-theme-color-button-secondary-brand-background-active":"#3E42B1","eds-theme-color-button-secondary-brand-border":"#6B65E2","eds-theme-color-button-secondary-brand-border-hover":"#5751D2","eds-theme-color-button-secondary-brand-border-active":"#3E42B1","eds-theme-color-button-secondary-brand-text":"#5751D2","eds-theme-color-button-secondary-brand-text-hover":"#FFFFFF","eds-theme-color-button-secondary-brand-text-active":"#FFFFFF","eds-theme-color-button-secondary-brand-icon":"#6B65E2","eds-theme-color-button-secondary-brand-icon-hover":"#FFFFFF","eds-theme-color-button-secondary-brand-icon-active":"#FFFFFF","eds-theme-color-button-secondary-neutral-background":"rgba(0, 0, 0, 0)","eds-theme-color-button-secondary-neutral-background-hover":"#E7E8EA","eds-theme-color-button-secondary-neutral-background-active":"#383C43","eds-theme-color-button-secondary-neutral-border":"#5D6369","eds-theme-color-button-secondary-neutral-border-hover":"#5D6369","eds-theme-color-button-secondary-neutral-border-active":"#383C43","eds-theme-color-button-secondary-neutral-text":"#5D6369","eds-theme-color-button-secondary-neutral-text-hover":"#5D6369","eds-theme-color-button-secondary-neutral-text-active":"#FFFFFF","eds-theme-color-button-secondary-neutral-icon":"#999EA3","eds-theme-color-button-secondary-neutral-icon-hover":"#999EA3","eds-theme-color-button-secondary-neutral-icon-active":"#FFFFFF","eds-theme-color-button-secondary-success-background":"rgba(0, 0, 0, 0)","eds-theme-color-button-secondary-success-background-hover":"#007249","eds-theme-color-button-secondary-success-background-active":"#005939","eds-theme-color-button-secondary-success-border":"#008656","eds-theme-color-button-secondary-success-border-hover":"#007249","eds-theme-color-button-secondary-success-border-active":"#005939","eds-theme-color-button-secondary-success-text":"#007249","eds-theme-color-button-secondary-success-text-hover":"#FFFFFF","eds-theme-color-button-secondary-success-text-active":"#FFFFFF","eds-theme-color-button-secondary-success-icon":"#008656","eds-theme-color-button-secondary-success-icon-hover":"#FFFFFF","eds-theme-color-button-secondary-success-icon-active":"#FFFFFF","eds-theme-color-button-secondary-warning-background":"rgba(0, 0, 0, 0)","eds-theme-color-button-secondary-warning-background-hover":"#AC3400","eds-theme-color-button-secondary-warning-background-active":"#842800","eds-theme-color-button-secondary-warning-border":"#C64600","eds-theme-color-button-secondary-warning-border-hover":"#AC3400","eds-theme-color-button-secondary-warning-border-active":"#842800","eds-theme-color-button-secondary-warning-text":"#AC3400","eds-theme-color-button-secondary-warning-text-hover":"#FFFFFF","eds-theme-color-button-secondary-warning-text-active":"#FFFFFF","eds-theme-color-button-secondary-warning-icon":"#C64600","eds-theme-color-button-secondary-warning-icon-hover":"#FFFFFF","eds-theme-color-button-secondary-warning-icon-active":"#FFFFFF","eds-theme-color-button-secondary-error-background":"rgba(0, 0, 0, 0)","eds-theme-color-button-secondary-error-background-hover":"#BD0044","eds-theme-color-button-secondary-error-background-active":"#8F0134","eds-theme-color-button-secondary-error-border":"#D41E52","eds-theme-color-button-secondary-error-border-hover":"#BD0044","eds-theme-color-button-secondary-error-border-active":"#8F0134","eds-theme-color-button-secondary-error-text":"#BD0044","eds-theme-color-button-secondary-error-text-hover":"#FFFFFF","eds-theme-color-button-secondary-error-text-active":"#FFFFFF","eds-theme-color-button-secondary-error-icon":"#D41E52","eds-theme-color-button-secondary-error-icon-hover":"#FFFFFF","eds-theme-color-button-secondary-error-icon-active":"#FFFFFF","eds-theme-color-button-icon-brand":"#6B65E2","eds-theme-color-button-icon-brand-hover":"#6B65E2","eds-theme-color-button-icon-brand-active":"#FFFFFF","eds-theme-color-button-icon-brand-background":"rgba(0, 0, 0, 0)","eds-theme-color-button-icon-brand-background-hover":"#E0E0F9","eds-theme-color-button-icon-brand-background-active":"#5751D2","eds-theme-color-button-icon-brand-border":"rgba(0, 0, 0, 0)","eds-theme-color-button-icon-brand-border-hover":"#E0E0F9","eds-theme-color-button-icon-brand-border-active":"#5751D2","eds-theme-color-button-icon-brand-text":"#5751D2","eds-theme-color-button-icon-brand-text-hover":"#5751D2","eds-theme-color-button-icon-brand-text-active":"#FFFFFF","eds-theme-color-button-icon-neutral":"#5D6369","eds-theme-color-button-icon-neutral-hover":"#5D6369","eds-theme-color-button-icon-neutral-active":"#FFFFFF","eds-theme-color-button-icon-neutral-background":"rgba(0, 0, 0, 0)","eds-theme-color-button-icon-neutral-background-hover":"#E7E8EA","eds-theme-color-button-icon-neutral-background-active":"#5D6369","eds-theme-color-button-icon-neutral-border":"rgba(0, 0, 0, 0)","eds-theme-color-button-icon-neutral-border-hover":"#E7E8EA","eds-theme-color-button-icon-neutral-border-active":"#5D6369","eds-theme-color-button-icon-neutral-text":"#5D6369","eds-theme-color-button-icon-neutral-text-hover":"#5D6369","eds-theme-color-button-icon-neutral-text-active":"#FFFFFF","eds-theme-color-button-icon-success":"#008656","eds-theme-color-button-icon-success-hover":"#008656","eds-theme-color-button-icon-success-active":"#FFFFFF","eds-theme-color-button-icon-success-background":"rgba(0, 0, 0, 0)","eds-theme-color-button-icon-success-background-hover":"#B7E9CE","eds-theme-color-button-icon-success-background-active":"#007249","eds-theme-color-button-icon-success-border":"rgba(0, 0, 0, 0)","eds-theme-color-button-icon-success-border-hover":"#B7E9CE","eds-theme-color-button-icon-success-border-active":"#007249","eds-theme-color-button-icon-success-text":"#007249","eds-theme-color-button-icon-success-text-hover":"#007249","eds-theme-color-button-icon-success-text-active":"#FFFFFF","eds-theme-color-button-icon-warning":"#C64600","eds-theme-color-button-icon-warning-hover":"#C64600","eds-theme-color-button-icon-warning-active":"#FFFFFF","eds-theme-color-button-icon-warning-background":"rgba(0, 0, 0, 0)","eds-theme-color-button-icon-warning-background-hover":"#FFF1E9","eds-theme-color-button-icon-warning-background-active":"#AC3400","eds-theme-color-button-icon-warning-border":"rgba(0, 0, 0, 0)","eds-theme-color-button-icon-warning-border-hover":"#FFF1E9","eds-theme-color-button-icon-warning-border-active":"#AC3400","eds-theme-color-button-icon-warning-text":"#AC3400","eds-theme-color-button-icon-warning-text-hover":"#AC3400","eds-theme-color-button-icon-warning-text-active":"#FFFFFF","eds-theme-color-button-icon-error":"#D41E52","eds-theme-color-button-icon-error-hover":"#D41E52","eds-theme-color-button-icon-error-active":"#FFFFFF","eds-theme-color-button-icon-error-background":"rgba(0, 0, 0, 0)","eds-theme-color-button-icon-error-background-hover":"#FFCBD7","eds-theme-color-button-icon-error-background-active":"#BD0044","eds-theme-color-button-icon-error-border":"rgba(0, 0, 0, 0)","eds-theme-color-button-icon-error-border-hover":"#FFCBD7","eds-theme-color-button-icon-error-border-active":"#BD0044","eds-theme-color-button-icon-error-text":"#BD0044","eds-theme-color-button-icon-error-text-hover":"#BD0044","eds-theme-color-button-icon-error-text-active":"#FFFFFF","eds-theme-color-checkbox-brand-background":"#8984E8","eds-theme-color-data-bar-background":"#F4F6F8","eds-theme-color-data-bar-border":"#C0C4C8","eds-theme-color-focus-ring":"#6B65E2","eds-theme-color-focus-ring-inverted":"#FFFFFF","eds-theme-color-form-border":"#878C90","eds-theme-color-form-border-hover":"#21272D","eds-theme-color-form-background":"#FFFFFF","eds-theme-color-form-background-hover":"#F4F6F8","eds-theme-color-form-label":"#383C43","eds-theme-color-icon-neutral-default":"#5D6369","eds-theme-color-icon-neutral-default-inverse":"#FFFFFF","eds-theme-color-icon-neutral-default-hover":"#383C43","eds-theme-color-icon-neutral-strong":"#383C43","eds-theme-color-icon-neutral-strong-hover":"#21272D","eds-theme-color-icon-neutral-subtle":"#878C90","eds-theme-color-icon-neutral-subtle-hover":"#5D6369","eds-theme-color-icon-link-default":"#6B65E2","eds-theme-color-icon-link-default-hover":"#5751D2","eds-theme-color-icon-brand-primary":"#8984E8","eds-theme-color-icon-brand-primary-hover":"#6B65E2","eds-theme-color-icon-utility-success":"#00A56A","eds-theme-color-icon-utility-success-hover":"#008656","eds-theme-color-icon-utility-warning":"#E06B00","eds-theme-color-icon-utility-warning-hover":"#C64600","eds-theme-color-icon-utility-error":"#F1497B","eds-theme-color-icon-utility-error-hover":"#D41E52","eds-theme-color-icon-grade-complete":"#00A56A","eds-theme-color-icon-grade-complete-hover":"#00A56A","eds-theme-color-icon-grade-revise":"#21272D","eds-theme-color-icon-grade-revise-hover":"#161B1F","eds-theme-color-icon-grade-stop":"#F1497B","eds-theme-color-icon-grade-stop-hover":"#D41E52","eds-theme-color-icon-disabled":"#C0C4C8","eds-theme-color-link-brand-text":"var(--eds-theme-color-text-neutral-strong)","eds-theme-color-link-brand-text-hover":"var(--eds-theme-color-text-brand-default)","eds-theme-color-link-brand-text-focus":"var(--eds-theme-color-text-neutral-default-inverse)","eds-theme-color-link-brand-text-decoration":"var(--eds-theme-color-text-brand-default)","eds-theme-color-link-brand-text-decoration-hover":"var(--eds-theme-color-text-brand-default)","eds-theme-color-link-brand-text-decoration-focus":"var(--eds-theme-color-text-neutral-default-inverse)","eds-theme-color-link-brand-background-focus":"var(--eds-theme-color-text-brand-default)","eds-theme-color-link-neutral-text":"var(--eds-theme-color-text-neutral-strong)","eds-theme-color-link-neutral-text-hover":"var(--eds-theme-color-text-brand-default)","eds-theme-color-link-neutral-text-focus":"var(--eds-theme-color-text-neutral-default-inverse)","eds-theme-color-link-neutral-text-decoration":"var(--eds-theme-color-text-neutral-default)","eds-theme-color-link-neutral-text-decoration-hover":"var(--eds-theme-color-text-brand-default)","eds-theme-color-link-neutral-text-decoration-focus":"var(--eds-theme-color-text-neutral-default-inverse)","eds-theme-color-link-neutral-background-focus":"var(--eds-theme-color-text-neutral-default)","eds-theme-color-modal-brand-header-background":"#8984E8","eds-theme-color-progress-bar-background":"#E7E8EA","eds-theme-color-progress-bar-border":"#E7E8EA","eds-theme-color-radio-brand-background":"#8984E8","eds-theme-color-text-neutral-default":"#383C43","eds-theme-color-text-neutral-default-inverse":"#FFFFFF","eds-theme-color-text-neutral-strong":"#21272D","eds-theme-color-text-neutral-subtle":"#5D6369","eds-theme-color-text-utility-success":"#007249","eds-theme-color-text-utility-warning":"#AC3400","eds-theme-color-text-utility-error":"#BD0044","eds-theme-color-text-grade-complete":"#007249","eds-theme-color-text-grade-revise":"#21272D","eds-theme-color-text-grade-stop":"#BD0044","eds-theme-color-text-disabled":"#C0C4C8","eds-theme-color-text-brand-default":"var(--eds-theme-color-text-brand-primary)","eds-theme-color-text-brand-primary":"#5751D2","eds-theme-color-text-highlight-foreground":"#21272D","eds-theme-color-text-highlight-background":"#FDF1D0","eds-theme-color-toggle-on-background":"var(--eds-theme-color-background-brand-primary-strong)","eds-theme-color-toggle-off-background":"var(--eds-theme-color-icon-neutral-subtle)","eds-theme-color-toggle-disabled-background":"var(--eds-theme-color-icon-disabled)","eds-theme-color-toggle-disabled-text":"var(--eds-theme-color-text-disabled)","eds-theme-color-toggle-primary-text":"var(--eds-theme-color-text-neutral-default)","eds-theme-color-toggle-thumb":"var(--eds-theme-color-text-neutral-default-inverse)","eds-theme-color-transparent-black-0":"rgba(0, 0, 0, 0)","eds-theme-color-transparent-black-30":"rgba(0, 0, 0, .3)","eds-theme-color-transparent-white-0":"rgba(255, 255, 255, 0)","eds-anim-fade-quick":"0.15s","eds-anim-fade-long":"0.4s","eds-anim-move-quick":"0.15s","eds-anim-move-medium":"0.3s","eds-anim-move-long":"0.4s","eds-anim-ease":"ease","eds-border-width-sm":"1px","eds-border-width-md":"2px","eds-border-width-lg":"4px","eds-border-width-xl":"8px","eds-border-radius-none":"0px","eds-border-radius-md":"4px","eds-border-radius-lg":"8px","eds-border-radius-xl":"20px","eds-border-radius-round":"50%","eds-border-radius-full":"9999px","eds-color-brand-grape-100":"#F0F0FC","eds-color-brand-grape-200":"#E0E0F9","eds-color-brand-grape-300":"#C4C1F3","eds-color-brand-grape-400":"#A6A3EE","eds-color-brand-grape-500":"#8984E8","eds-color-brand-grape-600":"#6B65E2","eds-color-brand-grape-700":"#5751D2","eds-color-brand-grape-800":"#3E42B1","eds-color-neutral-100":"#F4F6F8","eds-color-neutral-200":"#E7E8EA","eds-color-neutral-300":"#C0C4C8","eds-color-neutral-400":"#999EA3","eds-color-neutral-500":"#878C90","eds-color-neutral-600":"#5D6369","eds-color-neutral-700":"#383C43","eds-color-neutral-800":"#21272D","eds-color-neutral-white":"#FFFFFF","eds-color-neutral-black":"#161B1F","eds-color-other-mint-100":"#ECFFF5","eds-color-other-mint-200":"#B7E9CE","eds-color-other-mint-300":"#8FDCB3","eds-color-other-mint-400":"#59C88C","eds-color-other-mint-500":"#00A56A","eds-color-other-mint-600":"#008656","eds-color-other-mint-700":"#007249","eds-color-other-mint-800":"#005939","eds-color-other-yellow-100":"#FDF1D0","eds-color-other-yellow-200":"#FFEBB3","eds-color-other-yellow-300":"#FFDD80","eds-color-other-yellow-400":"#F7BE2D","eds-color-other-yellow-500":"#D18400","eds-color-other-yellow-600":"#BF7300","eds-color-other-yellow-700":"#9E5B03","eds-color-other-yellow-800":"#854C03","eds-color-other-lemon":"#F5FF8F","eds-color-other-eraser":"#F3DCE2","eds-color-other-orange-100":"#FFF1E9","eds-color-other-orange-200":"#FFCBA5","eds-color-other-orange-300":"#FFAF76","eds-color-other-orange-400":"#F6924A","eds-color-other-orange-500":"#E06B00","eds-color-other-orange-600":"#C64600","eds-color-other-orange-700":"#AC3400","eds-color-other-orange-800":"#842800","eds-color-other-ruby-100":"#FFF0F4","eds-color-other-ruby-200":"#FFCBD7","eds-color-other-ruby-300":"#FB90B0","eds-color-other-ruby-400":"#F76C96","eds-color-other-ruby-500":"#F1497B","eds-color-other-ruby-600":"#D41E52","eds-color-other-ruby-700":"#BD0044","eds-color-other-ruby-800":"#8F0134","eds-l-max-width":"71.25rem","eds-l-sidebar-width":"13.5rem","eds-l-linelength-width":"36rem","eds-outline-width-sm":"1px","eds-outline-width-md":"2px","eds-outline-width-lg":"4px","eds-box-shadow-sm":"0px 0px 1px rgba(0, 0, 0, 0.25), 0px 2px 1px rgba(0, 0, 0, 0.05)","eds-box-shadow-md":"0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.08)","eds-box-shadow-lg":"0px 4px 12px rgba(0, 0, 0, 0.16)","eds-box-shadow-xl":"0px 6px 20px rgba(0, 0, 0, 0.2)","eds-size-1":"var(--eds-size-base-unit)","eds-size-2":"calc(var(--eds-size-base-unit) * 2)","eds-size-3":"calc(var(--eds-size-base-unit) * 3)","eds-size-4":"calc(var(--eds-size-base-unit) * 4)","eds-size-5":"calc(var(--eds-size-base-unit) * 5)","eds-size-6":"calc(var(--eds-size-base-unit) * 6)","eds-size-7":"calc(var(--eds-size-base-unit) * 7)","eds-size-8":"calc(var(--eds-size-base-unit) * 8)","eds-size-9":"calc(var(--eds-size-base-unit) * 9)","eds-size-10":"calc(var(--eds-size-base-unit) * 10)","eds-size-11":"calc(var(--eds-size-base-unit) * 11)","eds-size-12":"calc(var(--eds-size-base-unit) * 12)","eds-size-20":"calc(var(--eds-size-base-unit) * 20)","eds-size-base-unit":"0.5rem","eds-size-half":"calc(var(--eds-size-base-unit) / 2)","eds-size-quarter":"calc(var(--eds-size-base-unit) / 4)","eds-size-1-and-half":"calc(var(--eds-size-base-unit) * 1.5)","eds-size-2-and-half":"calc(var(--eds-size-base-unit) * 2.5)","eds-z-index-0":"0","eds-z-index-100":"100","eds-z-index-200":"200","eds-z-index-300":"300","eds-z-index-400":"400","eds-z-index-500":"500","eds-z-index-top":"99999","eds-z-index-bottom":"-100"}'),recurseToPrimaryValue=value=>value.startsWith("var(--eds")?recurseToPrimaryValue(tokens_namespaceObject[value.slice(6,-1)]):value;function filterTokens(prefix){return Object.entries(tokens_namespaceObject).filter((_ref=>{let[name]=_ref;return name.startsWith(prefix)})).map((_ref2=>{let[name,value]=_ref2;return{name:`--${name}`,value:recurseToPrimaryValue(value)}}))}}}]);