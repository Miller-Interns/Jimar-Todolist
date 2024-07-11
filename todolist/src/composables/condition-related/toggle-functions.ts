import {
  displayTaskList,
  addButtonState,
  hideCompleted,
  checkBoxState,
  selectedShowCategoryState,
  showCategoryOptions
} from '../main-data-flow'

export function toggleDisplayTaskList() {
  displayTaskList.value = !displayTaskList.value
}

export function toggleAddButtonState() {
  addButtonState.value = !addButtonState.value
}

export function toggleHideCompleted() {
  hideCompleted.value = !hideCompleted.value
}

export function checkBoxStateToggle(updateCompleted) {
  checkBoxState.value = updateCompleted
}

export function showSelectedCategoryToggle() {
  selectedShowCategoryState.value = !selectedShowCategoryState.value
}

export function toggleShowCategoryOptions() {
  showCategoryOptions.value = !showCategoryOptions.value;
}