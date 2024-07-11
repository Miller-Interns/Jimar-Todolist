// Styling typescripts
// Used for STYLING

import { computed } from 'vue'

import { addButtonState, displayTaskList, showCategoryOptions } from '../main-data-flow'

export const toggleAddButtonStyle = computed(() => {
  return addButtonState.value ? colorSoftRed : {}
})

export const toggleDisplayTaskListStyle = computed(() => {
  return displayTaskList.value ? colorSoftRed : {}
})

export const checkBoxStateToggleStyle = (isDone: boolean) => {
  return computed(() => ({
    textDecoration: isDone ? 'line-through' : 'none'
  })).value
}

export const toggleShowCategoryOptionStyle = computed(() => {
  return showCategoryOptions.value ? {} : {'rotate':'180deg'}
})

// COLOR STYLE
const colorSoftRed = { 'background-color': '#f44336' }
